import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

// ─── ENV (loaded from .env.local) ────────────────────────────────────────────
const {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_SECURE,   // "true" → port 465 SSL, omit/false → 587 STARTTLS
  SMTP_USER,
  SMTP_PASS,
  SMTP_FROM,
  ADMIN_EMAIL,   // address that receives the query
  ADMIN_CC,      // optional CC (leave blank to skip)
} = process.env

// ─── TRANSPORTER ─────────────────────────────────────────────────────────────
// Created once per cold-start; Nodemailer pools connections automatically.

function getTransporter() {
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    throw new Error(
      "Missing SMTP config. Set SMTP_HOST, SMTP_USER and SMTP_PASS in .env.local"
    )
  }
  return nodemailer.createTransport({
    host:   SMTP_HOST,
    port:   Number(SMTP_PORT ?? 587),
    secure: SMTP_SECURE === "true",
    auth:   { user: SMTP_USER, pass: SMTP_PASS },
  })
}

// ─── EMAIL BUILDERS ──────────────────────────────────────────────────────────

function adminEmailHtml(d: {
  name: string; email: string; phone: string; service: string; message: string
}) {
  const when = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata", dateStyle: "full", timeStyle: "short",
  })

  const rows = [
    ["Name",    d.name],
    ["Email",   `<a href="mailto:${d.email}" style="color:#210568">${d.email}</a>`],
    ["Phone",   `<a href="tel:${d.phone.replace(/\s/g,"")}" style="color:#210568">${d.phone}</a>`],
    ["Service", d.service],
  ]
    .map(([label, value]) => `
      <tr>
        <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;width:130px;vertical-align:top;
                   font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;
                   color:#94a3b8;font-family:sans-serif;">${label}</td>
        <td style="padding:10px 0 10px 16px;border-bottom:1px solid #f1f5f9;vertical-align:top;
                   font-size:14px;color:#1e293b;font-family:sans-serif;">${value}</td>
      </tr>`)
    .join("")

  return /* html */`<!DOCTYPE html><html><head><meta charset="utf-8"/></head>
<body style="margin:0;padding:0;background:#f8fafc;font-family:Georgia,serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;padding:32px 16px;">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0"
       style="background:#fff;border-radius:16px;overflow:hidden;border:1px solid #e2e8f0;">

  <!-- accent bar -->
  <tr><td style="height:4px;background:linear-gradient(90deg,#210568,#01589e,#13baf6);"></td></tr>

  <!-- header -->
  <tr><td style="padding:32px 36px 20px;background:#210568;">
    <p style="margin:0;font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;
              color:#93c5fd;">New Enquiry</p>
    <h1 style="margin:8px 0 0;font-size:22px;color:#fff;">Contact Form Submission</h1>
    <p style="margin:6px 0 0;font-size:13px;color:#93c5fd;">${when}</p>
  </td></tr>

  <!-- detail rows -->
  <tr><td style="padding:28px 36px 0;">
    <table width="100%" cellpadding="0" cellspacing="0">${rows}</table>
  </td></tr>

  <!-- message -->
  <tr><td style="padding:24px 36px 0;">
    <p style="margin:0 0 10px;font-size:11px;font-weight:700;letter-spacing:1.5px;
              text-transform:uppercase;color:#94a3b8;font-family:sans-serif;">Message</p>
    <div style="background:#f8fafc;border-radius:12px;padding:18px 20px;border:1px solid #e2e8f0;">
      <p style="margin:0;font-size:14px;line-height:1.8;color:#334155;
                white-space:pre-wrap;font-family:sans-serif;">
        ${d.message.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}
      </p>
    </div>
  </td></tr>

  <!-- reply CTA -->
  <tr><td style="padding:24px 36px 32px;">
    <a href="mailto:${d.email}?subject=Re: Your ${d.service} Enquiry"
       style="display:inline-block;background:#210568;color:#fff;padding:12px 24px;
              border-radius:10px;font-size:13px;font-weight:700;text-decoration:none;
              font-family:sans-serif;">
      Reply to ${d.name} →
    </a>
  </td></tr>

  <!-- footer -->
  <tr><td style="padding:16px 36px;background:#f8fafc;border-top:1px solid #e2e8f0;">
    <p style="margin:0;font-size:11px;color:#94a3b8;font-family:sans-serif;">
      Virinchie Hygen Engineering Consultants · Shimla, HP · Automated notification
    </p>
  </td></tr>

</table>
</td></tr></table>
</body></html>`
}

function autoReplyHtml(d: { name: string; email: string; service: string }) {
  const firstName = d.name.trim().split(" ")[0]
  return /* html */`<!DOCTYPE html><html><head><meta charset="utf-8"/></head>
<body style="margin:0;padding:0;background:#f8fafc;font-family:sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;padding:32px 16px;">
<tr><td align="center">
<table width="580" cellpadding="0" cellspacing="0"
       style="background:#fff;border-radius:16px;overflow:hidden;border:1px solid #e2e8f0;">

  <tr><td style="height:4px;background:linear-gradient(90deg,#210568,#01589e,#13baf6);"></td></tr>

  <!-- brand -->
  <tr><td style="padding:36px 36px 24px;">
    <p style="margin:0;font-size:20px;font-weight:700;color:#210568;font-family:Georgia,serif;">
      Virinchie Hy<span style="color:#e11d48;">gen</span>
    </p>
    <p style="margin:2px 0 0;font-size:11px;letter-spacing:2px;text-transform:uppercase;
              color:#94a3b8;">Engineering Consultants</p>
  </td></tr>

  <!-- body -->
  <tr><td style="padding:0 36px 28px;">
    <h2 style="margin:0 0 16px;font-size:20px;color:#1e293b;font-family:Georgia,serif;">
      We've received your message, ${firstName}!
    </h2>
    <p style="margin:0 0 14px;font-size:14px;line-height:1.8;color:#475569;">
      Thank you for reaching out about:
    </p>
    <div style="background:#f0f9ff;border-left:3px solid #0ea5e9;
                border-radius:0 10px 10px 0;padding:14px 18px;margin:0 0 20px;">
      <p style="margin:0;font-size:14px;font-weight:700;color:#0369a1;">${d.service}</p>
    </div>
    <p style="margin:0 0 14px;font-size:14px;line-height:1.8;color:#475569;">
      A member of our team will review your request and reply within
      <strong>one business day</strong>.
    </p>
    <p style="margin:0 0 20px;font-size:14px;line-height:1.8;color:#475569;">
      For urgent matters, reach us directly:
    </p>
    <table cellpadding="0" cellspacing="0"><tr>
      <td style="padding-right:10px;">
        <a href="tel:+917018167926"
           style="display:inline-block;background:#f1f5f9;color:#210568;padding:10px 18px;
                  border-radius:10px;font-size:13px;font-weight:700;text-decoration:none;
                  border:1px solid #e2e8f0;">📞 +91 7018167926</a>
      </td>
      <td>
        <a href="mailto:info@virinchiehygen.com"
           style="display:inline-block;background:#f1f5f9;color:#210568;padding:10px 18px;
                  border-radius:10px;font-size:13px;font-weight:700;text-decoration:none;
                  border:1px solid #e2e8f0;">✉️ info@virinchiehygen.com</a>
      </td>
    </tr></table>
  </td></tr>

  <!-- footer -->
  <tr><td style="padding:20px 36px;background:#f8fafc;border-top:1px solid #e2e8f0;">
    <p style="margin:0 0 4px;font-size:12px;color:#64748b;">
      <strong style="color:#210568;">Virinchie Hygen Engineering Consultants Pvt. Ltd.</strong>
    </p>
    <p style="margin:0;font-size:11px;color:#94a3b8;">
      Shimla, Himachal Pradesh, India
    </p>
  </td></tr>

</table>
</td></tr></table>
</body></html>`
}

// ─── ROUTE ───────────────────────────────────────────────────────────────────

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const { name, email, phone, service, message } = data

    // ── Server-side guard (client already validates, this is a safety net) ──
    if (!name?.trim() || !email?.trim() || !phone?.trim() || !message?.trim()) {
      return NextResponse.json(
        { success: false, message: "All required fields must be filled." },
        { status: 400 }
      )
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email address." },
        { status: 400 }
      )
    }

    const transporter = getTransporter()
    const from        = SMTP_FROM ?? `Virinchie Hygen <${SMTP_USER}>`
    const to          = ADMIN_EMAIL ?? SMTP_USER!

    // ── 1 · Admin notification ──────────────────────────────────────────────
    await transporter.sendMail({
      from,
      to,
      cc:       ADMIN_CC || undefined,
      replyTo:  email,             // "Reply" in your mail client goes straight to enquirer
      subject:  `New Enquiry: ${service || "General"} — ${name}`,
      text:     `From: ${name} <${email}>\nPhone: ${phone}\nService: ${service}\n\n${message}`,
      html:     adminEmailHtml({ name, email, phone, service, message }),
    })

    // ── 2 · Auto-reply to submitter ─────────────────────────────────────────
    await transporter.sendMail({
      from,
      to:      email,
      subject: "We've received your enquiry — Virinchie Hygen",
      text:    `Dear ${name},\n\nThank you for reaching out about "${service}".\nWe'll reply within one business day.\n\nTeam Virinchie Hygen\n+91 7018167926`,
      html:    autoReplyHtml({ name, email, service }),
    })

    return NextResponse.json({ success: true })

  } catch (err) {
    console.error("[/api/contact]", err)
    return NextResponse.json(
      { success: false, message: "Failed to send. Please try again later." },
      { status: 500 }
    )
  }
}