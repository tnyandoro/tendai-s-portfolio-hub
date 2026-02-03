import { motion } from "framer-motion";
import { MapPin, Briefcase, Globe, Mail } from "lucide-react";

const About = () => {
  const details = [
    { icon: MapPin, label: "Location", value: "Gauteng, South Africa" },
    { icon: Briefcase, label: "Profession", value: "FullStack Engineer" },
    { icon: Globe, label: "Website", value: "tendainyandoro.live" },
    { icon: Mail, label: "Email", value: "tnyandoro@gmail.com" },
  ];

  return (
    <section id="about" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-primary/5 to-transparent" />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-6xl sm:text-7xl text-primary/20 font-bold block mb-2">A</span>
            About Me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl" />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&crop=face"
                alt="Tendai Nyandoro"
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-primary rounded-2xl" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-heading text-2xl font-semibold mb-2">
              <span className="text-primary">Tendai Nyandoro</span>
            </h3>
            <p className="text-muted-foreground mb-6">Professional FullStack Developer</p>

            {/* Details grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {details.map((detail, index) => (
                <div key={index} className="flex items-start gap-3">
                  <detail.icon className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">{detail.label}</p>
                    <p className="text-sm font-medium">{detail.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bio */}
            <p className="text-muted-foreground leading-relaxed mb-6">
              My name is Tendai and I solve social and business problems through software. 
              Having worked in and with multinational companies in multiple roles, I have 
              acquired great technical and professional skills. My many years of working in 
              various industries pointed to technology, mainly software, being the ultimate solution.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I attended Microverse, an online coding school, to master every aspect of skills 
              that professional Full Stack Developers need—from technical skills (Ruby on Rails, 
              React, JavaScript, HTML/CSS) to soft professional skills (Pair Programming, 
              Team Collaboration).
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;