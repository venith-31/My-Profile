import { motion } from "motion/react";
import { Code2, Terminal, Database, Layout, Cpu, Globe } from "lucide-react";

const skillCategories = [
  {
    name: "Languages",
    icon: Globe,
    skills: ["Python", "Java", "HTML/CSS", "JavaScript", "SQL"],
  },
  {
    name: "Technologies & Frameworks",
    icon: Layout,
    skills: ["React", "Node.js", "Express", "React Native", "Nest JS", "Prisma"],
  },
  {
    name: "Developer Tools",
    icon: Code2,
    skills: ["VS Code", "MySQL", "MongoDB", "Git", "GitHub", "Wix"],
  },
  {
    name: "AI & Specialized",
    icon: Cpu,
    skills: ["BERT", "NLP", "Conversational AI", "REST APIs"],
  },
  {
    name: "Soft Skills",
    icon: Terminal,
    skills: ["Creativity", "Adaptability", "Communication", "Team Play", "Time Management"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-secondary/30 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Technical Stack</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
            A comprehensive overview of the technologies I've mastered and the tools I use to build robust digital products.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.name}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="p-10 rounded-3xl bg-card border border-border hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5 transition-all group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <category.icon className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold mb-6 tracking-tight">{category.name}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-secondary text-secondary-foreground text-sm font-bold rounded-xl border border-transparent hover:border-primary/20 hover:bg-background transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
