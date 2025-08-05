import React from "react";
import { motion } from "framer-motion";
import { Zap, MapPin, ArrowRight, Play, Star, TrendingUp } from "lucide-react";
import { govv } from "../assets";
import { components, classes, animations } from "../../design-system.js";

const Landing = () => {
  return (
    <section className="relative min-h-screen bg-slate-900 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left Column - Content */}
          <motion.div 
            className="space-y-8"
            initial={animations.entrance.left.initial}
            animate={animations.entrance.left.animate}
            transition={animations.entrance.left.transition}
          >
            {/* Badge */}
            <motion.div
              className={components.badge.className}
              initial={components.badge.animation.initial}
              animate={components.badge.animation.animate}
              transition={components.badge.animation.transition}
            >
              <Star className="w-4 h-4" />
              <span>Revolutionary Campus Mobility</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              className={components.heading.main.className}
              initial={components.heading.main.animation.initial}
              animate={components.heading.main.animation.animate}
              transition={components.heading.main.animation.transition}
            >
              <span className={components.heading.gradient}>
                Go VV
              </span>
              <br />
              <span className={components.heading.subtitle}>
                Electrifying Your
              </span>
              <br />
              <span className={components.heading.subtitle}>
                Campus Commute
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              className={components.paragraph.className}
              initial={components.paragraph.animation.initial}
              animate={components.paragraph.animation.animate}
              transition={components.paragraph.animation.transition}
            >
              Experience the future of campus transportation with our cutting-edge electric vehicles. 
              Smart, sustainable, and designed for the modern student.
            </motion.p>

            {/* Feature Cards */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
              initial={animations.entrance.up.initial}
              animate={animations.entrance.up.animate}
              transition={{ ...animations.entrance.up.transition, delay: 0.8 }}
            >
              <motion.div 
                className={components.featureCard.className}
                whileHover={components.featureCard.hover}
              >
                <div className="flex items-center gap-3">
                  <div className={components.featureCard.icon.blue}>
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className={classes.text.white}>36V Power</h3>
                    <p className={classes.text.gray400}>Li-ion Battery</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className={components.featureCard.className}
                whileHover={components.featureCard.hover}
              >
                <div className="flex items-center gap-3">
                  <div className={components.featureCard.icon.purple}>
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className={classes.text.white}>25 km/h</h3>
                    <p className={classes.text.gray400}>Top Speed</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className={components.featureCard.className}
                whileHover={components.featureCard.hover}
              >
                <div className="flex items-center gap-3">
                  <div className={components.featureCard.icon.green}>
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className={classes.text.white}>40km</h3>
                    <p className={classes.text.gray400}>Range</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={animations.entrance.up.initial}
              animate={animations.entrance.up.animate}
              transition={{ ...animations.entrance.up.transition, delay: 1.0 }}
            >
              <motion.button
                className={components.button.primary.className}
                whileHover={components.button.primary.hover}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>

              <motion.button
                className={components.button.secondary.className}
                whileHover={components.button.secondary.hover}
              >
                <div className={components.button.icon}>
                  <Play className="w-5 h-5" />
                </div>
                <span className="font-medium">Watch Demo</span>
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className={components.stats.container}
              initial={components.stats.animation.initial}
              animate={components.stats.animation.animate}
              transition={components.stats.animation.transition}
            >
              <div className={components.stats.item}>
                <div className={components.stats.number}>500+</div>
                <div className={components.stats.label}>Happy Students</div>
              </div>
              <div className={components.stats.item}>
                <div className={components.stats.number}>50+</div>
                <div className={components.stats.label}>Campus Partners</div>
              </div>
              <div className={components.stats.item}>
                <div className={components.stats.number}>99%</div>
                <div className={components.stats.label}>Satisfaction Rate</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div 
            className="relative"
            initial={animations.entrance.right.initial}
            animate={animations.entrance.right.animate}
            transition={animations.entrance.right.transition}
          >
            {/* Main Product Visual */}
            <motion.div
              className="relative"
              animate={animations.floating.gentle.animate}
              transition={animations.floating.gentle.transition}
            >
              <motion.div
                className="relative"
                whileHover={animations.hover.scale}
                transition={animations.hover.spring}
              >
                <img
                  src={govv}
                  alt="GoVV Electric Vehicle"
                  className="relative w-80 h-80 mx-auto object-contain drop-shadow-2xl"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Landing; 