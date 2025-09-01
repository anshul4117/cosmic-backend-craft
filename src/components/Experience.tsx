import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Backend Developer",
      company: "Second Internship Company",
      location: "On-site",
      duration: "June 2024 - December 2024",
      type: "Internship",
      responsibilities: [
        "Built robust backend systems using modern technologies",
        "Developed and maintained admin panel with comprehensive functionality",
        "Implemented RESTful APIs for various business requirements",
        "Collaborated with team to deliver scalable solutions",
        "Optimized database queries for improved performance"
      ],
      technologies: ["Node.js", "Express.js", "MongoDB", "Admin Panel", "REST APIs"]
    },
    {
      title: "Backend Developer",
      company: "First Internship Company",
      location: "On-site",
      duration: "February 2024 - May 2024",
      type: "Internship",
      responsibilities: [
        "Gained hands-on experience in backend development",
        "Worked with databases and server-side technologies",
        "Participated in code reviews and agile development processes",
        "Learned industry best practices and development workflows",
        "Contributed to team projects and deliverables"
      ],
      technologies: ["Backend Development", "Database Management", "API Integration", "Team Collaboration"]
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My journey in backend development through internships and practical experience
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-30"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative pl-12 pb-12"
              >
                {/* Timeline dot */}
                <div className="absolute left-2 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background glow"></div>

                <Card className="glass card-shadow hover:glow transition-smooth">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl font-bold">{exp.title}</CardTitle>
                        <div className="flex items-center gap-2 text-muted-foreground mt-1">
                          <Building className="w-4 h-4" />
                          <span>{exp.company}</span>
                        </div>
                      </div>
                      <div className="flex flex-col sm:items-end gap-2">
                        <Badge variant="secondary" className="w-fit">
                          {exp.type}
                        </Badge>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
                        <ul className="space-y-1">
                          {exp.responsibilities.map((responsibility, idx) => (
                            <li key={idx} className="text-muted-foreground flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                              {responsibility}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <Badge 
                              key={idx} 
                              variant="outline" 
                              className="glass text-xs hover:bg-primary/20 transition-smooth"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;