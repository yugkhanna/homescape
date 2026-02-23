import { motion } from "framer-motion";
import { TrendingUp, Package, Globe } from "lucide-react";

const ABOUT_IMG = "https://images.unsplash.com/photo-1764114909312-c27b89ec7223?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjd8MHwxfHNlYXJjaHwzfHxpbmR1c3RyaWFsJTIwZmFjdG9yeSUyMG1hbnVmYWN0dXJpbmclMjB3b3JrZXJ8ZW58MHx8fHwxNzcxODQwODAxfDA&ixlib=rb-4.1.0&q=85";

const metrics = [
  { icon: TrendingUp, label: "Supply Efficiency", value: "98.7%" },
  { icon: Package, label: "Orders Fulfilled", value: "1.2M+" },
  { icon: Globe, label: "Regions Covered", value: "24+" },
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
              HomeScape Group Pvt Ltd is the vital link in the modern B2B ecosystem.
              We provide vertical-agnostic distribution frameworks that scale with
              your ambition. From raw material sourcing to last-mile delivery, our
              integrated approach ensures seamless operations across every touchpoint.
            </p>
            <p className="text-slate-400 text-base tracking-wide leading-relaxed mb-10">
              With over a decade of experience spanning six industry verticals, we
              combine deep market knowledge with cutting-edge logistics technology
              to deliver results that matter. Our commitment to operational excellence
              drives every partnership forward.
            </p>

            {/* Key points */}
            <div className="space-y-4">
              {[
                "Vertical-agnostic distribution frameworks",
                "End-to-end supply chain integration",
                "Data-driven logistics optimization",
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-orange-500 flex-shrink-0" />
                  <span className="text-slate-300 text-sm tracking-wide">{point}</span>
                </div>
              ))}
            </div>
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
                Efficiency Metrics
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
