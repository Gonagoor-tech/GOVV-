import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import { motion } from "framer-motion";
import { components, classes, animations } from "../../design-system.js";

const Benefits = () => {
  return (
    <Section id="features" className="bg-slate-900">
      <div className="container relative z-2">
        <motion.div
          initial={components.heading.main.animation.initial}
          animate={components.heading.main.animation.animate}
          transition={components.heading.main.animation.transition}
        >
          <Heading
            className="md:max-w-md lg:max-w-2xl"
            title="Experience the Future of Campus Mobility"
          />
        </motion.div>

        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item, index) => (
            <motion.div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
              initial={animations.entrance.up.initial}
              animate={animations.entrance.up.animate}
              transition={{ ...animations.entrance.up.transition, delay: index * 0.1 }}
              whileHover={animations.hover.lift}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-light-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <p className="ml-auto font-code text-xs font-bold text-light-1 uppercase tracking-wider">
                    Learn more
                  </p>
                  <Arrow />
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className={`absolute inset-0.5 bg-slate-800/50`}
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
