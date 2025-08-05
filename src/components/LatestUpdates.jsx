import { latestUpdates } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import { motion } from "framer-motion";
import { components, animations } from "../../design-system.js";

const LatestUpdates = () => {
  return (
    <Section id="latest-updates" className="bg-slate-900">
      <div className="container relative z-2">
        <motion.div
          initial={components.heading.main.animation.initial}
          animate={components.heading.main.animation.animate}
          transition={components.heading.main.animation.transition}
        >
          <Heading
            className="md:max-w-md lg:max-w-2xl"
            title={latestUpdates.title}
          />
        </motion.div>

        <motion.p
          className="text-gray-400 text-lg text-center mt-6 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {latestUpdates.subtitle}
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mt-16">
          {latestUpdates.updates.map((update, index) => (
            <motion.div
              key={index}
              className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 hover:border-orange-500/50 transition-all duration-500 overflow-hidden"
              initial={animations.entrance.up.initial}
              animate={animations.entrance.up.animate}
              transition={{ ...animations.entrance.up.transition, delay: index * 0.1 }}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-red-500/5 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="relative z-10 p-6">
                {/* Meta Info */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-orange-400 text-sm font-semibold">
                    {update.date}
                  </span>
                  <span className="text-gray-400 text-xs">
                    {update.readTime}
                  </span>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-orange-100 transition-colors duration-300">
                  {update.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {update.description}
                </p>
                
                {/* Read More Link */}
                <div className="flex items-center text-orange-400 hover:text-orange-300 font-semibold transition-colors duration-300 cursor-pointer">
                  {update.link}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default LatestUpdates; 