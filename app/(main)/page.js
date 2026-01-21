
import Faqs from "@/components/home/Faqs";
import Hero from "@/components/home/Hero";
import PopularNotes from "@/components/home/PopularNotes";
import TestimonialsSection from "@/components/ui/AnimatedTestimonials";

export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <PopularNotes />
        <TestimonialsSection />
        <Faqs/>
      </div>
    </>
  );
}

