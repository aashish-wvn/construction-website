import { motion } from "framer-motion";
import { User, Wrench, Award } from "lucide-react";
import config from "../config";

export default function About() {
  const { about, company } = config;

  return (
    <section id="about" className="bg-[#080c18] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Bio */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-orange-400 text-xs font-semibold tracking-[0.2em] uppercase">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-3 mb-6">
              Building Nepal's Future
              <br />
              <span className="text-orange-400">Since {company.foundedYear}</span>
            </h2>
            {about.bio.map((paragraph, i) => (
              <p key={i} className={`text-gray-400 leading-relaxed ${i === 0 ? "text-lg mb-6" : "mb-8"}`}>
                {paragraph}
              </p>
            ))}
            <div className="flex flex-wrap gap-3">
              {about.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-white/5 border border-white/10 text-gray-300 text-sm px-3 py-1.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Machinery list */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="bg-[#0f172a] border border-white/10 rounded-sm p-7">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 bg-orange-500/10 border border-orange-500/20 rounded-sm flex items-center justify-center">
                  <Wrench className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <div className="text-white font-bold">Machinery Fleet</div>
                  <div className="text-gray-500 text-xs">All owned — no subcontracting</div>
                </div>
              </div>
              <ul className="space-y-3">
                {about.machinery.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-gray-400 text-sm border-b border-white/5 pb-3 last:border-0 last:pb-0"
                  >
                    <span className="w-2 h-2 rounded-full bg-orange-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-2">
            <User className="w-5 h-5 text-orange-400" />
            <span className="text-orange-400 text-xs font-semibold tracking-[0.2em] uppercase">
              Our Engineers
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
            Meet the Team
          </h3>
          <p className="text-gray-400">
            Licensed, experienced, and deeply committed to Nepali engineering standards.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {about.team.map((member, i) => (
            <motion.div
              key={member.nec}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group bg-white/3 border border-white/8 hover:border-white/20 rounded-sm overflow-hidden transition-all duration-300"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#080c18] via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <div className="text-white font-bold mb-0.5">{member.name}</div>
                <div className="text-orange-400 text-sm font-medium mb-1">{member.role}</div>
                <div className="text-gray-500 text-xs mb-3">{member.specialization}</div>
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-sm px-2.5 py-1.5">
                  <Award className="w-3.5 h-3.5 text-green-400" />
                  <span className="text-gray-400 text-[11px] font-mono">{member.nec}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
