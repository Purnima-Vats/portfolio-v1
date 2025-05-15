import About from "@/components/About";
import StarsCanvas from "@/components/canvas/Stars";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="h-full -mt-16">
      <HeroSection/>
      <About/>
      {/* <Experience/> */}
      <Skills/>
      <Projects/>
      <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
    </div>
  )
}
