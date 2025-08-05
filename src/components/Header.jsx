import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import { govv } from "../assets";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";
import { motion } from "framer-motion";
import { components, classes, animations } from "../../design-system.js";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <motion.div
      className={`fixed top-0 left-0 w-full z-50 border-b ${classes.borders.white} bg-slate-900/90 backdrop-blur-sm ${
        openNavigation ? "bg-slate-900" : "bg-slate-900/90 backdrop-blur-sm"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <motion.a 
          className="block w-[12rem] xl:mr-8" 
          href="#hero"
          whileHover={{ scale: 1.05 }}
        >
          <img src={govv} width={190} height={40} alt="Go VV" />
        </motion.a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-slate-900 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item, index) => (
              <motion.a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-light-1 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-light-1"
                    : "lg:text-light-1/50"
                } lg:leading-5 lg:hover:text-light-1 xl:px-12`}
                initial={animations.entrance.left.initial}
                animate={animations.entrance.left.animate}
                transition={{ ...animations.entrance.left.transition, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {item.title}
              </motion.a>
            ))}
          </div>

          <HamburgerMenu />
        </nav>

        <motion.a
          href="#contact"
          className={`button hidden mr-8 ${classes.text.gray400} transition-colors hover:${classes.text.white} lg:block`}
          whileHover={{ scale: 1.05 }}
        >
          Contact Us
        </motion.a>
        <Button className="hidden lg:flex" href="#pricing">
          Get Started
        </Button>

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </motion.div>
  );
};

export default Header;
