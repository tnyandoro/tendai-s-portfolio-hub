import { motion } from "framer-motion";

const Experience = () => {
  const education = [
    {
      period: "2020 - 2021",
      title: "Full Stack Development",
      institution: "Microverse",
      description: "Mastered JavaScript, React, Ruby on Rails, and collaborative development practices through intensive remote learning.",
    },
    {
      period: "2005 - 2009",
      title: "Diploma in Computer Science",
      institution: "CITMA",
      description: "Comprehensive program covering engineering, computing, and project leadership through project-driven curriculum.",
    },
    {
      period: "2002 - 2004",
      title: "HND in Information Technology",
      institution: "Macmaine School of Computers",
      description: "Completed 10 full computer science courses including core courses and specialized electives.",
    },
    {
      period: "2000 - 2002",
      title: "Certification in Information Design",
      institution: "Global Computer Links",
      description: "Foundation in computing principles and mathematical concepts required for computer science.",
    },
  ];

  const experience = [
    {
      period: "2016 - 2018",
      title: "Web Development & IT Consulting",
      company: "Freelance / Various Companies",
      description: "Remote collaboration, building dynamic web apps with React and Rails. Led successful group projects showcasing frontend and backend skills.",
    },
    {
      period: "2014 - 2016",
      title: "Hardware and Web Development",
      company: "Hands-On Computers, Harare",
      description: "Created Web Development Department, worked on company website, started a dedicated customer response team.",
    },
    {
      period: "2012 - 2014",
      title: "Computer Hardware Technician",
      company: "Global Computer Links, Harare",
      description: "Computer assembly for local brand, worked with schools building custom PCs. Experienced with Windows, Unix, Linux, and Mac OS.",
    },
    {
      period: "2004",
      title: "Filing and Data Capturing (Intern)",
      company: "National Foods (Tiger Brands)",
      description: "Introduced internal mailing system and gained experience in corporate IT operations.",
    },
  ];

  type TimelineItemType = {
    period: string;
    title: string;
    description: string;
    institution?: string;
    company?: string;
  };

  const TimelineItem = ({ item, index, isEducation }: { item: TimelineItemType; index: number; isEducation?: boolean }) => (
    <motion.div
      initial={{ opacity: 0, x: isEducation ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 pb-8 border-l-2 border-border last:pb-0"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-primary glow-sm" />
      
      {/* Period badge */}
      <span className="inline-block text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full mb-2">
        {item.period}
      </span>
      
      <h4 className="font-heading text-lg font-semibold mb-1">{item.title}</h4>
      <p className="text-sm text-primary mb-2">
        {item.institution || item.company}
      </p>
      <p className="text-sm text-muted-foreground">{item.description}</p>
    </motion.div>
  );

  return (
    <section id="experience" className="py-24 bg-card/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Experience & Education
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My journey in technology spanning over two decades of learning and professional growth
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Education */}
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-heading text-xl font-semibold mb-8 flex items-center gap-3"
            >
              <span className="w-8 h-0.5 bg-primary" />
              Education
            </motion.h3>
            <div>
              {education.map((item, index) => (
                <TimelineItem key={index} item={item} index={index} isEducation />
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-heading text-xl font-semibold mb-8 flex items-center gap-3"
            >
              <span className="w-8 h-0.5 bg-primary" />
              Work Experience
            </motion.h3>
            <div>
              {experience.map((item, index) => (
                <TimelineItem key={index} item={item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;