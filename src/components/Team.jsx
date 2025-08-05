import { team } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import { motion } from "framer-motion";
import { components, animations } from "../../design-system.js";

const Team = () => {
  return (
    <Section id="team" className="bg-slate-900">
      <div className="container relative z-2">
        <motion.div
          initial={components.heading.main.animation.initial}
          animate={components.heading.main.animation.animate}
          transition={components.heading.main.animation.transition}
        >
          <Heading
            className="md:max-w-md lg:max-w-2xl"
            title={team.title}
          />
        </motion.div>

        <motion.p
          className="text-gray-400 text-lg text-center mt-6 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {team.subtitle}
        </motion.p>

        {/* Main Team Members */}
        <div className="mt-16">
          <motion.h3
            className="text-2xl font-bold text-white text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Core Team
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8">
            {team.members.map((member, index) => (
              <motion.div
                key={index}
                className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 overflow-hidden p-6"
                initial={animations.entrance.up.initial}
                animate={animations.entrance.up.animate}
                transition={{ ...animations.entrance.up.transition, delay: index * 0.1 }}
                whileHover={{ 
                  y: -8,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative z-10 text-center">
                  {/* Avatar */}
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold shadow-lg group-hover:shadow-blue-500/25 transition-shadow duration-300">
                    {member.initials}
                  </div>
                  
                  {/* Name & Role */}
                  <h3 className="text-xl font-bold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-400 font-semibold mb-4">
                    {member.role}
                  </p>
                  
                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Advisory Board */}
        {team.advisory && (
          <div className="mt-20">
            <motion.h3
              className="text-2xl font-bold text-white text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Advisory Board
            </motion.h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
              {team.advisory.map((member, index) => (
                <motion.div
                  key={index}
                  className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 hover:border-green-500/50 transition-all duration-500 overflow-hidden p-6"
                  initial={animations.entrance.up.initial}
                  animate={animations.entrance.up.animate}
                  transition={{ ...animations.entrance.up.transition, delay: 0.7 + index * 0.1 }}
                  whileHover={{ 
                    y: -8,
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-emerald-500/5 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Content */}
                  <div className="relative z-10 text-center">
                    {/* Avatar */}
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold shadow-lg group-hover:shadow-green-500/25 transition-shadow duration-300">
                      {member.initials}
                    </div>
                    
                    {/* Name & Role */}
                    <h3 className="text-xl font-bold text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-green-400 font-semibold mb-4">
                      {member.role}
                    </p>
                    
                    {/* Description */}
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105">
            Join Our Team
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </motion.div>
      </div>
    </Section>
  );
};

export default Team; 