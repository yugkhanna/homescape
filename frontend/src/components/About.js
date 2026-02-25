import { motion } from "framer-motion";
import { Package, Globe, DollarSign } from "lucide-react";

const ABOUT_IMG = "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const metrics = [
  { icon: Package, label: "", value: "Dispatch Control" },
  { icon: DollarSign, label: "", value: "Credit Transparency" },
  { icon: Globe, label: "", value: "Brand Coordination" },
];

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" },
};

export default function About() {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative py-24 md:py-32 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Label */}
        <motion.span {...fadeInUp} className="section-label block mb-4">
          About Us
        </motion.span>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left - Copy */}
          <motion.div {...fadeInUp}>
            <h2
              className="font-heading font-black uppercase tracking-tight leading-none text-white text-4xl sm:text-5xl lg:text-6xl mb-8"
              data-testid="about-heading"
            >
              The Vital Link in
              <br />
              <span className="text-orange-500">Modern B2B.</span>
            </h2>
            <p
              className="text-slate-400 text-base tracking-wide leading-relaxed mb-6"
              data-testid="about-description"
            >
             HomeScape Group Pvt Ltd is a distribution-focused company engaged in supplying premium home, kitchen,
              and lifestyle products through an established dealer and channel network. We work with
              reputed international and domestic brands and focus on structured market development, reliable
              inventory flow, and long-term partner relationships rather than short-term trading.
            </p>
            <p className="text-slate-400 text-base tracking-wide leading-relaxed mb-10">
              Our operating model is built around three core functions: brand representation, regional distribution
              management, and dealer ecosystem support. This includes warehousing coordination, order consolidation,
              compliance documentation and more to ensure smooth execution  across the supply chain.
              HomeScape enables retailers and project partners to plan confidently and avoid operational disruptions.
            </p>
          </motion.div>

          {/* Right - Image + Metrics Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            {/* Image */}
            <div className="relative overflow-hidden border border-slate-800">
              <img
                src={ABOUT_IMG}
                alt="Industrial operations"
                className="w-full h-[400px] object-cover"
                loading="lazy"
                data-testid="about-image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
            </div>

            {/* Metrics overlay card */}
            <div
              className="relative -mt-20 mx-4 md:mx-8 bg-slate-900/90 backdrop-blur-md border border-slate-800 p-6 md:p-8"
              data-testid="about-metrics-card"
            >
              <span className="text-xs text-orange-500 uppercase tracking-widest font-heading font-semibold block mb-5">
              </span>
              <div className="grid grid-cols-3 gap-4">
                {metrics.map((metric) => (
                  <div key={metric.label} className="text-center">
                    <metric.icon
                      size={20}
                      className="text-orange-500 mx-auto mb-2"
                    />
                    <span className="font-heading font-black text-xl md:text-2xl text-white block">
                      {metric.value}
                    </span>
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest mt-1 block">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
