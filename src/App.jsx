import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import CoreValues from "./components/CoreValues";
import Customize from "./components/Customize";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Landing from "./components/Landing";
import LatestUpdates from "./components/LatestUpdates";
import MissionVision from "./components/MissionVision";
import Pricing from "./components/Pricing";

import Services from "./components/Services";
import Team from "./components/Team";
import { motion } from "framer-motion";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-900 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <motion.div 
        className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden min-h-screen bg-slate-900 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Header />
        <Landing />
        <Services />
        <Benefits />
        <MissionVision />
        <CoreValues />
        <Team />
        <LatestUpdates />
        <Collaboration />
        <Pricing />
        <Customize />
        <Contact />
        <Footer />
      </motion.div>

      <ButtonGradient />
    </div>
  );
};

export default App;
