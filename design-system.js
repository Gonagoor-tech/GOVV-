// ========================================
// GOVV DESIGN SYSTEM
// ========================================
// This file contains all the reusable styles, animations, and design tokens
// for the GoVV electric vehicle landing page design system.

// ========================================
// COLOR PALETTE
// ========================================
export const colors = {
  // Primary Colors
  primary: {
    blue: '#3B82F6',      // Blue-500
    purple: '#8B5CF6',    // Purple-500
    pink: '#EC4899',      // Pink-500
    green: '#10B981',     // Green-500
  },
  
  // Background Gradients
  gradients: {
    primary: 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900',
    blue: 'bg-gradient-to-r from-blue-500 to-purple-500',
    purple: 'bg-gradient-to-r from-purple-500 to-pink-500',
    green: 'bg-gradient-to-r from-green-500 to-blue-500',
    text: 'bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400',
  },
  
  // Text Colors - Updated for dark backgrounds
  text: {
    white: 'text-white',
    gray: {
      200: 'text-gray-200',
      300: 'text-gray-300',
      400: 'text-gray-400',
    },
    blue: {
      300: 'text-blue-300',
    },
  },
  
  // Border Colors
  border: {
    white: 'border-white/20',
    blue: 'border-blue-500/30',
    purple: 'border-purple-400/30',
  }
};

// ========================================
// BACKGROUND STYLES
// ========================================
export const backgrounds = {
  // Main Background
  main: 'relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden',
  
  // Animated Background Orbs
  animatedOrbs: {
    container: 'absolute inset-0',
    orb1: {
      className: 'absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl',
      animation: {
        x: [0, 100, 0],
        y: [0, -50, 0],
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    orb2: {
      className: 'absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl',
      animation: {
        x: [0, -100, 0],
        y: [0, 50, 0],
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  },
  
  // Glassmorphism Effects
  glassmorphism: {
    light: 'bg-white/10 backdrop-blur-md',
    medium: 'bg-white/20 backdrop-blur-md',
    dark: 'bg-white/5 backdrop-blur-sm',
  }
};

// ========================================
// LAYOUT CLASSES
// ========================================
export const layout = {
  // Container
  container: 'relative z-10 container mx-auto px-4 py-20',
  
  // Grid Layouts
  grid: {
    twoColumn: 'grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]',
    threeColumn: 'grid grid-cols-1 sm:grid-cols-3 gap-4',
    responsive: 'flex flex-col sm:flex-row gap-4',
  },
  
  // Spacing
  spacing: {
    section: 'space-y-8',
    card: 'p-4',
    button: 'px-8 py-4',
    stats: 'gap-8 pt-8',
  }
};

// ========================================
// COMPONENT STYLES
// ========================================
export const components = {
  // Badge Component
  badge: {
    className: 'inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-4 py-2 text-blue-300 text-sm font-medium',
    animation: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: 0.2 }
    }
  },
  
  // Heading Styles - Updated for dark backgrounds
  heading: {
    main: {
      className: 'text-5xl lg:text-7xl font-bold text-white leading-tight',
      animation: {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.4 }
      }
    },
    gradient: 'bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent',
    subtitle: 'text-4xl lg:text-5xl text-gray-200',
  },
  
  // Paragraph Styles - Updated for dark backgrounds
  paragraph: {
    className: 'text-xl text-gray-300 leading-relaxed max-w-lg',
    animation: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: 0.6 }
    }
  },
  
  // Feature Cards - Updated for dark backgrounds
  featureCard: {
    className: 'bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300',
    hover: { scale: 1.05, y: -5 },
    icon: {
      blue: 'w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center',
      purple: 'w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center',
      green: 'w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center',
    }
  },
  
  // Buttons - Updated for dark backgrounds
  button: {
    primary: {
      className: 'group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg overflow-hidden',
      hover: { scale: 1.05 }
    },
    secondary: {
      className: 'group flex items-center gap-3 text-white hover:text-blue-300 transition-colors',
      hover: { x: 5 }
    },
    icon: 'w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20',
  },
  
  // Stats Section - Updated for dark backgrounds
  stats: {
    container: 'flex items-center gap-8 pt-8 border-t border-white/10',
    item: 'text-center',
    number: 'text-2xl font-bold text-white',
    label: 'text-gray-400 text-sm',
    animation: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: 1.2 }
    }
  }
};

// ========================================
// ANIMATION CONFIGURATIONS
// ========================================
export const animations = {
  // Entrance Animations
  entrance: {
    left: {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.8 }
    },
    right: {
      initial: { opacity: 0, x: 50 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.8, delay: 0.3 }
    },
    up: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: 0.8 }
    }
  },
  
  // Floating Animations
  floating: {
    gentle: {
      animate: { y: [-10, 10, -10] },
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
    },
    orb1: {
      animate: {
        x: [0, 100, 0],
        y: [0, -50, 0],
      },
      transition: { duration: 8, repeat: Infinity, ease: "easeInOut" }
    },
    orb2: {
      animate: {
        x: [0, -100, 0],
        y: [0, 50, 0],
      },
      transition: { duration: 10, repeat: Infinity, ease: "easeInOut" }
    }
  },
  
  // Hover Animations
  hover: {
    scale: { scale: 1.05 },
    lift: { scale: 1.05, y: -5 },
    slide: { x: 5 },
    spring: { type: "spring", stiffness: 300 }
  }
};

// ========================================
// REUSABLE CLASSES
// ========================================
export const classes = {
  // Background Classes
  backgrounds: {
    main: 'relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden',
    glass: 'bg-white/10 backdrop-blur-md',
    glassDark: 'bg-white/5 backdrop-blur-sm',
    gradientBlue: 'bg-gradient-to-r from-blue-500 to-purple-500',
    gradientPurple: 'bg-gradient-to-r from-purple-500 to-pink-500',
    gradientGreen: 'bg-gradient-to-r from-green-500 to-blue-500',
  },
  
  // Text Classes
  text: {
    gradient: 'bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent',
    white: 'text-white',
    gray200: 'text-gray-200',
    gray300: 'text-gray-300',
    gray400: 'text-gray-400',
    blue300: 'text-blue-300',
  },
  
  // Border Classes
  borders: {
    white: 'border border-white/20',
    blue: 'border border-blue-500/30',
    purple: 'border border-purple-400/30',
  },
  
  // Spacing Classes
  spacing: {
    section: 'space-y-8',
    card: 'p-4',
    button: 'px-8 py-4',
    stats: 'gap-8 pt-8',
  },
  
  // Size Classes
  sizes: {
    icon: 'w-5 h-5',
    iconLarge: 'w-10 h-10',
    iconContainer: 'w-12 h-12',
    image: 'w-80 h-80',
  },
  
  // Layout Classes
  layout: {
    flexCenter: 'flex items-center justify-center',
    flexBetween: 'flex items-center gap-3',
    gridTwo: 'grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]',
    gridThree: 'grid grid-cols-1 sm:grid-cols-3 gap-4',
    responsive: 'flex flex-col sm:flex-row gap-4',
  }
};

// ========================================
// COMPLETE COMPONENT TEMPLATES
// ========================================
export const templates = {
  // Complete Landing Page Structure
  landingPage: `
    <section className="${classes.backgrounds.main}">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="${backgrounds.animatedOrbs.orb1.className}"
          animate={${JSON.stringify(backgrounds.animatedOrbs.orb1.animation)}}
        />
        <motion.div
          className="${backgrounds.animatedOrbs.orb2.className}"
          animate={${JSON.stringify(backgrounds.animatedOrbs.orb2.animation)}}
        />
      </div>

      {/* Main Content */}
      <div className="${layout.container}">
        <div className="${layout.grid.twoColumn}">
          {/* Left Column - Content */}
          <motion.div 
            className="${layout.spacing.section}"
            initial={${JSON.stringify(animations.entrance.left.initial)}}
            animate={${JSON.stringify(animations.entrance.left.animate)}}
            transition={${JSON.stringify(animations.entrance.left.transition)}}
          >
            {/* Add your content here */}
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div 
            className="relative"
            initial={${JSON.stringify(animations.entrance.right.initial)}}
            animate={${JSON.stringify(animations.entrance.right.animate)}}
            transition={${JSON.stringify(animations.entrance.right.transition)}}
          >
            {/* Add your visual content here */}
          </motion.div>
        </div>
      </div>
    </section>
  `,
  
  // Feature Card Template
  featureCard: `
    <motion.div 
      className="${components.featureCard.className}"
      whileHover={${JSON.stringify(components.featureCard.hover)}}
    >
      <div className="${classes.layout.flexBetween}">
        <div className="${components.featureCard.icon.blue}">
          <Icon className="${classes.sizes.icon} text-white" />
        </div>
        <div>
          <h3 className="${classes.text.white} font-semibold">Title</h3>
          <p className="${classes.text.gray400} text-sm">Description</p>
        </div>
      </div>
    </motion.div>
  `,
  
  // Button Template
  button: `
    <motion.button
      className="${components.button.primary.className}"
      whileHover={${JSON.stringify(components.button.primary.hover)}}
    >
      <span className="relative z-10 flex items-center gap-2">
        Button Text
        <ArrowRight className="${classes.sizes.icon} group-hover:translate-x-1 transition-transform" />
      </span>
    </motion.button>
  `
};

// ========================================
// USAGE EXAMPLES
// ========================================
export const examples = {
  // How to use the design system
  usage: `
    // Import the design system
    import { colors, backgrounds, components, animations, classes } from './design-system.js';
    
    // Use in your component
    const MyComponent = () => {
      return (
        <section className={classes.backgrounds.main}>
          <motion.div
            className={components.badge.className}
            initial={components.badge.animation.initial}
            animate={components.badge.animation.animate}
            transition={components.badge.animation.transition}
          >
            <Star className={classes.sizes.icon} />
            <span>Your Badge Text</span>
          </motion.div>
        </section>
      );
    };
  `
};

// ========================================
// EXPORT ALL
// ========================================
export default {
  colors,
  backgrounds,
  layout,
  components,
  animations,
  classes,
  templates,
  examples
}; 