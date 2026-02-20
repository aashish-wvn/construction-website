import { motion } from "framer-motion";
import { ShieldCheck, FileText, BadgeCheck, Users, Building2 } from "lucide-react";
import config from "../config";

const iconMap: Record<string, React.ElementType> = {
  ocr: ShieldCheck,
  panvat: FileText,
  license: BadgeCheck,
  nec: Building2,
  fcan: Users,
};

export default function TrustBar() {
  return (
    <section className="bg-[#0f172a] border-y border-white/10 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-8"
        >
          Registered &amp; Verified Credentials
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {config.trustBar.map((item, i) => {
            const Icon = iconMap[item.id] ?? ShieldCheck;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`flex flex-col items-center text-center gap-3 p-4 rounded-sm border ${item.border} ${item.bg} hover:scale-105 transition-transform duration-200`}
              >
                <div className={`w-10 h-10 rounded-sm flex items-center justify-center ${item.bg} border ${item.border}`}>
                  <Icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <div>
                  <div className={`text-sm font-bold ${item.color}`}>{item.title}</div>
                  <div className="text-gray-500 text-[11px] mt-0.5 leading-tight">{item.subtitle}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
