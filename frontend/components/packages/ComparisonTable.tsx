export default function ComparisonTable() {
  return (
    <section className="py-20 bg-white px-4">
      <h2 className="text-3xl font-bold text-center text-[#1a2a6c] mb-10">
        Package Comparison
      </h2>

      <div className="overflow-x-auto max-w-6xl mx-auto shadow rounded-xl">
        <table className="w-full text-left border-collapse">
          <thead className="bg-[#1a2a6c] text-white">
            <tr>
              <th className="p-4">Feature</th>
              <th className="p-4">Silver</th>
              <th className="p-4">Gold</th>
              <th className="p-4">Platinum</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Steel Grade", "Fe415", "Fe500", "Fe500D"],
              ["Flooring", "Standard Tiles", "Premium Tiles", "Italian Marble"],
              ["Rainwater Harvesting", "—", "✓", "✓"],
              ["Home Automation", "—", "—", "✓"],
            ].map((row, i) => (
              <tr key={i} className="border-b hover:bg-slate-50">
                {row.map((cell, j) => (
                  <td key={j} className="p-4">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
