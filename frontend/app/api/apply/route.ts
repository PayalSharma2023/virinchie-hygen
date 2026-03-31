import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, position, experience, message, resumeLink } = body;

    // Basic validation
    if (!name || !email || !phone || !position) {
      return NextResponse.json({ message: "Required fields missing." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const adminHtml = `
      <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; padding: 32px; border-radius: 12px;">
        <div style="background: linear-gradient(135deg, #210568, #01589e); padding: 28px 32px; border-radius: 10px; margin-bottom: 24px;">
          <h1 style="color: white; margin: 0; font-size: 22px;">New Job Application</h1>
          <p style="color: rgba(255,255,255,0.75); margin: 6px 0 0; font-size: 14px;">Virinchie Hygen Engineering Consultants</p>
        </div>

        <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 10px; padding: 20px 24px; margin-bottom: 20px;">
          <p style="margin: 0 0 4px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #64748b;">Applied Position</p>
          <p style="margin: 0; font-size: 18px; font-weight: 700; color: #1e40af;">${position}</p>
        </div>

        <table style="width: 100%; border-collapse: collapse; background: white; border-radius: 10px; overflow: hidden; border: 1px solid #e2e8f0;">
          ${[
            ["Full Name",   name],
            ["Email",       email],
            ["Phone",       phone],
            ["Experience",  experience || "Not specified"],
            ["Resume/Portfolio", resumeLink || "Not provided"],
          ].map(([label, value], i) => `
            <tr style="background: ${i % 2 === 0 ? "white" : "#f8fafc"};">
              <td style="padding: 14px 20px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: #64748b; width: 40%; border-bottom: 1px solid #f1f5f9;">${label}</td>
              <td style="padding: 14px 20px; font-size: 14px; color: #1e293b; font-weight: 500; border-bottom: 1px solid #f1f5f9;">${value}</td>
            </tr>
          `).join("")}
        </table>

        ${message ? `
        <div style="margin-top: 20px; background: white; border: 1px solid #e2e8f0; border-radius: 10px; padding: 20px 24px;">
          <p style="margin: 0 0 10px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: #64748b;">Cover Message</p>
          <p style="margin: 0; font-size: 14px; color: #374151; line-height: 1.6;">${message.replace(/\n/g, "<br/>")}</p>
        </div>
        ` : ""}

        <p style="margin: 24px 0 0; font-size: 12px; color: #94a3b8; text-align: center;">
          Submitted via Virinchie Hygen Careers · ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST
        </p>
      </div>
    `;

    const candidateHtml = `
      <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; padding: 32px; border-radius: 12px;">
        <div style="background: linear-gradient(135deg, #210568, #01589e); padding: 28px 32px; border-radius: 10px; margin-bottom: 24px;">
          <h1 style="color: white; margin: 0; font-size: 22px;">Application Received!</h1>
          <p style="color: rgba(255,255,255,0.75); margin: 6px 0 0; font-size: 14px;">Virinchie Hygen Engineering Consultants</p>
        </div>
        <p style="font-size: 15px; color: #334155; margin: 0 0 16px;">Hi ${name},</p>
        <p style="font-size: 14px; color: #475569; line-height: 1.7; margin: 0 0 16px;">
          Thank you for applying for the <strong>${position}</strong> position at Virinchie Hygen Engineering Consultants. We've received your application and will review it shortly.
        </p>
        <p style="font-size: 14px; color: #475569; line-height: 1.7; margin: 0 0 24px;">
          Our team typically responds within <strong>3–5 business days</strong>. If you have any questions in the meantime, feel free to reach us at <a href="mailto:info@virinchiehygen.com" style="color: #0369a1;">info@virinchiehygen.com</a>.
        </p>
        <p style="font-size: 14px; color: #334155; margin: 0;">Warm regards,<br/><strong>HR Team</strong><br/>Virinchie Hygen Engineering Consultants</p>
      </div>
    `;

    await transporter.sendMail({
      from: `"Virinchie Hygen Careers" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL ?? process.env.SMTP_USER,
      subject: `New Application: ${position} — ${name}`,
      html: adminHtml,
      replyTo: email,
    });

    await transporter.sendMail({
      from: `"Virinchie Hygen Engineering" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `Application Received — ${position}`,
      html: candidateHtml,
    });

    return NextResponse.json({ message: "Application submitted successfully." });
  } catch (err) {
    console.error("[apply] error:", err);
    return NextResponse.json({ message: "Internal server error." }, { status: 500 });
  }
}