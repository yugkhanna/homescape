import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

const partners = [
  { name: "Apex Industries", logo: null },
  { name: "NovaTech Solutions", logo: null },
  { name: "Global Freight Co.", logo: null },
  { name: "Summit Logistics", logo: null },
  { name: "Vertex Supply", logo: null },
  { name: "PrimeWare Inc.", logo: null },
  { name: "Atlas Trading", logo: null },
  { name: "Meridian Corp.", logo: null },
  { name: "Zenith Materials", logo: null },
  { name: "OmniPath Systems", logo: null },
];

function PartnerLogo({ partner }) {
  return (
    <div
      className="flex items-center justify-center px-10 py-4 mx-6 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 select-none"
      data-testid={`partner-logo-${partner.name.toLowerCase().replace(/[\s.]+/g, "-")}`}
    >
      {partner.logo ? (
        <img
          src={partner.logo}
          alt={partner.name}
          className="h-10 md:h-12 w-auto object-contain"
        />
      ) : (
        <span className="font-heading font-bold uppercase tracking-wider text-slate-300 text-lg md:text-xl whitespace-nowrap">
          {partner.name}
        </span>
      )}
    </div>
  );
}

export default function Partners() {
  return (
    <section
      id="partners"
      data-testid="partners-section"
      className="relative py-24 md:py-32 bg-slate-900 border-y border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="section-label block mb-4">Our Partners</span>
          <h2
            className="font-heading font-black uppercase tracking-tight leading-none text-white text-5xl sm:text-6xl lg:text-7xl"
            data-testid="partners-heading"
          >
            Trusted By <span className="text-orange-500">Industry Leaders</span>
          </h2>
        </motion.div>
      </div>

      {/* Marquee Row 1 */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        data-testid="partners-marquee"
      >
        <Marquee
          speed={40}
          gradient={true}
          gradientColor="#0f172a"
          gradientWidth={100}
          className="py-4"
        >
          {partners.map((partner) => (
            <PartnerLogo key={partner.name} partner={partner} />
          ))}
        </Marquee>

        {/* Marquee Row 2 - reverse */}
        <Marquee
          speed={30}
          direction="right"
          gradient={true}
          gradientColor="#0f172a"
          gradientWidth={100}
          className="py-4 mt-4"
        >
          {[...partners].reverse().map((partner) => (
            <PartnerLogo key={`rev-${partner.name}`} partner={partner} />
          ))}
        </Marquee>
      </motion.div>
    </section>
  );
}
