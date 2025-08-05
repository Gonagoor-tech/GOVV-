import React from "react";
import { motion } from "framer-motion";
import { Zap, MapPin, ArrowRight, Play, Star, TrendingUp, Sparkles, CheckCircle } from "lucide-react";
import { govv } from "../assets";
import { components, classes, animations } from "../../design-system.js";

const Landing = () => {
  return (
    <section className="relative min-h-screen bg-slate-900 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Modern EV-Themed Background */}
      <div className="absolute inset-0">
        {/* Circuit Board Pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1000 1000" fill="none">
            <defs>
              <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M10 10 L90 10 M10 10 L10 90 M90 10 L90 90 M10 90 L90 90" stroke="url(#energyGradient)" strokeWidth="1" fill="none"/>
                <circle cx="10" cy="10" r="2" fill="url(#energyGradient)"/>
                <circle cx="90" cy="10" r="2" fill="url(#energyGradient)"/>
                <circle cx="10" cy="90" r="2" fill="url(#energyGradient)"/>
                <circle cx="90" cy="90" r="2" fill="url(#energyGradient)"/>
              </pattern>
              <linearGradient id="energyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8"/>
                <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.6"/>
                <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.8"/>
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)"/>
          </svg>
        </div>

        {/* Battery Level Indicators */}
        <div className="absolute right-10 top-1/4">
          <motion.div
            className="w-2 h-32 bg-slate-700 rounded-full border border-slate-600"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className="w-full bg-gradient-to-t from-green-400 via-blue-400 to-purple-400 rounded-full"
              initial={{ height: "0%" }}
              animate={{ height: "85%" }}
              transition={{ duration: 2, delay: 1 }}
            />
          </motion.div>
        </div>

        {/* Rotating Gears */}
        <div className="absolute left-20 top-1/3">
          <motion.div
            className="w-16 h-16 border-2 border-blue-400/30 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-12 h-12 border-2 border-purple-400/30 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </motion.div>
        </div>

        {/* Pulse Waves */}
        <div className="absolute bottom-20 left-1/4">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 bg-cyan-400 rounded-full"
              style={{
                left: `${i * 20}px`,
                top: `${i * 10}px`,
              }}
              animate={{
                scale: [0, 2, 0],
                opacity: [1, 0, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </div>

        {/* Energy Nodes */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
              style={{
                left: `${10 + (i % 4) * 20}%`,
                top: `${15 + Math.floor(i / 4) * 20}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>

        {/* Speed Lines */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-20 bg-gradient-to-b from-transparent via-blue-400/50 to-transparent"
              style={{
                left: `${Math.random() * 100}%`,
                top: "-20px",
                transform: `rotate(${Math.random() * 30 - 15}deg)`,
              }}
              animate={{
                y: ["0vh", "100vh"],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1.5 + Math.random(),
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Electric Arc Effect */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <motion.div
            className="w-1 h-40 bg-gradient-to-b from-blue-400 via-purple-400 to-cyan-400"
            animate={{
              opacity: [0, 1, 0],
              scaleY: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: 1,
            }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[85vh]">
          
          {/* Left Column - Enhanced Content */}
          <motion.div 
            className="space-y-10"
            initial={animations.entrance.left.initial}
            animate={animations.entrance.left.animate}
            transition={animations.entrance.left.transition}
          >
            {/* Enhanced Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span>Revolutionary Campus Mobility</span>
              <motion.div
                className="w-2 h-2 bg-green-400 rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>

            {/* Enhanced Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Go VV
                </span>
                <br />
                <span className="text-white/90 text-4xl lg:text-5xl">
                  Electrifying Your
                </span>
                <br />
                <span className="text-white/90 text-4xl lg:text-5xl">
                  Campus Commute
                </span>
              </h1>
            </motion.div>

            {/* Enhanced Description */}
            <motion.p 
              className="text-xl text-gray-300 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Experience the future of campus transportation with our cutting-edge electric vehicles. 
              Smart, sustainable, and designed for the modern student lifestyle.
            </motion.p>

            {/* Enhanced Feature Cards */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.div 
                className="group relative p-6 bg-gradient-to-br from-blue-500/10 to-blue-600/10 backdrop-blur-sm border border-blue-500/20 rounded-2xl hover:border-blue-400/40 transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">36V Power</h3>
                    <p className="text-blue-300 text-sm">Li-ion Battery</p>
                  </div>
                </div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>

              <motion.div 
                className="group relative p-6 bg-gradient-to-br from-purple-500/10 to-purple-600/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl hover:border-purple-400/40 transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">25 km/h</h3>
                    <p className="text-purple-300 text-sm">Top Speed</p>
                  </div>
                </div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>

              <motion.div 
                className="group relative p-6 bg-gradient-to-br from-green-500/10 to-green-600/10 backdrop-blur-sm border border-green-500/20 rounded-2xl hover:border-green-400/40 transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">40km</h3>
                    <p className="text-green-300 text-sm">Range</p>
                  </div>
                </div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>
            </motion.div>

            {/* Enhanced CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
            >
              <motion.button
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10 flex items-center gap-3">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>

              <motion.button
                className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <Play className="w-5 h-5" />
                  </div>
                  <span>Watch Demo</span>
                </div>
              </motion.button>
            </motion.div>

            {/* Enhanced Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <div className="text-center">
                <motion.div 
                  className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.4, type: "spring", stiffness: 200 }}
                >
                  500+
                </motion.div>
                <div className="text-gray-400 text-sm mt-1">Happy Students</div>
              </div>
              <div className="text-center">
                <motion.div 
                  className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.6, type: "spring", stiffness: 200 }}
                >
                  50+
                </motion.div>
                <div className="text-gray-400 text-sm mt-1">Campus Partners</div>
              </div>
              <div className="text-center">
                <motion.div 
                  className="text-3xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.8, type: "spring", stiffness: 200 }}
                >
                  99%
                </motion.div>
                <div className="text-gray-400 text-sm mt-1">Satisfaction Rate</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Enhanced Visual */}
          <motion.div 
            className="relative"
            initial={animations.entrance.right.initial}
            animate={animations.entrance.right.animate}
            transition={animations.entrance.right.transition}
          >
            {/* Enhanced Product Visual */}
            <motion.div
              className="relative"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-full blur-3xl scale-150" />
                
                <img
                  src={govv}
                  alt="GoVV Electric Vehicle"
                  className="relative w-96 h-96 mx-auto object-contain drop-shadow-2xl"
                />
                
                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 360],
                  }}
                  transition={{
                    y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                  }}
                >
                  <CheckCircle className="w-8 h-8 text-white" />
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg"
                  animate={{
                    y: [0, 10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Star className="w-6 h-6 text-white" />
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Landing; 