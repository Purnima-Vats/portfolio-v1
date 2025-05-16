import About from "@/components/About";
import StarsCanvas from "@/components/canvas/Stars";
import Contact from "@/components/Contact";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="h-full -mt-16">
      <div className="relative z-0">
        <HeroSection/>
        <StarsCanvas />
      </div>
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

// Notes
// 1. hero bg   
// 2. about me section text animated  
// 6. contact section animations
// Project dialouge box
