import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, SlidersHorizontal, Info } from "lucide-react";
import config from "../config";

type Quality = "Standard" | "Premium" | "Luxury";

const RATES = config.costRates as Record<Quality, number>;

const QUALITY_DESCRIPTIONS: Record<Quality, string> = {
  Standard: "RCC frame, local bricks, basic plumbing & electrical",
  Premium: "MS steel, imported tiles, branded fittings, false ceiling",
  Luxury: "Architect design, imported stone, smart home, elevator-ready",
};

const qualityColors: Record<Quality, string> = {
  Standard: "border-green-400/40 text-green-400",
  Premium: "border-blue-400/40 text-blue-400",
  Luxury: "border-orange-400/40 text-orange-400",
};

const qualityActive: Record<Quality, string> = {
  Standard: "bg-green-400/10 border-green-400 text-green-300",
  Premium: "bg-blue-400/10 border-blue-400 text-blue-300",
  Luxury: "bg-orange-400/10 border-orange-400 text-orange-300",
};

function formatNRS(amount: number): string {
  if (amount >= 10000000) {
    return `NRs. ${(amount / 10000000).toFixed(2)} Cr`;
  } else if (amount >= 100000) {
    return `NRs. ${(amount / 100000).toFixed(2)} Lakh`;
  }
  return `NRs. ${amount.toLocaleString("en-NP")}`;
}

export default function CostCalculator() {
  const [areaType, setAreaType] = useState<"sqft" | "aana">("sqft");
  const [area, setArea] = useState(1500);
  const [quality, setQuality] = useState<Quality>("Standard");

  const areaInSqft = areaType === "sqft" ? area : area * 342.25;
  const ratePerSqft = RATES[quality];
  const totalCost = Math.round(areaInSqft * ratePerSqft);

  const maxArea = areaType === "sqft" ? 10000 : 30;
  const minArea = areaType === "sqft" ? 500 : 2;

  const handleAreaTypeChange = (type: "sqft" | "aana") => {
    if (type === "aana" && areaType === "sqft") {
      setArea(Math.round(area / 342.25));
    } else if (type === "sqft" && areaType === "aana") {
      setArea(Math.round(area * 342.25));
    }
    setAreaType(type);
  };

  return (
    <section id="calculator" className="bg-[#080c18] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Heading */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-orange-400 text-xs font-semibold tracking-[0.2em] uppercase">
              Smart Tool
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-3 mb-5">
              Construction Cost Estimator
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Get a rough estimate for your dream project in seconds. Adjust
              area and material quality to see real-time cost projections in
              Nepali Rupees.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3 bg-white/3 border border-white/8 rounded-sm p-4">
                <Info className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                <p className="text-gray-400 text-sm">
                  <strong className="text-white">Disclaimer:</strong> This
                  estimate covers civil construction only. Site preparation,
                  municipal fees (Naksha Pass), interior, and landscaping costs
                  are excluded.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {(["Standard", "Premium", "Luxury"] as Quality[]).map((q) => (
                  <div
                    key={q}
                    className={`border rounded-sm p-3 text-center text-xs transition-all duration-200 ${
                      quality === q ? qualityActive[q] : "border-white/10 text-gray-500"
                    }`}
                  >
                    <div className="font-bold mb-1">{q}</div>
                    <div className="text-[10px] opacity-70">
                      NRs. {(RATES[q] / 1000).toFixed(1)}K/sqft
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Calculator Card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#0f172a] border border-white/10 rounded-sm p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-orange-500/10 border border-orange-500/20 rounded-sm flex items-center justify-center">
                <Calculator className="w-5 h-5 text-orange-400" />
              </div>
              <div>
                <div className="text-white font-bold">Cost Calculator</div>
                <div className="text-gray-500 text-xs">Rough civil estimate</div>
              </div>
            </div>

            {/* Area Type Toggle */}
            <div className="mb-6">
              <label className="text-gray-400 text-sm font-medium mb-3 block">
                Area Unit
              </label>
              <div className="flex rounded-sm overflow-hidden border border-white/10">
                {(["sqft", "aana"] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => handleAreaTypeChange(type)}
                    className={`flex-1 py-2.5 text-sm font-semibold transition-all ${
                      areaType === type
                        ? "bg-orange-500 text-white"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {type === "sqft" ? "Sq. Ft." : "Aana"}
                  </button>
                ))}
              </div>
            </div>

            {/* Area Slider */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-3">
                <label className="text-gray-400 text-sm font-medium flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-orange-400" />
                  Built-up Area
                </label>
                <span className="text-orange-400 font-black text-lg">
                  {area.toLocaleString()} {areaType === "sqft" ? "Sq.Ft." : "Aana"}
                </span>
              </div>
              <input
                type="range"
                min={minArea}
                max={maxArea}
                step={areaType === "sqft" ? 50 : 1}
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer accent-orange-500 bg-white/10"
              />
              <div className="flex justify-between text-xs text-gray-600 mt-1.5">
                <span>{minArea.toLocaleString()}</span>
                <span>{maxArea.toLocaleString()}</span>
              </div>
            </div>

            {/* Quality Toggle */}
            <div className="mb-8">
              <label className="text-gray-400 text-sm font-medium mb-3 block">
                Finishing Quality
              </label>
              <div className="space-y-2.5">
                {(["Standard", "Premium", "Luxury"] as Quality[]).map((q) => (
                  <button
                    key={q}
                    onClick={() => setQuality(q)}
                    className={`w-full flex items-center justify-between p-3.5 rounded-sm border text-sm font-medium transition-all ${
                      quality === q
                        ? qualityActive[q]
                        : `border-white/8 text-gray-400 hover:border-white/20 hover:text-white`
                    }`}
                  >
                    <span>{q}</span>
                    <span className={`text-xs ${quality === q ? "" : qualityColors[q]}`}>
                      {QUALITY_DESCRIPTIONS[q].split(",")[0]}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Result */}
            <motion.div
              key={`${area}-${quality}-${areaType}`}
              initial={{ scale: 0.97, opacity: 0.8 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-gradient-to-br from-orange-500/15 to-orange-600/5 border border-orange-500/25 rounded-sm p-5"
            >
              <div className="text-gray-400 text-sm mb-1">Estimated Cost</div>
              <div className="text-3xl font-black text-white mb-1">
                {formatNRS(totalCost)}
              </div>
              <div className="text-gray-500 text-xs">
                {areaInSqft.toLocaleString(undefined, { maximumFractionDigits: 0 })} Sq.Ft. ×{" "}
                NRs. {ratePerSqft.toLocaleString()}/Sq.Ft. (civil only)
              </div>
              <a
                href="#contact"
                className="mt-4 block w-full bg-orange-500 hover:bg-orange-400 text-white text-sm font-bold py-3 rounded-sm text-center transition-colors"
              >
                Get Detailed Estimate →
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
