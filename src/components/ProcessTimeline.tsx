import { motion } from "framer-motion";
import { Map, FileCheck, Hammer, Building, Paintbrush2, KeyRound } from "lucide-react";
import config from "../config";

const iconMap: React.ElementType[] = [Map, FileCheck, Hammer, Building, Paintbrush2, KeyRound];

export default function ProcessTimeline() {
  const steps = config.processSteps;

  return (
    <section className="bg-[#0a0f1e] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-orange-400 text-xs font-semibold tracking-[0.2em] uppercase">
            How We Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-3 mb-4">
            Our Build Process
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            A transparent, milestone-driven process — from first site visit to
            key handover — with regular progress updates.
          </p>
        </motion.div>

        {/* Desktop: Horizontal stepper */}
        <div className="hidden lg:block">
          <div className="relative mb-10">
            <div className="absolute top-6 left-0 right-0 h-0.5 bg-linear-to-r from-blue-400/20 via-orange-400/40 to-green-400/20" />
            <div className="grid grid-cols-6 gap-4">
              {steps.map((step, i) => {
                const Icon = iconMap[i] ?? Map;
                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex flex-col items-center text-center"
                  >
                    <div
                      className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center border-2 ${step.border} ${step.bg} mb-4`}
                    >
                      <Icon className={`w-5 h-5 ${step.color}`} />
                    </div>
                    <div className={`text-xs font-black ${step.color} mb-1`}>
                      {step.step}
                    </div>
                    <div className="text-white font-bold text-sm mb-1">{step.title}</div>
                    <div className="text-gray-600 text-[11px] mb-2">{step.subtitle}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Description cards below */}
          <div className="grid grid-cols-6 gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.step + "-desc"}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                className={`bg-white/3 border ${step.border} border-opacity-30 rounded-sm p-3`}
              >
                <p className="text-gray-400 text-[11px] leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: Vertical timeline */}
        <div className="lg:hidden relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-linear-to-b from-blue-400/30 via-orange-400/30 to-green-400/20" />
          <div className="space-y-6">
            {steps.map((step, i) => {
              const Icon = iconMap[i] ?? Map;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex gap-6 relative pl-14"
                >
                  <div
                    className={`absolute left-0 w-12 h-12 rounded-full flex items-center justify-center border-2 ${step.border} ${step.bg}`}
                  >
                    <Icon className={`w-5 h-5 ${step.color}`} />
                  </div>

                  <div className={`flex-1 bg-white/3 border ${step.border} border-opacity-40 rounded-sm p-4`}>
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-xs font-black ${step.color}`}>{step.step}</span>
                      <span className="text-gray-600 text-xs">{step.subtitle}</span>
                    </div>
                    <div className="text-white font-bold mb-2">{step.title}</div>
                    <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
