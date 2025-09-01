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
            <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            My journey in backend development through internships and practical experience
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-3 sm:left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-30"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative pl-10 sm:pl-12 pb-8 sm:pb-12"
              >
                {/* Timeline dot */}
                <div className="absolute left-1.5 sm:left-2 top-6 sm:top-8 w-3 h-3 sm:w-4 sm:h-4 bg-primary rounded-full border-2 sm:border-4 border-background glow"></div>

                <Card className="glass card-shadow hover:glow transition-smooth cursor-target">
                  <CardHeader>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div>
                        <CardTitle className="text-lg sm:text-xl font-bold">{exp.title}</CardTitle>
                        <div className="flex items-center gap-2 text-muted-foreground mt-1">
                          <Building className="w-4 h-4" />
                          <span className="text-sm sm:text-base">{exp.company}</span>
                        </div>
                      </div>
                      <div className="flex flex-col lg:items-end gap-2">
                        <Badge variant="secondary" className="w-fit text-xs sm:text-sm">
                          {exp.type}
                        </Badge>
                        <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                          <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                          <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-sm sm:text-base">Key Responsibilities:</h4>
                        <ul className="space-y-1">
                          {exp.responsibilities.map((responsibility, idx) => (
                            <li key={idx} className="text-muted-foreground flex items-start gap-2 text-xs sm:text-sm">
                              <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-primary rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></span>
                              {responsibility}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-sm sm:text-base">Technologies:</h4>
                        <div className="flex flex-wrap gap-1 sm:gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <Badge 
                              key={idx} 
                              variant="outline" 
                              className="glass text-xs hover:bg-primary/20 transition-smooth cursor-target"
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