import Section from "./Section";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";
import { motion } from "framer-motion";
import { components, classes, animations } from "../../design-system.js";

const Pricing = () => {
  return (
    <Section className="overflow-hidden bg-slate-900" id="pricing">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt="Sphere"
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>

        <motion.div
          initial={components.heading.main.animation.initial}
          animate={components.heading.main.animation.animate}
          transition={components.heading.main.animation.transition}
        >
          <Heading
            tag="Get started with GoVV"
            title="Choose your campus solution"
          />
        </motion.div>

        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>

        <motion.div 
          className="flex justify-center mt-10"
          initial={animations.entrance.up.initial}
          animate={animations.entrance.up.animate}
          transition={{ ...animations.entrance.up.transition, delay: 0.8 }}
        >
          <a
            className={`text-xs font-code font-bold tracking-wider uppercase border-b ${classes.text.gray400} hover:${classes.text.blue300} transition-colors`}
            href="/pricing"
          >
            View all plans
          </a>
        </motion.div>
      </div>
    </Section>
  );
};

export default Pricing;
