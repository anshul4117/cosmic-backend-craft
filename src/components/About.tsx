import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Server, Zap } from "lucide-react";

const About = () => {
  const skills = [
    "Node.js", "Express.js", "MongoDB", "PostgreSQL", "MySQL", 
    "REST APIs", "GraphQL", "Redis", "Docker", "AWS", 
    "Git", "Linux", "Nginx", "Microservices"
  ];

  const achievements = [
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: "Backend Expertise",
      description: "Specialized in building robust backend systems and APIs"
    },
    {
      icon: <Database className="w-8 h-8 text-primary" />,
      title: "Database Management",
      description: "Experienced with SQL and NoSQL database design and optimization"
    },
    {
      icon: <Server className="w-8 h-8 text-primary" />,
      title: "Scalable Architecture",
      description: "Designing systems that can handle growth and high traffic"
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Performance Focus",
      description: "Optimizing applications for speed and efficiency"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">About Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A dedicated backend developer passionate about creating efficient, scalable solutions. 
            With hands-on experience in modern technologies and a strong foundation in software engineering principles.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass card-shadow hover:glow transition-smooth h-full">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    {achievement.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-muted-foreground text-sm">{achievement.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-8">Technical Skills</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Badge 
                  variant="secondary" 
                  className="glass text-sm py-2 px-4 hover:bg-primary/20 transition-smooth"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;