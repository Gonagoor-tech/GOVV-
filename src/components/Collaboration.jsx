import { govv, check } from "../assets";
import { collabApps, collabContent, collabText } from "../constants";
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";
import { motion } from "framer-motion";
import { components, classes, animations } from "../../design-system.js";

const Collaboration = () => {
  return (
    <Section crosses className="bg-slate-900">
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <motion.h2 
            className="h2 mb-4 md:mb-8"
            initial={components.heading.main.animation.initial}
            animate={components.heading.main.animation.animate}
            transition={components.heading.main.animation.transition}
          >
            Smart Campus Mobility for seamless student connectivity
          </motion.h2>

          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item, index) => (
              <motion.li 
                className="mb-3 py-3" 
                key={item.id}
                initial={animations.entrance.left.initial}
                animate={animations.entrance.left.animate}
                transition={{ ...animations.entrance.left.transition, delay: index * 0.1 }}
              >
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="check" />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-light-4">{item.text}</p>
                )}
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial={animations.entrance.up.initial}
            animate={animations.entrance.up.animate}
            transition={{ ...animations.entrance.up.transition, delay: 0.6 }}
          >
            <Button>Join GoVV</Button>
          </motion.div>
        </div>

        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          <motion.p 
            className="body-2 mb-8 text-light-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto"
            initial={components.paragraph.animation.initial}
            animate={components.paragraph.animation.animate}
            transition={components.paragraph.animation.transition}
          >
            {collabText}
          </motion.p>

          <motion.div 
            className="relative left-1/2 flex w-[22rem] aspect-square border border-light-8 rounded-full -translate-x-1/2 scale:75 md:scale-100"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className={`flex w-60 aspect-square m-auto ${classes.borders.white} rounded-full`}>
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className={`flex items-center justify-center w-full h-full bg-slate-800/50 rounded-full`}>
                  <img
                    src={govv}
                    width={48}
                    height={48}
                    alt="GoVV"
                  />
                </div>
              </div>
            </div>

            <ul>
              {collabApps.map((app, index) => (
                <motion.li
                  key={app.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                    index * 45
                  }`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={animations.hover.scale}
                >
                  <div
                    className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-slate-800/50 ${classes.borders.white} rounded-xl -rotate-${
                      index * 45
                    }`}
                  >
                    <img
                      className="m-auto"
                      width={app.width}
                      height={app.height}
                      alt={app.title}
                      src={app.icon}
                    />
                  </div>
                </motion.li>
              ))}
            </ul>

            <LeftCurve />
            <RightCurve />
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
