import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { roadmap } from "../constants";
import { check2, grid, loading1 } from "../assets";
import { Gradient } from "./design/Roadmap";
import { motion } from "framer-motion";
import { components, classes, animations } from "../../design-system.js";

const Roadmap = () => (
  <Section className="overflow-hidden bg-slate-900" id="roadmap">
    <div className="container md:pb-10">
      <motion.div
        initial={components.heading.main.animation.initial}
        animate={components.heading.main.animation.animate}
        transition={components.heading.main.animation.transition}
      >
        <Heading tag="Ready to get started" title="Our Go VV Models" />
      </motion.div>

      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {roadmap.map((item, index) => {
          const status = item.status === "done" ? "Available" : "Coming Soon";

          return (
            <motion.div
              className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                item.colorful ? "bg-conic-gradient" : "bg-slate-800/50"
              }`}
              key={item.id}
              initial={animations.entrance.up.initial}
              animate={animations.entrance.up.animate}
              transition={{ ...animations.entrance.up.transition, delay: index * 0.2 }}
              whileHover={animations.hover.lift}
            >
              <div className={`relative p-8 bg-slate-800/50 rounded-[2.4375rem] overflow-hidden xl:p-15`}>
                <div className="absolute top-0 left-0 max-w-full">
                  <img
                    className="w-full"
                    src={grid}
                    width={550}
                    height={550}
                    alt="Grid"
                  />
                </div>
                <div className="relative z-1">
                  <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                    <Tagline>{item.date}</Tagline>

                    <div className={`flex items-center px-4 py-1 bg-slate-800/50 rounded text-light-13`}>
                      <img
                        className="mr-2.5"
                        src={item.status === "done" ? check2 : loading1}
                        width={16}
                        height={16}
                        alt={status}
                      />
                      <div className="tagline">{status}</div>
                    </div>
                  </div>

                  <div className="mb-10 -my-10 -mx-15">
                    <img
                      className="w-full"
                      src={item.imageUrl}
                      width={628}
                      height={426}
                      alt={item.title}
                    />
                  </div>
                  <h4 className="h4 mb-4">{item.title}</h4>
                  <p className="body-2 text-light-4">{item.text}</p>
                </div>
              </div>
            </motion.div>
          );
        })}

        <Gradient />
      </div>

      <motion.div 
        className="flex justify-center mt-12 md:mt-15 xl:mt-20"
        initial={animations.entrance.up.initial}
        animate={animations.entrance.up.animate}
        transition={{ ...animations.entrance.up.transition, delay: 0.8 }}
      >
        <Button href="/roadmap">View all models</Button>
      </motion.div>
    </div>
  </Section>
);

export default Roadmap;
