import { motion } from "framer-motion";
import { ChevronDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary) / 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          {/* Hello badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <span className="text-2xl">👋</span>
            <span className="text-sm font-medium text-primary">Hello</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold mb-4"
          >
            I'm{" "}
            <span className="gradient-text">TENDAI</span>
            <br />
            <span className="text-foreground">NYANDORO</span>
          </motion.h1>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg sm:text-xl text-muted-foreground tracking-[0.2em] uppercase mb-8"
          >
            FullStack Software Developer
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button size="lg" className="glow group">
              <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
              Download CV
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex items-center justify-center gap-4"
          >
            <a
              href="https://github.com/tnyandoro"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass hover:bg-primary/20 transition-all duration-300 group"
            >
              <Github className="w-5 h-5 group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/tendai-nyandoro/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass hover:bg-primary/20 transition-all duration-300 group"
            >
              <Linkedin className="w-5 h-5 group-hover:text-primary transition-colors" />
            </a>
            <a
              href="mailto:tnyandoro@gmail.com"
              className="p-3 rounded-full glass hover:bg-primary/20 transition-all duration-300 group"
            >
              <Mail className="w-5 h-5 group-hover:text-primary transition-colors" />
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;