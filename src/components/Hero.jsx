import { motion, useScroll, useTransform } from "motion/react";
import { Github, Linkedin, Mail, ArrowRight, ChevronDown } from "lucide-react";
import { useRef } from "react";

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-linear-to-b from-primary/5 to-background">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          style={{ y }}
          className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" 
        />
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]) }}
          className="absolute bottom-1/4 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" 
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ opacity }}
          >
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-8 leading-[1.1]">
              Hi, I'm <span className="text-primary relative">
                Venith
                <motion.span 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="absolute bottom-2 left-0 h-3 bg-primary/20 -z-10"
                />
              </span>. <br />
              I build web experiences.
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-2xl font-medium">
              A Computer Science student and Full Stack Developer passionate about 
              creating clean, functional, and user-centric digital solutions.
            </p>
            
            <div className="flex flex-wrap gap-5 mb-16">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all flex items-center gap-3 shadow-xl shadow-primary/20"
              >
                View My Work <ArrowRight className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="mailto:venitharavindhan@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-secondary text-secondary-foreground font-bold rounded-xl hover:bg-secondary/80 transition-all flex items-center gap-3 border border-border"
              >
                Get in Touch
              </motion.a>
            </div>

            <div className="flex items-center gap-8">
              {[
                { icon: Github, href: "https://github.com/venith-31", label: "Github" },
                { icon: Linkedin, href: "https://linkedin.com/in/venith", label: "Linkedin" },
                { icon: Mail, href: "mailto:venitharavindhan@gmail.com", label: "Email" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + (i * 0.1) }}
                  whileHover={{ y: -5, color: "var(--primary)" }}
                  className="text-muted-foreground transition-colors flex items-center gap-2 group"
                >
                  <social.icon className="h-6 w-6" />
                  <span className="text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
                    {social.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-[10px] uppercase font-bold tracking-[0.2em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
