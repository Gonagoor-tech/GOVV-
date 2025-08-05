import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";
import { hero } from "../constants";
import { components, backgrounds, animations } from "../../design-system.js";
import { motion } from "framer-motion";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 grid lg:grid-cols-2 gap-12 items-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          {/* Left side - Text content */}
          <div className="text-left">
            <motion.div
              initial={components.badge.animation.initial}
              animate={components.badge.animation.animate}
              transition={components.badge.animation.transition}
              className={components.badge.className}
            >
              {hero.badge}
            </motion.div>
            
            <motion.h1 
              className="h1 mb-6 text-left"
              initial={components.heading.main.animation.initial}
              animate={components.heading.main.animation.animate}
              transition={components.heading.main.animation.transition}
            >
              Smart Campus<br />
              Mobility for<br />
              seamless<br />
              student<br />
              connectivity
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-white font-medium">About Go VV</span>
            </motion.div>
            
            <motion.p 
              className="body-1 mb-8 text-light-3 max-w-2xl"
              initial={components.paragraph.animation.initial}
              animate={components.paragraph.animation.animate}
              transition={components.paragraph.animation.transition}
            >
              Go VV was born from a simple idea: campus transportation should be smart, sustainable, and accessible to every student. Our team of engineers, designers, and mobility experts worked together to create electric vehicles that perfectly fit the modern student lifestyle.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button href="/pricing" white>
                {hero.cta.primary}
              </Button>
              <Button href="#demo" className="group flex items-center gap-3 text-white hover:text-blue-300 transition-colors">
                {hero.cta.secondary}
              </Button>
            </motion.div>
          </div>

          {/* Right side - Circular graphic */}
          <div className="relative flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="relative"
            >
              {/* Main circular graphic */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                {/* Outer circles */}
                <div className="absolute inset-0 border-2 border-white/20 rounded-full"></div>
                <div className="absolute inset-4 border-2 border-white/30 rounded-full"></div>
                <div className="absolute inset-8 border-2 border-white/40 rounded-full"></div>
                <div className="absolute inset-12 border-2 border-white/50 rounded-full"></div>
                
                {/* Center gradient circle */}
                <div className="absolute inset-16 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-2xl lg:text-3xl font-bold text-white">Go VV</span>
                </div>
              </div>

              {/* Cloud icon above */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute -top-8 -right-8"
              >
                <div className="w-16 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center border-2 border-white">
                  <svg className="w-8 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
                  </svg>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 border-2 border-white rounded-full"></div>
              </motion.div>

              {/* Connection lines */}
              <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-white/30 rounded-tr-full"></div>
            </motion.div>
          </div>
        </div>
        
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-light-11 rounded-[1rem]">
              <div className="h-[1.4rem] bg-light-9 rounded-t-[0.9rem]" />

              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={robot}
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                  alt="Go VV Electric Vehicle"
                />

                <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />

                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-light-9/40 backdrop-blur border border-light-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} width={24} height={25} alt={icon} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                    title="Smart Navigation"
                  />
                </ScrollParallax>
              </div>
            </div>

            <Gradient />
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>

          <BackgroundCircles />
        </div>

        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
