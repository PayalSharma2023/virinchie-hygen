import { FaWater, FaLeaf, FaRoad } from "react-icons/fa";
import ServiceCard from "./Card";

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">
        Our Core Solutions
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        <ServiceCard
          icon={<FaWater className="text-blue-600" />}
          title="Hydrology & Water Systems"
          description="Stormwater & flood management, watershed resilience, and mountain water engineering."
        />
        <ServiceCard
          icon={<FaLeaf className="text-green-600" />}
          title="Environmental Solutions"
          description="Nature-based infrastructure, ecosystem restoration, and sustainable design."
        />
        <ServiceCard
          icon={<FaRoad className="text-gray-700" />}
          title="Civil & Structural"
          description="Climate-adapted structures, resilient transport, and smart infrastructure."
        />
      </div>
    </section>
  );
}
