import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "home", label: "Home" },
  { to: "about", label: "About Us" },
  { to: "partners", label: "Our Partners" },
  { to: "contact", label: "Contact Us" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      data-testid="site-header"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 h-20 flex items-center transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/90 backdrop-blur-xl border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex items-center justify-between">
        {/* Logo */}
        <Link
          to="home"
          smooth={true}
          duration={600}
          className="cursor-pointer"
          data-testid="header-logo"
        >
          <img
            src="/company_logo.png"
            alt="HomeScape Group"
            className="h-20 w-auto"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'inline';
            }}
          />
          <span className="text-white font-heading font-black tracking-tighter text-2xl uppercase" style={{ display: 'none' }}>
            HomeScape<span className="text-orange-500">.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10" data-testid="desktop-nav">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={600}
              offset={-80}
              spy={true}
              activeClass="!text-orange-500"
              className="text-sm font-medium text-slate-300 hover:text-orange-500 transition-colors uppercase tracking-widest cursor-pointer"
              data-testid={`nav-link-${link.to}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          data-testid="mobile-menu-toggle"
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 left-0 right-0 bg-slate-950/95 backdrop-blur-xl border-b border-white/10 md:hidden"
          data-testid="mobile-menu"
        >
          <nav className="flex flex-col px-6 py-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={600}
                offset={-80}
                className="text-sm font-medium text-slate-300 hover:text-orange-500 transition-colors uppercase tracking-widest cursor-pointer"
                onClick={() => setMobileOpen(false)}
                data-testid={`mobile-nav-link-${link.to}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
