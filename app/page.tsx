import About from "@/components/About";
import Experience from "@/components/Experience";
import HeroSection from "@/components/HeroSection";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="h-full -mt-16">
      <HeroSection/>
      <About/>
      <Experience/>
      <Skills/>
    </div>
  )
}
