import Header from "@/components/Header";
import About from "@/components/home/About";
import Hero from "@/components/home/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>
        <Header/>
        <Hero />
        <About/>
      </div>
    </>
  );
}
