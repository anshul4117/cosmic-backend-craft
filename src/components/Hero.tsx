import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import InteractiveParticles from "./InteractiveParticles";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Interactive Particle Background */}
      <InteractiveParticles 
        count={150}
        color="#8B5CF6"
        speed={0.2}
        baseSize={80}
        spread={8}
        mouseInteraction={true}
        particleTransparency={true}
      />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 gradient-primary rounded-full opacity-20 blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 sm:w-36 md:w-48 h-24 sm:h-36 md:h-48 gradient-accent rounded-full opacity-30 blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 gradient-secondary rounded-full opacity-10 blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex items-center justify-center min-h-screen">
        <div className="w-full max-w-5xl mx-auto pt-16 pb-24 sm:pt-20 sm:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="space-y-6 sm:space-y-8 flex flex-col justify-center items-center"
        >
          <motion.h1 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold cursor-target text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <span className="text-gradient block">Backend Developer</span>
            <span className="text-foreground block mt-2">Building Scalable Solutions</span>
          </motion.h1>

          <motion.p 
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            Passionate backend developer with 1+ year of experience building robust APIs, 
            managing databases, and creating scalable web applications. Currently working on 
            innovative projects including a movie booking platform.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2 w-full max-w-md sm:max-w-none mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <Button 
              size="lg" 
              className="gradient-primary hover:opacity-90 text-white border-0 glow cursor-target w-full sm:w-auto min-w-[140px]"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="glass hover:bg-primary/10 cursor-target w-full sm:w-auto min-w-[140px]"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </motion.div>

          <motion.div 
            className="flex justify-center space-x-4 sm:space-x-6 pt-6 sm:pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <a 
              href="#" 
              className="p-2 sm:p-3 glass rounded-full hover:bg-primary/20 transition-smooth hover:scale-110 cursor-target"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a 
              href="#" 
              className="p-2 sm:p-3 glass rounded-full hover:bg-primary/20 transition-smooth hover:scale-110 cursor-target"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a 
              href="#" 
              className="p-2 sm:p-3 glass rounded-full hover:bg-primary/20 transition-smooth hover:scale-110 cursor-target"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </motion.div>
        </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          <button 
            onClick={() => scrollToSection('about')}
            className="p-2 rounded-full glass hover:bg-primary/20 transition-smooth animate-bounce cursor-target"
          >
            <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;