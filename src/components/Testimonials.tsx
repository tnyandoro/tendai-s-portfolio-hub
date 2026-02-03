import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Working alongside Tendai at Nissi Energy was a rewarding experience, particularly as we ventured into uncharted territory as pioneers in Zimbabwe's solar energy sector. Together, we contributed to setting the standard for solar installations in the country.",
      author: "Tichaona Dzingirai",
      role: "Colleague at Nissi Energy",
    },
    {
      quote: "I had the pleasure of working closely with Tendai during his tenure as a Business Developer. His dedication, strategic insights, and proactive approach made him an invaluable asset to our team. His contributions were instrumental in achieving our objectives.",
      author: "Sherpherd Dohwe",
      role: "Business Partner",
    },
    {
      quote: "I've had the privilege of collaborating with Tendai for over 15 years as a consultant on all IT-related matters. Tendai consistently demonstrates a meticulous approach to his work, ensuring thoroughness in every project.",
      author: "Davison Elijah",
      role: "Long-term Client",
    },
  ];

  return (
    <section id="testimonials" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            What People Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Testimonials from colleagues and clients I've had the pleasure of working with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 card-hover relative"
            >
              {/* Quote icon */}
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              
              {/* Quote text */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary-foreground">
                    {testimonial.author.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-sm">{testimonial.author}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;