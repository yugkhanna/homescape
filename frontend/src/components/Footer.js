import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Twitter, label: "Twitter" },
  { icon: Facebook, label: "Facebook" },
  { icon: Instagram, label: "Instagram" },
];

export default function Footer() {
  return (
    <footer
      data-testid="site-footer"
      className="bg-slate-950 border-t border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <img
                src="/company_logo.png"
                alt="HomeScape Group"
                className="h-8 md:h-10 w-auto" // Slightly smaller for the footer
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              {/* Text fallback if image fails */}
              <span
                className="text-white font-heading font-black tracking-tighter text-2xl uppercase"
                style={{ display: 'none' }}
              >
                HomeScape<span className="text-orange-500">.</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm tracking-wide leading-relaxed max-w-xs">
              Powering Supply, Enabling Growth. Your trusted B2B distribution
              partner across every vertical.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <span className="text-xs text-orange-500 uppercase tracking-widest font-heading font-semibold block mb-4">
              Quick Links
            </span>
            <nav className="space-y-3">
              {["Home", "About Us", "Our Partners", "Contact Us"].map(
                (link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase().replace(/\s+/g, "")}`}
                    className="text-slate-400 text-sm tracking-wide hover:text-orange-500 transition-colors block"
                    data-testid={`footer-link-${link.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {link}
                  </a>
                )
              )}
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs tracking-wide" data-testid="footer-copyright">
            &copy; {new Date().getFullYear()} HomeScape Group Pvt Ltd. All rights
            reserved.
          </p>
          <p className="text-slate-600 text-xs tracking-wide">
            B2B Distribution Solutions
          </p>
        </div>
      </div>
    </footer>
  );
}
