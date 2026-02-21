import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "@deemlol/next-icons";

const featuredProjects = [
  {
    title: "Luxury Villa in Panchkula",
    image: "/projects/villa-panchkula.jpg",
    link: "/projects",
  },
  {
    title: "Modern Office Space",
    image: "/projects/office-modern.jpg",
    link: "/projects",
  },
  {
    title: "Modular Kitchen Design",
    image: "/projects/modular-kitchen.jpg",
    link: "/projects",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-10 px-6 relative bg-black/40 text-gray-50 overflow-hidden">
      {/* Background — now full cover */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/bg.png"
          alt="background"
          fill
          style={{ objectFit: "cover" }}
          sizes="100vw"
        />
      </div>
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Featured Projects</h2>
        <p className="text-gray-200">Our best construction and design work</p>
      </div>

      <div className=" max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuredProjects.map((project, index) => (
          <Link
            href={project.link}
            key={index}
            className="relative block overflow-hidden rounded-lg shadow-lg hover:scale-105 transition"
          >
            <div className="relative w-full h-56">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
            </div>
          </Link>
        ))}
      </div>
      <Link href="/projects">
        <button className="border  items-center gap-4 mt-8 mx-auto flex border-white px-6 py-3 rounded text-white font-medium hover:bg-white hover:text-black transition">
          All Projects
          <ArrowUpRight size={24} color="#FFFFFF" />
        </button>
      </Link>
    </section>
  );
}
