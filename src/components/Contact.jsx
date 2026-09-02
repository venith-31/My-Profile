import { motion } from "motion/react";
import { Send, Mail, Phone, MapPin, MessageSquare, ArrowRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="section-padding bg-background relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-lg mb-8">
              <MessageSquare className="h-4 w-4" /> 04. CONTACT
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">
              Let's <span className="text-primary">Connect.</span>
            </h2>
            <p className="text-2xl text-muted-foreground mb-16 leading-relaxed font-medium">
              Have a project in mind or just want to say hi? I'm always open to 
              discussing new opportunities and technical challenges.
            </p>

            <div className="space-y-10">
              {[
                { icon: Mail, label: "Email", value: "venitharavindhan@gmail.com", href: "mailto:venitharavindhan@gmail.com" },
                { icon: Phone, label: "Phone", value: "+91 9003443541", href: "tel:+919342168131" },
                { icon: MapPin, label: "Location", value: "Chennai, India", href: "#" },
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-8 group"
                >
                  <div className="w-16 h-16 bg-card border border-border rounded-[1.5rem] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-sm">
                    <item.icon className="h-7 w-7" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] mb-1">{item.label}</p>
                    <a href={item.href} className="text-2xl font-bold hover:text-primary transition-colors tracking-tight">{item.value}</a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-card p-10 md:p-16 rounded-[3rem] border border-border shadow-2xl shadow-primary/5 relative"
          >
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
            
            <form
              className="space-y-8 relative z-10"
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const name = formData.get("name");
                const email = formData.get("email");
                const message = formData.get("message");
                
                const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
                const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
                
                window.location.href = `mailto:venitharavindhan@gmail.com?subject=${subject}&body=${body}`;
              }}
            >
              <div className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-sm font-bold tracking-widest uppercase text-muted-foreground">Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="w-full bg-secondary/50 border border-border rounded-2xl px-6 py-4 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium"
                      required
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-bold tracking-widest uppercase text-muted-foreground">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      className="w-full bg-secondary/50 border border-border rounded-2xl px-6 py-4 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold tracking-widest uppercase text-muted-foreground">Message</label>
                  <textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="w-full bg-secondary/50 border border-border rounded-2xl px-6 py-4 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all resize-none font-medium"
                    required
                  />
                </div>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary text-white font-bold py-5 rounded-2xl hover:bg-primary/90 transition-all flex items-center justify-center gap-3 shadow-xl shadow-primary/30 text-lg"
              >
                Send Message <Send className="h-5 w-5" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
