import Footer from "@/components/Footer";
import Header from "@/components/Header";
import About from "@/components/home/About";
import Hero from "@/components/home/Hero";
import Working from "@/components/home/Working";
import TestimonialsSection, { AnimatedTestimonials } from "@/components/ui/AnimatedTestimonials";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <About />
        <Working />
        <TestimonialsSection />
      </div>
    </>
  );
}
