import { motion } from "framer-motion";
import { Home, Building2, Landmark, PaintRoller, ArrowRight } from "lucide-react";
import config from "../config";

const iconMap: Record<string, React.ElementType> = {
  residential: Home,
  commercial: Building2,
  government: Landmark,
  interior: PaintRoller,
};

export default function Services() {
  return (
    <section id="services" className="bg-[#0a0f1e] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-orange-400 text-xs font-semibold tracking-[0.2em] uppercase">
            What We Build
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-3 mb-4">
            Our Services
          </h2>
          <p className="text-gray-400 max-w-xl text-lg">
            End-to-end construction solutions — from foundation to finishing —
            backed by licensed engineers and proven processes.
          </p>
        </motion.div>

        {/* Service cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {config.services.map((service, i) => {
            const Icon = iconMap[service.id] ?? Home;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative bg-white/3 border border-white/8 hover:border-white/20 rounded-sm p-6 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30"
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-sm flex items-center justify-center mb-5 ${service.accentBg} border ${service.accentBorder}`}
                >
                  <Icon className={`w-6 h-6 ${service.accent}`} />
                </div>

                <h3 className="text-white font-bold text-lg mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm mb-5 flex-1">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-gray-400 text-sm"
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full shrink-0 ${service.accent} bg-current`}
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <button
                  className={`flex items-center gap-1.5 text-sm font-semibold ${service.accent} group-hover:gap-2.5 transition-all duration-200`}
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>

                {/* Hover accent line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-0.5 ${service.accentBg} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
