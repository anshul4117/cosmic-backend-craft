import { motion } from "framer-motion";
import { Heart, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      url: "https://github.com/yourusername"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn", 
      url: "https://linkedin.com/in/yourprofile"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      url: "mailto:your.email@example.com"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-border/50 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          {/* Logo/Name */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block"
          >
            <button
              onClick={scrollToTop}
              className="text-2xl font-bold text-gradient hover:opacity-80 transition-smooth"
            >
              Backend Developer Portfolio
            </button>
          </motion.div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-full hover:bg-primary/20 transition-smooth hover:scale-110"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-muted-foreground text-sm">
            <span>© {currentYear} Backend Developer Portfolio.</span>
            <div className="flex items-center gap-1">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>using React & Tailwind CSS</span>
            </div>
          </div>

          {/* Tech Stack Note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xs text-muted-foreground"
          >
            Built with React, TypeScript, Tailwind CSS, Framer Motion & Shadcn UI
          </motion.p>
        </motion.div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-32 h-32 gradient-primary rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-24 h-24 gradient-accent rounded-full opacity-10 blur-2xl"></div>
      </div>
    </footer>
  );
};

export default Footer;