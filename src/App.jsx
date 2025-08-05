import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
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
        <Collaboration />
        <Pricing />
        <Roadmap />
        <Footer />
      </motion.div>

      <ButtonGradient />
    </div>
  );
};

export default App;
