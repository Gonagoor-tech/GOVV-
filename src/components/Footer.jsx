import React from "react";
import Section from "./Section";
import { socials, footer } from "../constants";
import { motion } from "framer-motion";
import { components, classes, animations } from "../../design-system.js";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10 bg-slate-900">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <motion.div
          initial={animations.entrance.up.initial}
          animate={animations.entrance.up.animate}
          transition={{ ...animations.entrance.up.transition, delay: 0.2 }}
        >
          <p className="caption text-light-4 lg:block">
            © {new Date().getFullYear()} {footer.company.name}. All rights reserved.
          </p>
          <p className="caption text-light-4 lg:block mt-2">
            {footer.company.description}
          </p>
        </motion.div>

        <motion.ul 
          className="flex gap-5 flex-wrap"
          initial={animations.entrance.up.initial}
          animate={animations.entrance.up.animate}
          transition={{ ...animations.entrance.up.transition, delay: 0.4 }}
        >
          {socials.map((item, index) => (
            <motion.a
              key={item.id}
              href={item.url}
              target="_blank"
              className={`flex items-center justify-center w-10 h-10 bg-slate-800/50 rounded-full transition-colors hover:bg-slate-700`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={animations.hover.lift}
            >
              <img src={item.iconUrl} width={16} height={16} alt={item.title} />
            </motion.a>
          ))}
        </motion.ul>
      </div>
    </Section>
  );
};

export default Footer;
