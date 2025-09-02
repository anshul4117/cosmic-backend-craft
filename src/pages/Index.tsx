import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import TargetCursor from "@/components/TargetCursor";
import ScrollingBackground from "@/components/ScrollingBackground";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <TargetCursor />
      <Navigation />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="about" className="relative">
          <ScrollingBackground variant="dots" speed={0.5} opacity={0.05} />
          <About />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects" className="relative">
          <ScrollingBackground variant="grid" speed={0.3} opacity={0.06} />
          <Projects />
        </section>
        <section id="contact" className="relative">
          <ScrollingBackground variant="gradient" speed={1} opacity={0.04} />
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
