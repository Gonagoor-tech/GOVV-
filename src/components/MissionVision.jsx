import { missionVision } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import { motion } from "framer-motion";
import { components, animations } from "../../design-system.js";

const MissionVision = () => {
  return (
    <Section id="mission-vision" className="bg-slate-900">
      <div className="container relative z-2">
        <motion.div
          initial={components.heading.main.animation.initial}
          animate={components.heading.main.animation.animate}
          transition={components.heading.main.animation.transition}
        >
          <Heading
            className="md:max-w-md lg:max-w-2xl"
            title={missionVision.title}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-16">
          {/* Mission */}
          <motion.div
            className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 overflow-hidden p-8"
            initial={animations.entrance.left.initial}
            animate={animations.entrance.left.animate}
            transition={{ ...animations.entrance.left.transition, delay: 0.1 }}
            whileHover={{ 
              y: -5,
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">{missionVision.mission.icon}</span>
                <h3 className="text-2xl lg:text-3xl font-bold text-white">
                  {missionVision.mission.title}
                </h3>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                {missionVision.mission.content}
              </p>
              
              <div className="mt-6">
                <button className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-300">
                  Learn more
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 overflow-hidden p-8"
            initial={animations.entrance.right.initial}
            animate={animations.entrance.right.animate}
            transition={{ ...animations.entrance.right.transition, delay: 0.2 }}
            whileHover={{ 
              y: -5,
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">{missionVision.vision.icon}</span>
                <h3 className="text-2xl lg:text-3xl font-bold text-white">
                  {missionVision.vision.title}
                </h3>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                {missionVision.vision.content}
              </p>
              
              <div className="mt-6">
                <button className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold transition-colors duration-300">
                  Learn more
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default MissionVision; 