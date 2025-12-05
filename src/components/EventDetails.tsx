import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Heart, Shirt } from "lucide-react";

const eventDetails = [
  {
    icon: Calendar,
    label: "Date",
    value: "Sunday, January 26, 2025",
    description: "Mark your calendars",
  },
  {
    icon: Clock,
    label: "Time",
    value: "10:00 AM",
    description: "Ceremony begins promptly",
  },
  {
    icon: MapPin,
    label: "Venue",
    value: "St. Mary's Cathedral",
    description: "123 Faith Avenue, Manila",
  },
  {
    icon: Shirt,
    label: "Dress Code",
    value: "Smart Casual",
    description: "Soft pastels encouraged",
  },
];

const godparents = [
  { name: "Maria Santos", role: "Godmother" },
  { name: "Juan Dela Cruz", role: "Godfather" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const EventDetails = () => {
  return (
    <section className="relative py-24 px-4 bg-secondary/50">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3 font-sans">
            Event Information
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-semibold text-foreground">
            Join Us in Celebration
          </h2>
          <div className="mt-6 flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
            <div className="w-2 h-2 rounded-full bg-primary" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
        </motion.div>

        {/* Event details grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-6 mb-16"
        >
          {eventDetails.map((detail, index) => (
            <motion.div
              key={detail.label}
              variants={itemVariants}
              className="group"
            >
              <div className="relative p-6 rounded-2xl gradient-card shadow-card border border-border/50 hover:shadow-float transition-all duration-500">
                {/* Icon */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <detail.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs tracking-widest uppercase text-muted-foreground mb-1 font-sans">
                      {detail.label}
                    </p>
                    <p className="text-xl font-serif font-medium text-foreground mb-1">
                      {detail.value}
                    </p>
                    <p className="text-sm text-muted-foreground font-sans">
                      {detail.description}
                    </p>
                  </div>
                </div>
                
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-radial from-primary/5 to-transparent rounded-bl-[100px]" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Godparents section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <Heart className="w-4 h-4 text-accent fill-accent" />
            <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground font-sans">
              Godparents
            </p>
            <Heart className="w-4 h-4 text-accent fill-accent" />
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {godparents.map((person) => (
              <motion.div
                key={person.name}
                whileHover={{ scale: 1.05 }}
                className="px-8 py-4 rounded-2xl gradient-card shadow-soft border border-border/50"
              >
                <p className="text-xl font-serif font-medium text-foreground">
                  {person.name}
                </p>
                <p className="text-sm text-muted-foreground font-sans mt-1">
                  {person.role}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventDetails;
