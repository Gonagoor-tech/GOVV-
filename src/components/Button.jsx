import ButtonSvg from "../assets/svg/ButtonSvg";
import { motion } from "framer-motion";
import { components, classes, animations } from "../../design-system.js";

const Button = ({ className, href, onClick, children, px, white }) => {
  const buttonClasses = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || "px-7"
  } ${white ? "text-white" : "text-white"} ${className || ""}`;
  const spanClasses = "relative z-10";

  const renderButton = () => (
    <motion.button 
      className={buttonClasses} 
      onClick={onClick}
      whileHover={animations.hover.scale}
      transition={animations.hover.spring}
    >
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </motion.button>
  );

  const renderLink = () => (
    <motion.a 
      href={href} 
      className={buttonClasses}
      whileHover={animations.hover.scale}
      transition={animations.hover.spring}
    >
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </motion.a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
