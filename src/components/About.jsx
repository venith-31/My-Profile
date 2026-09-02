import { motion } from "motion/react";
import { GraduationCap, Award, BookOpen, CheckCircle2 } from "lucide-react";

const education = [
  {
    year: "2022 - 2026",
    degree: "B.E. Computer Science",
    school: "St. Joseph’s Institute of Technology",
    marks: "7.82 CGPA",
    details: "Focusing on Software Engineering, Data Structures, and AI.",
  },
  {
    year: "2022",
    degree: "Higher Secondary (12th)",
    school: "Sairam Matriculation School",
    marks: "78.6%",
    details: "Specialized in Computer Science and Mathematics.",
  },
  {
    year: "2020",
    degree: "SSLC (10th)",
    school: "Sairam Matriculation School",
    marks: "78.4%",
    details: "Foundation in Science and Mathematics.",
  },
];

export function About() {
  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-lg mb-6">
              <BookOpen className="h-4 w-4" /> 01. INTRO
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-10 tracking-tight">
              Crafting Digital <br />
              <span className="text-primary">Solutions with Purpose.</span>
            </h2>
            <div className="space-y-8 text-xl text-muted-foreground leading-relaxed">
              <p>
                I am a dedicated Computer Science student with a strong foundation in 
                software development and a passion for learning new technologies.
              </p>
              <p>
                My academic journey has equipped me with technical skills in Java, 
                Python, and Web Development. While I have built several websites 
                using "vibe coding" techniques for rapid and creative prototyping, 
                I am not fully a vibe coder; I am deeply committed to rigorous 
                engineering principles and building scalable, well-architected systems.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-6">
                {[
                  "Problem Solver",
                  "Fast Learner",
                  "Team Player",
                  "Detail Oriented"
                ].map((trait) => (
                  <div key={trait} className="flex items-center gap-3 text-foreground font-semibold">
                    <CheckCircle2 className="text-primary h-5 w-5" />
                    {trait}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-lg mb-6">
              <GraduationCap className="h-4 w-4" /> 02. ACADEMICS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-10 tracking-tight">Education</h2>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ x: 10 }}
                  className="p-8 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-sm font-bold text-primary bg-primary/5 px-3 py-1 rounded-full">
                      {edu.year}
                    </span>
                    <span className="text-sm font-bold bg-secondary px-3 py-1 rounded-lg">
                      {edu.marks}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-muted-foreground font-medium mb-4">{edu.school}</p>
                  <p className="text-sm text-muted-foreground/80 leading-relaxed">
                    {edu.details}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Certifications and Extracurriculars */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-24 pt-16 border-t border-border"
        >
          <h3 className="text-3xl font-bold mb-10 tracking-tight text-center">Certifications & Extracurriculars</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Python for Data Science",
                issuer: "NPTEL",
                description: "Gained structural foundations in exploratory data analysis and basic machine learning model architectures."
              },
              {
                title: "Data Structures and Algorithms",
                issuer: "Infosys Springboard",
                description: "Mastered algorithmic analysis, complex problem-solving patterns, and high-efficiency standard structures."
              },
              {
                title: "Networking Basics",
                issuer: "Cisco",
                description: "Developed deep knowledge in network routing, standard protocols, layers, and modern communication infrastructure."
              }
            ].map((cert, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all hover:shadow-xl hover:shadow-primary/5"
              >
                <span className="text-xs font-bold text-primary bg-primary/5 px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
                  {cert.issuer}
                </span>
                <h4 className="text-xl font-bold mb-3">{cert.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
