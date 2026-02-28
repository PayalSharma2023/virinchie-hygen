import Image from "next/image";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Metrics from "@/components/home/Metrics";
import BenefitsSection from "@/components/home/Benifit";
import CTASection from "@/components/home/Cta";
import ServicesSection from "@/components/services/Section";
import Projects from "@/components/home/Projects";
import Testimonials from "@/components/home/Testimonials";
import Values from "@/components/home/Values";
export default function Home() {
  return (
    < >
     
     <Hero/>
      {/* <Metrics/> */}
      <Values/>
      {/* <ServicesSection/> */}
     <Services/>
     <Projects/>
     <Testimonials/>
     <BenefitsSection/>
     <CTASection/>
    </>
  );
}
