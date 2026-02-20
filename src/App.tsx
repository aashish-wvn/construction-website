import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import Services from "./components/Services";
import BentoGrid from "./components/BentoGrid";
import Portfolio from "./components/Portfolio";
import CostCalculator from "./components/CostCalculator";
import ProcessTimeline from "./components/ProcessTimeline";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0f1e] text-white">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <BentoGrid />
        <Portfolio />
        <CostCalculator />
        <ProcessTimeline />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
