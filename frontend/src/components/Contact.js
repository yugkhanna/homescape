import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { Send, MapPin, Mail, Phone } from "lucide-react";

const FORMSPREE_ID = process.env.REACT_APP_FORMSPREE_ID;

const verticalOptions = [
  "Industrial Sourcing",
  "FMCG Distribution",
  "Tech & Electronics",
  "Healthcare Logistics",
  "Retail Supply",
  "Strategic Consulting",
  "Other",
];

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    vertical: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.company.trim()) newErrors.company = "Company is required";
    if (!formData.vertical) newErrors.vertical = "Please select a vertical";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      await axios.post(`${BACKEND_URL}/api/contact`, formData);
      setSubmitted(true);
      toast.success("Message sent successfully! We'll be in touch soon.");
      setFormData({ name: "", company: "", vertical: "", message: "" });
      setErrors({});
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative py-24 md:py-32 bg-slate-950 grid-bg"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Info */}
          <motion.div {...fadeInUp}>
            <span className="section-label block mb-4">Contact Us</span>
            <h2
              className="font-heading font-black uppercase tracking-tight leading-none text-white text-4xl sm:text-5xl lg:text-6xl mb-8"
              data-testid="contact-heading"
            >
              Let's Build
              <br />
              <span className="text-orange-500">Together.</span>
            </h2>
            <p className="text-slate-400 text-base tracking-wide leading-relaxed mb-12 max-w-md">
              Ready to optimize your distribution? Tell us about your needs and
              our team will craft a tailored solution for your business.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              {[
                { icon: MapPin, text: "Mumbai, Maharashtra, India" },
                { icon: Mail, text: "partnerships@homescapegroup.com" },
                { icon: Phone, text: "+91 (22) 4567-8900" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-4"
                  data-testid={`contact-info-${item.icon.displayName || 'item'}`}
                >
                  <div className="w-10 h-10 bg-slate-900 border border-slate-800 flex items-center justify-center flex-shrink-0">
                    <item.icon size={18} className="text-orange-500" />
                  </div>
                  <span className="text-slate-300 text-sm tracking-wide">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {submitted ? (
              <div
                className="bg-slate-900/50 border border-slate-800 p-8 md:p-12 flex flex-col items-center justify-center min-h-[400px]"
                data-testid="contact-success"
              >
                <div className="w-16 h-16 bg-orange-500/10 border border-orange-500/30 flex items-center justify-center mb-6">
                  <Send size={28} className="text-orange-500" />
                </div>
                <h3 className="font-heading font-bold uppercase tracking-wider text-white text-xl mb-3">
                  Message Sent
                </h3>
                <p className="text-slate-400 text-sm text-center max-w-sm">
                  Thank you for reaching out. Our team will review your inquiry and
                  get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-orange-500 text-sm uppercase tracking-widest hover:text-orange-400 transition-colors"
                  data-testid="send-another-btn"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-slate-900/50 border border-slate-800 p-8 md:p-12 space-y-6"
                data-testid="contact-form"
              >
                {/* Name */}
                <div>
                  <label className="text-xs text-slate-400 uppercase tracking-widest font-heading font-semibold block mb-2">
                    Full Name
                  </label>
                  <Input
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="John Doe"
                    className="bg-slate-950 border-slate-800 focus:border-orange-500 rounded-none h-12 text-white placeholder:text-slate-600"
                    data-testid="contact-name-input"
                  />
                  {errors.name && (
                    <span className="text-red-400 text-xs mt-1 block" data-testid="contact-name-error">
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Company */}
                <div>
                  <label className="text-xs text-slate-400 uppercase tracking-widest font-heading font-semibold block mb-2">
                    Company
                  </label>
                  <Input
                    value={formData.company}
                    onChange={(e) => handleChange("company", e.target.value)}
                    placeholder="Acme Corporation"
                    className="bg-slate-950 border-slate-800 focus:border-orange-500 rounded-none h-12 text-white placeholder:text-slate-600"
                    data-testid="contact-company-input"
                  />
                  {errors.company && (
                    <span className="text-red-400 text-xs mt-1 block" data-testid="contact-company-error">
                      {errors.company}
                    </span>
                  )}
                </div>

                {/* Vertical */}
                <div>
                  <label className="text-xs text-slate-400 uppercase tracking-widest font-heading font-semibold block mb-2">
                    Vertical / Industry
                  </label>
                  <Select
                    value={formData.vertical}
                    onValueChange={(val) => handleChange("vertical", val)}
                  >
                    <SelectTrigger
                      className="bg-slate-950 border-slate-800 focus:border-orange-500 rounded-none h-12 text-white"
                      data-testid="contact-vertical-select"
                    >
                      <SelectValue placeholder="Select your vertical" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-900 border-slate-800">
                      {verticalOptions.map((v) => (
                        <SelectItem key={v} value={v} className="text-slate-200 focus:bg-slate-800 focus:text-white">
                          {v}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.vertical && (
                    <span className="text-red-400 text-xs mt-1 block" data-testid="contact-vertical-error">
                      {errors.vertical}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="text-xs text-slate-400 uppercase tracking-widest font-heading font-semibold block mb-2">
                    Message
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Tell us about your distribution needs..."
                    rows={5}
                    className="bg-slate-950 border-slate-800 focus:border-orange-500 rounded-none text-white placeholder:text-slate-600 resize-none"
                    data-testid="contact-message-input"
                  />
                  {errors.message && (
                    <span className="text-red-400 text-xs mt-1 block" data-testid="contact-message-error">
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-heading font-bold uppercase tracking-wider h-12 rounded-none transition-colors duration-300"
                  data-testid="contact-submit-button"
                >
                  {loading ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send size={16} className="ml-2" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
