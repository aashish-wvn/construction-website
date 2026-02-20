import { HardHat, Facebook, Instagram, Youtube, MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import config from "../config";

export default function Footer() {
  const { company, contact, social, credentials, footer, hours } = config;

  const socialLinks = [
    { icon: Facebook, href: social.facebook, label: "Facebook" },
    { icon: Instagram, href: social.instagram, label: "Instagram" },
    { icon: Youtube, href: social.youtube, label: "YouTube" },
  ];

  const credentialTags = [
    credentials.pan,
    credentials.vat,
    credentials.ocr,
    credentials.license,
  ];

  return (
    <footer className="bg-[#050810] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 bg-orange-500 rounded-sm flex items-center justify-center">
                <HardHat className="w-5 h-5 text-white" />
              </div>
              <div className="leading-tight">
                <span className="block text-white font-black text-lg tracking-tight">
                  {company.name}
                </span>
                <span className="block text-orange-400 text-[10px] font-semibold tracking-[0.15em] uppercase">
                  {company.tagline}
                </span>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-sm">
              {company.description}
            </p>

            {/* Credentials */}
            <div className="flex flex-wrap gap-2 mb-6">
              {credentialTags.map((cred) => (
                <span
                  key={cred}
                  className="text-[11px] text-gray-500 border border-white/10 px-2.5 py-1 rounded-full font-mono"
                >
                  {cred}
                </span>
              ))}
            </div>

            {/* Social icons */}
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/5 border border-white/10 hover:border-orange-400/40 hover:bg-orange-400/10 rounded-sm flex items-center justify-center transition-all"
                >
                  <Icon className="w-4 h-4 text-gray-400 hover:text-orange-400" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footer.quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-orange-400 text-sm transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-orange-400/40 group-hover:bg-orange-400 transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
              {footer.legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-gray-400 text-sm transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-700 group-hover:bg-gray-400 transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={contact.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-3 text-gray-500 hover:text-gray-300 transition-colors group text-sm"
                >
                  <MapPin className="w-4 h-4 text-orange-400/60 flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    {contact.address.street}, {contact.address.city}
                    <br />
                    {contact.address.country} {contact.address.postalCode}
                    <ExternalLink className="w-3 h-3 inline ml-1 opacity-0 group-hover:opacity-100" />
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:+${contact.phoneRaw}`}
                  className="flex items-center gap-3 text-gray-500 hover:text-gray-300 transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 text-orange-400/60 flex-shrink-0" />
                  {contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-3 text-gray-500 hover:text-gray-300 transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 text-orange-400/60 flex-shrink-0" />
                  {contact.email}
                </a>
              </li>
            </ul>

            <div className="mt-6 p-3 bg-white/3 border border-white/8 rounded-sm">
              <div className="text-[11px] text-gray-600 mb-1">Office Hours</div>
              <div className="text-gray-400 text-sm font-medium">{hours.weekdays}</div>
              <div className="text-gray-500 text-xs">{hours.saturday}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} {company.legalName}. All rights reserved.
          </p>
          <p className="text-gray-700 text-xs">
            Registered in Nepal · OCR · NEC · FCAN Member
          </p>
        </div>
      </div>
    </footer>
  );
}
