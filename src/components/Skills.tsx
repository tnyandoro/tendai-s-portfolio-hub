import { motion } from "framer-motion";

const Skills = () => {
  const technicalSkills = [
    { name: "JavaScript / TypeScript", level: 95 },
    { name: "React & Redux", level: 85 },
    { name: "Ruby on Rails", level: 85 },
    { name: "HTML & CSS", level: 90 },
    { name: "Git & GitHub", level: 90 },
    { name: "UI/UX Design", level: 70 },
  ];

  const professionalSkills = [
    { name: "Remote Work", level: 95 },
    { name: "Team Collaboration", level: 90 },
    { name: "Pair Programming", level: 85 },
    { name: "TDD / RSpec", level: 85 },
    { name: "Mobile/Responsive", level: 90 },
    { name: "Heroku / Netlify", level: 95 },
  ];

  const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="mb-6"
    >
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-primary">{level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full"
        />
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-24 bg-card/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit built over years of hands-on experience in full-stack development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Technical Skills */}
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-heading text-xl font-semibold mb-8 flex items-center gap-3"
            >
              <span className="w-8 h-0.5 bg-primary" />
              Technical Skills
            </motion.h3>
            {technicalSkills.map((skill, index) => (
              <SkillBar key={skill.name} {...skill} delay={index * 0.1} />
            ))}
          </div>

          {/* Professional Skills */}
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-heading text-xl font-semibold mb-8 flex items-center gap-3"
            >
              <span className="w-8 h-0.5 bg-primary" />
              Professional Skills
            </motion.h3>
            {professionalSkills.map((skill, index) => (
              <SkillBar key={skill.name} {...skill} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;