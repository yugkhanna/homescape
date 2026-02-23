import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { ArrowRight } from "lucide-react";

const HERO_BG = "https://images.pexels.com/photos/30824313/pexels-photo-30824313.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

export default function Hero() {
  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_BG}
          alt="Modern automated distribution warehouse"
          className="object-cover object-center w-full h-full"
          loading="eager"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(2,6,23,0.4), rgba(2,6,23,0.95))",
          }}
        />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-30 z-[1]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-32 pb-24 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          {/* Label */}
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-label inline-block mb-6"
            data-testid="hero-label"
          >
            HomeScape Group Pvt Ltd
          </motion.span>

          {/* H1 */}
          <h1
            className="font-heading font-black uppercase tracking-tight leading-none text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl mb-8"
            data-testid="hero-heading"
          >
            B2B Distribution
            <br />
            Solutions Across
            <br />
            <span className="text-orange-500">Every Vertical.</span>
          </h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-slate-400 text-base md:text-lg tracking-wide leading-relaxed max-w-xl mb-12"
            data-testid="hero-subtext"
          >
            Expertly Powering Supply, Strategically Enabling Growth.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link
              to="contact"
              smooth={true}
              duration={600}
              offset={-80}
              className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-heading font-bold uppercase tracking-wider px-8 py-4 cursor-pointer transition-all duration-300 hover:gap-5 group"
              data-testid="hero-cta-button"
            >
              Partner With Us
              <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border border-white/10"
          data-testid="hero-stats"
        >
          {[
            { value: "500+", label: "B2B Partners" },
            { value: "6", label: "Industry Verticals" },
            { value: "98%", label: "Fulfillment Rate" },
            { value: "12+", label: "Years Experience" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="bg-slate-950/60 backdrop-blur-sm px-6 py-6 md:py-8"
              data-testid={`hero-stat-${i}`}
            >
              <span className="font-heading font-black text-3xl md:text-4xl text-white block">
                {stat.value}
              </span>
              <span className="text-xs text-slate-400 uppercase tracking-widest mt-1 block">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
