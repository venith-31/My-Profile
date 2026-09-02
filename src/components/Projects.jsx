import { motion } from "motion/react";
import { ArrowUpRight, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export function Projects() {
  return (
    <section id="projects" className="section-padding bg-secondary/30 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
            A selection of my recent work, ranging from AI systems to full-stack web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative bg-card rounded-[2.5rem] border border-border overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
            >
              <Link to={`/project/${project.id}`} className="block">
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="px-6 py-3 bg-white text-black font-bold rounded-full flex items-center gap-2 shadow-xl">
                      Read Case Study <Info className="h-4 w-4" />
                    </div>
                  </div>
                </div>
                
                <div className="p-10">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-3xl font-bold tracking-tight group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <motion.div 
                      whileHover={{ rotate: 45 }}
                      className="p-2 bg-secondary rounded-full"
                    >
                      <ArrowUpRight className="h-5 w-5" />
                    </motion.div>
                  </div>
                  
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((t) => (
                      <span key={t} className="px-4 py-1.5 bg-secondary text-secondary-foreground text-xs font-bold rounded-xl uppercase tracking-wider">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
