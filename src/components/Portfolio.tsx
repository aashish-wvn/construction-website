import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, Maximize2, Eye } from "lucide-react";
import config from "../config";

type Category = "All" | "Residential" | "Commercial" | "Government";
const categories: Category[] = ["All", "Residential", "Commercial", "Government"];

export default function Portfolio() {
  const [active, setActive] = useState<Category>("All");

  const projects = config.portfolio;
  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="bg-[#0a0f1e] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12"
        >
          <div>
            <span className="text-orange-400 text-xs font-semibold tracking-[0.2em] uppercase">
              Our Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-3">
              Portfolio
            </h2>
            <p className="text-gray-400 mt-2">
              {projects.filter((p) => p.status === "Completed").length} completed ·{" "}
              {projects.filter((p) => p.status === "Ongoing").length} ongoing
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 text-sm font-medium rounded-sm transition-all duration-200 ${
                  active === cat
                    ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20"
                    : "border border-white/10 text-gray-400 hover:text-white hover:border-white/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Project grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="break-inside-avoid group relative overflow-hidden rounded-sm border border-white/8 hover:border-white/20 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ height: project.id % 2 === 0 ? "280px" : "220px" }}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#0a0f1e] via-transparent to-transparent opacity-80" />

                  {/* Status badge */}
                  <div
                    className={`absolute top-3 right-3 text-[11px] font-bold px-2.5 py-1 rounded-full ${
                      project.status === "Completed"
                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                        : "bg-orange-500/20 text-orange-400 border border-orange-500/30"
                    }`}
                  >
                    {project.status}
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#1e3a8a]/80 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                    <button className="flex items-center gap-2 bg-white text-[#1e3a8a] font-bold text-sm px-5 py-2.5 rounded-sm shadow-xl">
                      <Eye className="w-4 h-4" />
                      View Details
                    </button>
                  </div>
                </div>

                {/* Card content */}
                <div className="bg-[#0f172a] p-5">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-white font-bold text-base leading-tight">
                      {project.title}
                    </h3>
                    <span className="text-xs text-orange-400 bg-orange-400/10 border border-orange-400/20 px-2 py-0.5 rounded-full shrink-0">
                      {project.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-gray-500 text-xs mb-2">
                    <MapPin className="w-3 h-3" />
                    {project.location}
                  </div>

                  <div className="flex gap-4 text-xs text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Maximize2 className="w-3 h-3" />
                      {project.area}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {project.duration}
                    </span>
                  </div>

                  <p className="text-gray-500 text-xs italic border-t border-white/5 pt-3">
                    ✦ {project.highlight}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
