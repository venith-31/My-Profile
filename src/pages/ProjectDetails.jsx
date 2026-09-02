import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, Github, CheckCircle2, Info, ArrowRight, Lightbulb, Target, UserCheck, Rocket } from "lucide-react";
import { projects } from "../data/projects";
import { useEffect } from "react";

export function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <a href="/#projects" className="text-primary hover:underline flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" /> Back to Projects
        </a>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-background/80 backdrop-blur-md border-b border-border flex items-center px-6 md:px-12">
        <a 
          href="/#projects"
          className="text-sm font-bold flex items-center gap-2 hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Projects
        </a>
      </header>

      <main className="pt-32 pb-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-lg mb-8">
              <Info className="h-4 w-4" /> PROJECT CASE STUDY
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
              {project.title}
            </h1>
            <p className="text-2xl text-primary font-bold mb-12 italic">
              "{project.tagline}"
            </p>

            <div className="aspect-video w-full rounded-[3rem] overflow-hidden mb-20 border border-border shadow-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="grid lg:grid-cols-3 gap-20">
              <div className="lg:col-span-2 space-y-20">
                {/* Overview */}
                <section>
                  <div className="flex items-center gap-3 mb-8">
                    <Target className="text-primary h-8 w-8" />
                    <h2 className="text-3xl font-bold tracking-tight">Overview</h2>
                  </div>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    {project.overview}
                  </p>
                </section>

                {/* Working Concept */}
                <section>
                  <div className="flex items-center gap-3 mb-8">
                    <Lightbulb className="text-primary h-8 w-8" />
                    <h2 className="text-3xl font-bold tracking-tight">Working Concept</h2>
                  </div>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    {project.workingConcept}
                  </p>
                </section>

                {/* Key Features */}
                <section>
                  <h2 className="text-3xl font-bold mb-8 tracking-tight">Key Features</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {project.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-4 p-6 rounded-2xl bg-secondary/30 border border-border">
                        <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                        <span className="text-lg font-medium leading-tight">{feature}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* My Role */}
                <section>
                  <div className="flex items-center gap-3 mb-8">
                    <UserCheck className="text-primary h-8 w-8" />
                    <h2 className="text-3xl font-bold tracking-tight">My Role</h2>
                  </div>
                  <div className="space-y-4">
                    {project.role.map((item, i) => (
                      <div key={i} className="flex items-center gap-4 text-lg text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        {item}
                      </div>
                    ))}
                  </div>
                </section>

                {/* Impact / Outcome */}
                <section>
                  <div className="flex items-center gap-3 mb-8">
                    <Rocket className="text-primary h-8 w-8" />
                    <h2 className="text-3xl font-bold tracking-tight">Impact / Outcome</h2>
                  </div>
                  <div className="space-y-4">
                    {project.impact.map((item, i) => (
                      <div key={i} className="flex items-center gap-4 text-lg text-muted-foreground">
                        <CheckCircle2 className="text-primary h-5 w-5" />
                        {item}
                      </div>
                    ))}
                  </div>
                </section>

                {/* Future Enhancements */}
                <section className="p-10 rounded-[2.5rem] bg-primary/5 border border-primary/10">
                  <h2 className="text-3xl font-bold mb-8 tracking-tight">Future Enhancements</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {project.futureEnhancements.map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-lg font-medium">
                        <ArrowRight className="text-primary h-5 w-5" />
                        {item}
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              <div className="space-y-12">
                <section className="p-8 rounded-3xl bg-card border border-border sticky top-32">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-8">Tech Stack</h3>
                  <div className="flex flex-wrap gap-3 mb-12">
                    {project.tech.map((t) => (
                      <span key={t} className="px-4 py-2 bg-primary/5 text-primary text-sm font-bold rounded-xl border border-primary/10">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="pt-8 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                      Interested in seeing the implementation? You can view the source code on GitHub.
                    </p>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary/90 transition-all flex items-center justify-center gap-3 shadow-lg shadow-primary/20"
                    >
                      View on GitHub <Github className="h-5 w-5" />
                    </a>
                  </div>
                </section>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer CTA */}
      <section className="py-20 bg-secondary/30 border-t border-border">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-8">Have a similar project in mind?</h2>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 text-primary font-bold text-xl hover:underline"
          >
            Let's talk about it <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
