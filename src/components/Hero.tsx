import { motion } from "framer-motion";
import { ArrowRight, Shield, Clock, Award } from "lucide-react";
import config from "../config";

const pillIcons = [Shield, Clock, Award];

export default function Hero() {
  const { hero, stats } = config;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0f1e]">
      {/* Background grid texture */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(249,115,22,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(249,115,22,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-[#0a0f1e] via-[#1e3a8a]/30 to-[#0a0f1e]" />

      {/* Orange accent blob */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-1.5 mb-6"
            >
              <Shield className="w-3.5 h-3.5 text-orange-400" />
              <span className="text-orange-400 text-xs font-semibold tracking-widest uppercase">
                {hero.badge}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.08] tracking-tight mb-6"
            >
              {hero.headline[0]}{" "}
              <span className="text-orange-400">{hero.headline[1]}</span>
              <br />
              <span className="text-orange-400">{hero.headline[2]}</span>
              <br />
              {hero.headline[3]}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg"
            >
              {hero.subheadline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-bold px-7 py-3.5 rounded-sm transition-all duration-200 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 hover:gap-3"
              >
                {hero.primaryCTA}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-orange-400/50 text-white hover:text-orange-400 font-medium px-7 py-3.5 rounded-sm transition-all duration-200"
              >
                {hero.secondaryCTA}
              </a>
            </motion.div>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              {hero.featurePills.map((text, i) => {
                const Icon = pillIcons[i] ?? Shield;
                return (
                  <div
                    key={text}
                    className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1.5"
                  >
                    <Icon className="w-3.5 h-3.5 text-orange-400" />
                    <span className="text-gray-300 text-xs font-medium">{text}</span>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Right — Stats Panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="bg-white/5 border border-white/10 backdrop-blur-sm p-6 rounded-sm hover:border-orange-500/30 hover:bg-orange-500/5 transition-all duration-300 group"
              >
                <div className="text-3xl font-black text-white group-hover:text-orange-400 transition-colors mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}

            {/* Large accent card */}
            <div className="col-span-2 bg-linear-to-br from-orange-500/20 to-orange-600/5 border border-orange-500/20 p-6 rounded-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-orange-500 rounded-sm flex items-center justify-center shrink-0">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-white font-bold mb-1">
                    {hero.licenseHighlight.title}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {hero.licenseHighlight.subtitle}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-gray-500 text-xs tracking-widest uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-0.5 h-8 bg-linear-to-b from-orange-400 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
