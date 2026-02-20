import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import config from "../config";

type ProjectType = "" | "Residential" | "Commercial" | "Government" | "Renovation" | "Other";

interface FormState {
  name: string;
  phone: string;
  email: string;
  projectType: ProjectType;
  location: string;
  message: string;
}

const initialForm: FormState = {
  name: "",
  phone: "",
  email: "",
  projectType: "",
  location: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const { contact, social, company } = config;

  const contactInfo = [
    {
      icon: Phone,
      label: "Call / Viber",
      value: contact.phone,
      href: `tel:+${contact.phoneRaw}`,
      color: "text-green-400",
      bg: "bg-green-400/10",
      border: "border-green-400/20",
    },
    {
      icon: Mail,
      label: "Email Us",
      value: contact.email,
      href: `mailto:${contact.email}`,
      color: "text-blue-400",
      bg: "bg-blue-400/10",
      border: "border-blue-400/20",
    },
    {
      icon: MapPin,
      label: "Office",
      value: contact.address.full,
      href: contact.googleMapsLink,
      color: "text-orange-400",
      bg: "bg-orange-400/10",
      border: "border-orange-400/20",
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm(initialForm);
  };

  const inputClass =
    "w-full bg-white/3 border border-white/10 hover:border-white/20 focus:border-orange-400/50 focus:outline-none text-white placeholder-gray-600 text-sm px-4 py-3 rounded-sm transition-colors";

  return (
    <section id="contact" className="bg-[#0a0f1e] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-orange-400 text-xs font-semibold tracking-[0.2em] uppercase">
            Let's Build Together
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-3 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-400 max-w-xl text-lg">
            Tell us about your project and we'll get back within 24 hours with a
            free consultation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Left — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-5"
          >
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <a
                  key={info.label}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-5 bg-white/3 border ${info.border} rounded-sm hover:bg-white/5 transition-colors group`}
                >
                  <div
                    className={`w-10 h-10 rounded-sm flex items-center justify-center ${info.bg} border ${info.border} shrink-0`}
                  >
                    <Icon className={`w-5 h-5 ${info.color}`} />
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs font-medium mb-0.5">
                      {info.label}
                    </div>
                    <div className={`text-sm font-semibold ${info.color} group-hover:underline`}>
                      {info.value}
                    </div>
                  </div>
                </a>
              );
            })}

            {/* WhatsApp CTA */}
            <a
              href={social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 w-full bg-green-500 hover:bg-green-400 text-white font-bold px-5 py-4 rounded-sm transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>

            {/* Map embed */}
            <div className="h-44 bg-white/3 border border-white/10 rounded-sm overflow-hidden">
              <iframe
                src={contact.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                title={`${company.name} Office Location`}
              />
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 bg-[#0f172a] border border-white/10 rounded-sm p-8"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full py-16 text-center"
              >
                <div className="w-16 h-16 bg-green-500/10 border border-green-500/30 rounded-full flex items-center justify-center mb-4">
                  <Send className="w-7 h-7 text-green-400" />
                </div>
                <h3 className="text-white font-black text-xl mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-400">
                  We'll contact you within 24 hours with a free consultation.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-gray-400 text-xs font-medium mb-2 block">
                      Full Name *
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Ram Bahadur Thapa"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="text-gray-400 text-xs font-medium mb-2 block">
                      Phone / Viber *
                    </label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="+977-98XX-XXXXXX"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-gray-400 text-xs font-medium mb-2 block">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="text-gray-400 text-xs font-medium mb-2 block">
                      Project Type *
                    </label>
                    <select
                      name="projectType"
                      value={form.projectType}
                      onChange={handleChange}
                      required
                      className={`${inputClass} cursor-pointer`}
                    >
                      <option value="" disabled className="bg-[#0f172a]">
                        Select project type
                      </option>
                      {["Residential", "Commercial", "Government", "Renovation", "Other"].map((t) => (
                        <option key={t} value={t} className="bg-[#0f172a]">
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-gray-400 text-xs font-medium mb-2 block">
                    Project Location
                  </label>
                  <input
                    name="location"
                    value={form.location}
                    onChange={handleChange}
                    placeholder="e.g., Bhaktapur, Kathmandu Valley"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="text-gray-400 text-xs font-medium mb-2 block">
                    Project Details
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your project — area, floors, budget range, timeline..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-bold py-3.5 rounded-sm transition-colors shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30"
                >
                  <Send className="w-4 h-4" />
                  Send Enquiry
                </button>

                <p className="text-gray-600 text-xs text-center">
                  Free consultation · No commitment · Response within 24hrs
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href={social.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-400 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40 transition-all hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>
    </section>
  );
}
