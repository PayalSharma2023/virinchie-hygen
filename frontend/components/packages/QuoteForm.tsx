export default function QuoteForm() {
  return (
    <section className="py-20 bg-slate-50 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-2xl font-bold text-center text-[#1a2a6c] mb-6">
          Request a Custom Quote
        </h2>

        <form className="space-y-4">
          <input className="w-full border p-3 rounded" placeholder="Your Name" />
          <input className="w-full border p-3 rounded" placeholder="Email" />
          <input className="w-full border p-3 rounded" placeholder="Phone" />
          <select className="w-full border p-3 rounded" aria-label="Select Package">
            <option>Select Package</option>
            <option>Silver</option>
            <option>Gold</option>
            <option>Platinum</option>
            <option>Custom</option>
          </select>
          <textarea
            className="w-full border p-3 rounded"
            placeholder="Project requirements"
          />

          <button className="w-full bg-[#1a2a6c] text-white py-3 rounded-lg font-semibold hover:bg-[#152053] transition">
            Submit Request
          </button>
        </form>
      </div>
    </section>
  );
}
