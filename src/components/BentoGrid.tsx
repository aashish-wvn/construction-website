import { motion } from "framer-motion";
import { ShieldCheck, Clock, BadgeCheck, DollarSign, TrendingUp, Wrench } from "lucide-react";
import config from "../config";

interface BentoCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  className?: string;
  accentColor: string;
  delay?: number;
}

function BentoCard({ icon: Icon, title, description, className = "", accentColor, delay = 0 }: BentoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`group relative bg-white/3 border border-white/8 hover:border-white/20 rounded-sm p-7 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20 ${className}`}
    >
      <div
        className={`absolute -top-16 -right-16 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${accentColor}`}
      />
      <div>
        <div className={`w-12 h-12 rounded-sm flex items-center justify-center mb-5 ${accentColor} bg-current/10`}>
          <Icon className={`w-6 h-6 ${accentColor}`} />
        </div>
        <h3 className="text-white font-black text-xl mb-2">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

const iconMap: Record<string, React.ElementType> = {
  seismic: ShieldCheck,
  ontime: Clock,
  licensed: BadgeCheck,
  pricing: DollarSign,
  excellence: TrendingUp,
  machinery: Wrench,
};

export default function BentoGrid() {
  return (
    <section className="bg-[#080c18] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="text-orange-400 text-xs font-semibold tracking-[0.2em] uppercase">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-3 mb-4">
            Built on Four Pillars
          </h2>
          <p className="text-gray-400 max-w-xl text-lg">
            Engineering precision meets local expertise. These core values drive
            every project we undertake.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {config.bentoValues.map((v, i) => (
            <BentoCard
              key={v.id}
              icon={iconMap[v.id] ?? ShieldCheck}
              title={v.title}
              description={v.description}
              accentColor={v.accentColor}
              className={v.large ? "lg:col-span-2" : ""}
              delay={i * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
