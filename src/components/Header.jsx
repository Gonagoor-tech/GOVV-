import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import { govv } from "../assets";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { components, classes, animations } from "../../design-system.js";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  // Transform values for scroll-based effects - more subtle
  const headerHeight = useTransform(scrollY, [0, 100], [70, 60]);
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.98]);
  const headerY = useTransform(scrollY, [0, 100], [0, -5]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = (url) => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
    
    // Handle navigation
    if (url === "#hero") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(url);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleNavClick = (url) => {
    if (url === "#hero") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(url);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 border-b border-gray-700 bg-slate-900/95 backdrop-blur-md transition-all duration-300 ${
        openNavigation ? "bg-slate-900" : "bg-slate-900/95 backdrop-blur-md"
      } ${isScrolled ? 'py-2' : 'py-3'}`}
      style={{
        height: headerHeight,
        opacity: headerOpacity,
        y: headerY,
        minHeight: '60px',
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex items-center justify-between px-6 lg:px-8 xl:px-10 h-full">
        {/* Logo */}
        <motion.a 
          className="flex-shrink-0 cursor-pointer" 
          onClick={() => handleNavClick("#hero")}
          whileHover={{ scale: 1.05 }}
          style={{
            transform: isScrolled ? 'scale(0.95)' : 'scale(1)',
          }}
        >
          <img src={govv} width={isScrolled ? 150 : 170} height={isScrolled ? 30 : 35} alt="Go VV" />
        </motion.a>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
          {navigation.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => handleNavClick(item.url)}
              className={`font-code text-sm uppercase font-medium transition-all duration-200 hover:text-blue-400 cursor-pointer ${
                item.url === pathname.hash || item.url === window.location.hash
                  ? "text-white font-semibold"
                  : "text-gray-300"
              } hover:text-white`}
              initial={animations.entrance.left.initial}
              animate={animations.entrance.left.animate}
              transition={{ ...animations.entrance.left.transition, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              style={{
                fontSize: isScrolled ? '0.8rem' : '0.9rem',
              }}
            >
              {item.title}
            </motion.button>
          ))}
        </nav>

        {/* Right side buttons */}
        <div className="flex items-center space-x-4 flex-shrink-0">
          <motion.button
            onClick={() => handleNavClick("#contact")}
            className="hidden lg:block text-gray-300 transition-colors hover:text-white font-medium cursor-pointer"
            whileHover={{ scale: 1.02 }}
            style={{
              fontSize: isScrolled ? '0.8rem' : '0.9rem',
            }}
          >
            Contact Us
          </motion.button>
          <Button className="hidden lg:flex" onClick={() => handleNavClick("#pricing")} style={{
            padding: isScrolled ? '0.4rem 0.8rem' : '0.6rem 1.2rem',
            fontSize: isScrolled ? '0.8rem' : '0.9rem',
          }}>
            Get Started
          </Button>
        </div>

        {/* Mobile menu button */}
        <Button
          className="lg:hidden flex-shrink-0"
          px="px-3"
          onClick={toggleNavigation}
          style={{
            padding: isScrolled ? '0.4rem 0.6rem' : '0.6rem 0.8rem',
          }}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>

        {/* Mobile Navigation Overlay */}
        {openNavigation && (
          <div className="fixed inset-0 top-[4rem] bg-slate-900 lg:hidden z-40">
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navigation.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleClick(item.url)}
                  className="font-code text-2xl uppercase text-white transition-colors hover:text-blue-400 cursor-pointer"
                  initial={animations.entrance.left.initial}
                  animate={animations.entrance.left.animate}
                  transition={{ ...animations.entrance.left.transition, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {item.title}
                </motion.button>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
