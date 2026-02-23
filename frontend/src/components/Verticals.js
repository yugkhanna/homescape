import { motion } from "framer-motion";
import {
  Factory,
  ShoppingCart,
  Cpu,
  HeartPulse,
  Store,
  BriefcaseBusiness,
} from "lucide-react";

const verticals = [
  {
    title: "Industrial Sourcing",
    description: "Raw materials to precision components. We source and deliver at scale.",
    icon: Factory,
    image: "https://images.unsplash.com/photo-1764114903065-4cc137dd303b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjd8MHwxfHNlYXJjaHwyfHxpbmR1c3RyaWFsJTIwZmFjdG9yeSUyMG1hbnVmYWN0dXJpbmclMjB3b3JrZXJ8ZW58MHx8fHwxNzcxODQwODAxfDA&ixlib=rb-4.1.0&q=85",
    span: "col-span-1 md:col-span-2 row-span-1",
    tall: false,
  },
  {
    title: "FMCG Distribution",
    description: "Fast-moving consumer goods delivered with precision timing.",
    icon: ShoppingCart,
    image: "https://images.unsplash.com/photo-1760776140488-32fcfab4066a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwyfHxzdXBlcm1hcmtldCUyMGdyb2NlcnklMjBzaGVsZiUyMGJsdXJyeXxlbnwwfHx8fDE3NzE4NDA4MDJ8MA&ixlib=rb-4.1.0&q=85",
    span: "col-span-1 md:col-span-2 row-span-1",
    tall: false,
  },
  {
    title: "Tech & Electronics",
    description: "Sensitive tech components handled with care and speed.",
    icon: Cpu,
    image: "https://images.unsplash.com/photo-1771189957050-76f13238f858?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTZ8MHwxfHNlYXJjaHwyfHxlbGVjdHJvbmljJTIwY2lyY3VpdCUyMGJvYXJkJTIwY29tcHV0ZXIlMjBjaGlwfGVufDB8fHx8MTc3MTg0MDgwM3ww&ixlib=rb-4.1.0&q=85",
    span: "col-span-1 md:col-span-2 row-span-1",
    tall: false,
  },
  {
    title: "Healthcare Logistics",
    description: "Temperature-controlled, compliant distribution for pharma and medical.",
    icon: HeartPulse,
    image: "https://images.unsplash.com/photo-1671108503276-1d3d5ab23a3a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzJ8MHwxfHNlYXJjaHwxfHxwaGFybWFjZXV0aWNhbCUyMGNvbGQlMjBzdG9yYWdlJTIwbWVkaWNhbCUyMHN1cHBsaWVzfGVufDB8fHx8MTc3MTg0MDgwNHww&ixlib=rb-4.1.0&q=85",
    span: "col-span-1 md:col-span-2 row-span-1",
    tall: false,
  },
  {
    title: "Retail Supply",
    description: "Omnichannel retail supply chains that keep shelves stocked.",
    icon: Store,
    image: "https://images.unsplash.com/photo-1769107805465-bfd41863f1a0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA3MDB8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjByZXRhaWwlMjBjbG90aGluZyUyMHN0b3JlJTIwaW50ZXJpb3J8ZW58MHx8fHwxNzcxODQwODA0fDA&ixlib=rb-4.1.0&q=85",
    span: "col-span-1 md:col-span-2 row-span-1",
    tall: false,
  },
  {
    title: "Strategic Consulting",
    description: "Supply chain advisory to optimize your distribution strategy.",
    icon: BriefcaseBusiness,
    image: "https://images.unsplash.com/photo-1758518730037-a16581a040e8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzN8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBib2FyZHJvb20lMjBzdHJhdGVnaWMlMjBtZWV0aW5nfGVufDB8fHx8MTc3MTg0MDgwNXww&ixlib=rb-4.1.0&q=85",
    span: "col-span-1 md:col-span-2 row-span-1",
    tall: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Verticals() {
  return (
    <section
      id="verticals"
      data-testid="verticals-section"
      className="relative py-24 md:py-32 bg-slate-950 noise-overlay"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="section-label block mb-4">Company Structure</span>
          <h2
            className="font-heading font-black uppercase tracking-tight leading-none text-white text-4xl sm:text-5xl lg:text-6xl"
            data-testid="verticals-heading"
          >
            Our <span className="text-orange-500">Verticals</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 auto-rows-[240px] gap-2"
          data-testid="verticals-grid"
        >
          {verticals.map((item) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              className={`group relative overflow-hidden bg-slate-900 border border-slate-800 hover:border-orange-500/50 transition-all duration-500 cursor-pointer ${item.span}`}
              data-testid={`vertical-card-${item.title.toLowerCase().replace(/[&\s]+/g, "-")}`}
            >
              {/* Background Image */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />

              {/* Bottom border accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-8">
                <item.icon
                  size={28}
                  className="text-orange-500 mb-3 group-hover:scale-110 transition-transform duration-300"
                />
                <h3 className="font-heading font-bold uppercase tracking-wider text-white text-lg md:text-xl mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm tracking-wide leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
