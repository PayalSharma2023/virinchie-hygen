import Link from "next/link";
type Props = {
  title: string;
  price: string;
  subtitle: string;
  features: string[];
  highlight?: boolean;
  color: "blue" | "orange" | "purple";
};

const gradients = {
  blue: "from-[#1a2a6c] to-[#1a2a6c]",
  orange: "from-orange-500 to-orange-600",
  purple: "from-purple-500 to-purple-700",
};

export default function PackageCard({
  title,
  price,
  subtitle,
  features,
  highlight,
  color,
}: Props) {
  return (
    <div className="relative bg-white rounded-xl shadow-md hover:shadow-xl transition">
      {highlight && (
        <span className="absolute top-4 right-[-30px] rotate-45 bg-green-500 text-white px-8 py-1 text-sm font-semibold">
          Most Popular
        </span>
      )}

      <div
        className={`bg-gradient-to-br ${gradients[color]} text-white p-6 rounded-t-xl text-center`}
      >
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-3xl font-bold mt-2">
          {price}
          <span className="text-sm font-normal"> / sq.ft</span>
        </p>
        <p className="mt-2 text-white/80">{subtitle}</p>
      </div>

      <div className="p-6">
        <ul className="space-y-3 mb-6">
          {features.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-gray-700">
              <span className="text-green-500 font-bold">✓</span>
              {item}
            </li>
          ))}
        </ul>

        <div className="text-center">
            <Link href={`/packages/${title.toLowerCase()}`} className="inline-block">
             
          <button className="border border-[#1a2a6c] text-[#1a2a6c] px-6 py-2 rounded-lg font-semibold hover:bg-[#1a2a6c] hover:text-white transition">
            View Details
          </button>
            </Link>
        </div>
      </div>
    </div>
  );
}
