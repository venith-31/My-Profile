import { motion, useScroll, useSpring } from "motion/react";
import { Briefcase, Building2, Calendar, CheckCircle2 } from "lucide-react";
import { useRef } from "react";

const experiences = [
  {
    title: "Web Development Trainee",
    company: "Mentro",
    period: "2024",
    description: "Initiated my professional journey by mastering the core fundamentals of web development. Focused on building responsive HTML/CSS layouts and interactive React components.",
    tags: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Full Stack Intern",
    company: "Wise finch",
    period: "Jun 2025 - Jul 2025",
    description: "Developed a scalable role-based community management system enabling efficient multi-user operations. Designed responsive dashboards and integrated RESTful APIs for seamless frontend-backend communication, and built core modules for billing, resident management, and maintenance tracking with optimized data handling.",
    tags: ["React", "Node.js", "Express", "MongoDB", "REST APIs"],
  },
  {
    title: "Web Development Intern",
    company: "Zuntra Digital",
    period: "Feb 2026 - May 2026",
    description: "Developed responsive and visually appealing websites for pet-related services and corporate portfolios, ensuring cross-device compatibility. Collaborated to build responsive UI components, integrated APIs, and contributed to the Rent It platform by implementing AI chatbot functionalities using Nest JS, PostgreSQL, and Prisma.",
    tags: ["React", "Nest JS", "PostgreSQL", "Prisma", "Python", "API Integration"],
  },
];

export function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="experience" className="section-padding bg-background relative overflow-hidden">
      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Professional Journey</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
            My career path and the valuable experience I've gained through impactful internships.
          </p>
        </motion.div>

        <div ref={containerRef} className="max-w-5xl mx-auto relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-border -translate-x-1/2 rounded-full overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 right-0 bg-primary origin-top"
              style={{ height: "100%", scaleY }}
            />
          </div>

          <div className="space-y-24">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`relative flex flex-col md:flex-row items-center gap-12 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content Card */}
                <div className="flex-1 w-full">
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="p-10 rounded-3xl bg-card border border-border hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all group"
                  >
                    <div className="flex items-center gap-3 text-primary font-bold mb-6 text-sm tracking-widest uppercase">
                      <Calendar className="h-5 w-5" /> {exp.period}
                    </div>
                    <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors tracking-tight">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-3 text-muted-foreground font-semibold mb-8 text-lg">
                      <Building2 className="h-5 w-5" /> {exp.company}
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-10 text-lg">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {exp.tags.map((tag) => (
                        <span key={tag} className="px-4 py-1.5 bg-primary/5 text-primary text-xs font-bold rounded-full border border-primary/10">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
                
                {/* Timeline Center Point */}
                <div className="absolute left-0 md:left-1/2 top-10 md:top-1/2 w-10 h-10 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className="w-5 h-5 bg-primary rounded-full border-4 border-background shadow-lg shadow-primary/40"
                  />
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1.5, opacity: 0.2 }}
                    viewport={{ once: true }}
                    className="absolute w-10 h-10 bg-primary rounded-full"
                  />
                </div>
                
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
