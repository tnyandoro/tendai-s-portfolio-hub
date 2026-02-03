import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Shapa Soweto",
      description: "A Nike community platform for athletes in Soweto. Built to help transform belief into reality through sports and community engagement.",
      image: "https://images.unsplash.com/photo-1461896836934- voices-44444444?w=600&h=400&fit=crop",
      tags: ["React", "Node.js", "Community Platform"],
      liveUrl: "https://shapasoweto.co.za/home",
      category: "Web Development",
    },
    {
      title: "Rejoice Academy",
      description: "Educational platform for Rejoice Academy Zimbabwe, providing quality education from ECD to Grade 7 with modern e-learning facilities.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
      tags: ["React", "Education", "Full Stack"],
      liveUrl: "https://www.rejoiceacademy.co.zw/",
      category: "Education",
    },
    {
      title: "Arte Gelato",
      description: "Authentic Italian gelato company website featuring beautiful design, product showcases, and event booking functionality.",
      image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=600&h=400&fit=crop",
      tags: ["React", "Netlify", "Business"],
      liveUrl: "https://arte-galerto.netlify.app/",
      category: "Business",
    },
    {
      title: "AfriAgriLink",
      description: "Agricultural technology platform connecting farmers, buyers, and service providers for a smarter, sustainable future in Africa.",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&h=400&fit=crop",
      tags: ["React", "AgriTech", "Marketplace"],
      liveUrl: "https://afriagrilink.netlify.app/",
      category: "AgriTech",
    },
  ];

  return (
    <section id="projects" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in building modern, scalable web applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative glass rounded-2xl overflow-hidden card-hover"
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                {/* Category */}
                <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full mb-3">
                  {project.category}
                </span>

                <h3 className="font-heading text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-secondary rounded-md text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button size="sm" asChild className="glow-sm">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a href="https://github.com/tnyandoro" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;