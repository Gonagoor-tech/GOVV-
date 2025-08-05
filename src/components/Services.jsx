import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../assets";
import { features } from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

import Generating from "./Generating";
import { motion } from "framer-motion";
import { components, classes, animations } from "../../design-system.js";

const Services = () => {
  return (
    <Section id="how-to-use" className="bg-slate-900">
      <div className="container">
        <motion.div
          initial={components.heading.main.animation.initial}
          animate={components.heading.main.animation.animate}
          transition={components.heading.main.animation.transition}
        >
          <Heading
            title="Smart campus mobility made for modern institutions."
            text="GoVV unlocks the potential of sustainable urban transportation"
          />
        </motion.div>

        <div className="relative">
          <div className={`relative z-1 flex items-center h-[39rem] mb-5 p-8 ${classes.borders.white} rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem] bg-slate-800/50`}>
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="Go VV Campus Rider"
                height={730}
                src={service1}
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">Go VV Campus</h4>
              <p className="body-2 mb-[3rem] text-light-3">
                Revolutionary electric vehicles designed for modern campus transportation
              </p>
              <ul className="body-2">
                {features.map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start py-4 border-t border-light-8"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">
                      <span className="font-semibold">{feature.title}</span>: {feature.description}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </div>

            <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg:right-auto lg:bottom-8 lg:-translate-x-1/2" />
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <motion.div 
              className={`relative min-h-[39rem] ${classes.borders.white} rounded-3xl overflow-hidden bg-slate-800/50`}
              initial={animations.entrance.left.initial}
              animate={animations.entrance.left.animate}
              transition={animations.entrance.left.transition}
            >
              <div className="absolute inset-0">
                <img
                  src={service2}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="Smart Technology"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-slate-900/0 to-slate-900/90 lg:p-15">
                <h4 className="h4 mb-4">Smart Technology</h4>
                <p className="body-2 mb-[3rem] text-light-3">
                  Advanced GPS navigation, smart lock system, and mobile app integration
                  for seamless campus mobility. Experience the future now!
                </p>
              </div>

              <PhotoChatMessage />
            </motion.div>

            <motion.div 
              className={`p-4 bg-slate-800/50 rounded-3xl overflow-hidden lg:min-h-[46rem]`}
              initial={animations.entrance.right.initial}
              animate={animations.entrance.right.animate}
              transition={animations.entrance.right.transition}
            >
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Zero Emissions</h4>
                <p className="body-2 mb-[2rem] text-light-3">
                  Eco-friendly transportation solutions that reduce your carbon footprint
                  while providing reliable campus mobility.
                </p>

                <ul className="flex items-center justify-between">
                  {features.map((feature, index) => (
                    <motion.li
                      key={index}
                      className={`rounded-2xl flex items-center justify-center ${
                        index === 2
                          ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                          : "flex w-10 h-10 bg-slate-700 md:w-15 md:h-15"
                      }`}
                      whileHover={animations.hover.scale}
                      transition={animations.hover.spring}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full bg-slate-800 rounded-[1rem]"
                            : ""
                        }
                      >
                        <div className={`w-6 h-6 ${classes.text[feature.color === 'blue' ? 'blue300' : 'white']}`}>
                          {/* Icon placeholder - you can add actual icons here */}
                          <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded"></div>
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className={`relative h-[20rem] bg-slate-800/50 rounded-xl overflow-hidden md:h-[25rem]`}>
                <img
                  src={service3}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Go VV Electric Vehicle"
                />

                <VideoChatMessage />
                <VideoBar />
              </div>
            </motion.div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
