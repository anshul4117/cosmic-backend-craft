import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Play, Code } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Movie Booking Platform",
      description: "A scalable web application for movie ticket booking with user authentication, seat selection, and payment integration. Currently in development with focus on performance and user experience.",
      status: "In Progress",
      technologies: ["Node.js", "Express.js", "MongoDB", "React", "Stripe API", "JWT"],
      features: [
        "User authentication and authorization",
        "Real-time seat selection",
        "Payment gateway integration",
        "Admin dashboard for movie management",
        "Booking history and notifications"
      ],
      github: "#",
      demo: "#"
    },
    {
      title: "E-commerce Backend API",
      description: "RESTful API for an e-commerce platform with comprehensive product management, user authentication, and order processing capabilities.",
      status: "Completed",
      technologies: ["Node.js", "Express.js", "PostgreSQL", "Redis", "JWT", "Stripe"],
      features: [
        "Product catalog management",
        "Shopping cart functionality",
        "Order processing system",
        "User authentication",
        "Payment integration"
      ],
      github: "#",
      demo: "#"
    },
    {
      title: "Task Management System",
      description: "A collaborative task management backend with real-time updates, team collaboration features, and comprehensive project tracking.",
      status: "Completed",
      technologies: ["Node.js", "Socket.io", "MongoDB", "Express.js", "JWT"],
      features: [
        "Real-time collaboration",
        "Task assignment and tracking",
        "Team management",
        "Progress reporting",
        "Notification system"
      ],
      github: "#",
      demo: "#"
    },
    {
      title: "Blog Content Management",
      description: "A headless CMS backend for blog management with content creation, user roles, and SEO optimization features.",
      status: "Completed",
      technologies: ["Node.js", "Express.js", "MySQL", "Multer", "JWT"],
      features: [
        "Content creation and editing",
        "User role management",
        "Media file handling",
        "SEO optimization",
        "Comment system"
      ],
      github: "#",
      demo: "#"
    },
    {
      title: "Authentication Service",
      description: "Microservice for user authentication with OAuth integration, JWT tokens, and comprehensive security features.",
      status: "Completed",
      technologies: ["Node.js", "Express.js", "Redis", "OAuth", "JWT", "Bcrypt"],
      features: [
        "OAuth integration",
        "JWT token management",
        "Password hashing",
        "Session management",
        "Security middleware"
      ],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section className="py-16 sm:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 cursor-target">
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            A collection of backend projects showcasing my expertise in building scalable, efficient, and secure applications
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card className="glass card-shadow hover:glow transition-smooth h-full flex flex-col cursor-target">
                <CardHeader>
                  <div className="flex items-start justify-between gap-3 sm:gap-4">
                    <CardTitle className="text-lg sm:text-xl font-bold">{project.title}</CardTitle>
                    <Badge 
                      variant={project.status === "In Progress" ? "default" : "secondary"}
                      className={`text-xs ${project.status === "In Progress" ? "bg-primary" : ""}`}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="space-y-3 sm:space-y-4 flex-1">
                    <div>
                      <h4 className="font-semibold mb-2 text-xs sm:text-sm">Key Features:</h4>
                      <ul className="space-y-1">
                        {project.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="text-muted-foreground text-xs flex items-start gap-2">
                            <span className="w-1 h-1 bg-primary rounded-full mt-1.5 flex-shrink-0"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2 text-xs sm:text-sm">Technologies:</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech, idx) => (
                          <Badge 
                            key={idx} 
                            variant="outline" 
                            className="text-xs glass hover:bg-primary/20 transition-smooth cursor-target"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-border/50">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1 glass hover:bg-primary/20 cursor-target text-xs sm:text-sm"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1 glass hover:bg-primary/20 cursor-target text-xs sm:text-sm"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;