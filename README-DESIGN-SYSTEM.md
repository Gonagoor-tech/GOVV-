# 🎨 GOVV Design System

A comprehensive design system for creating stunning landing pages with modern animations, glassmorphism effects, and beautiful gradients.

## 📦 Installation

```bash
npm install framer-motion lucide-react
```

## 🚀 Quick Start

```javascript
import { backgrounds, components, animations, classes } from './govv-design-system.js';
import { motion } from 'framer-motion';
import { Star, Zap, ArrowRight } from 'lucide-react';

const MyLandingPage = () => {
  return (
    <section className={backgrounds.main}>
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className={animatedOrbs.orb1.className}
          animate={animatedOrbs.orb1.animation}
        />
        <motion.div
          className={animatedOrbs.orb2.className}
          animate={animatedOrbs.orb2.animation}
        />
      </div>

      {/* Your content here */}
    </section>
  );
};
```

## 🎯 Key Features

### ✨ Background Styles
- **Main Background**: Dark gradient with purple/blue tones
- **Animated Orbs**: Floating background elements
- **Glassmorphism**: Translucent glass effects

### 🎭 Animations
- **Entrance Animations**: Slide in from left/right
- **Floating Animations**: Gentle up/down movement
- **Hover Effects**: Scale, lift, and slide animations

### 🧩 Components
- **Badge**: Animated status indicators
- **Feature Cards**: Interactive info cards
- **Buttons**: Primary and secondary styles
- **Stats**: Social proof displays

## 📋 Available Components

### Backgrounds
```javascript
backgrounds.main          // Main dark gradient background
backgrounds.glass         // Glassmorphism effect
backgrounds.gradientBlue  // Blue gradient
backgrounds.gradientPurple // Purple gradient
backgrounds.gradientGreen // Green gradient
backgrounds.gradientText  // Gradient text effect
```

### Animated Orbs
```javascript
animatedOrbs.orb1        // Top-left floating orb
animatedOrbs.orb2        // Bottom-right floating orb
```

### Layout
```javascript
layout.container          // Main container
layout.twoColumn         // Two-column grid
layout.threeColumn       // Three-column grid
layout.responsive        // Responsive flex layout
layout.spacing           // Vertical spacing
```

### Components
```javascript
components.badge          // Animated badge
components.heading        // Main heading styles
components.paragraph      // Paragraph styles
components.featureCard    // Feature card
components.button         // Button styles
components.stats          // Stats section
```

### Animations
```javascript
animations.entrance.left  // Slide in from left
animations.entrance.right // Slide in from right
animations.entrance.up    // Slide in from bottom
animations.floating.gentle // Gentle floating
animations.hover.scale    // Scale on hover
animations.hover.lift     // Lift on hover
```

### Classes
```javascript
classes.text.white        // White text
classes.text.gray200      // Light gray text
classes.text.gray300      // Medium gray text
classes.text.gray400      // Dark gray text
classes.text.blue300      // Blue text
classes.borders.white     // White border
classes.borders.blue      // Blue border
classes.sizes.icon        // Icon size
classes.sizes.iconLarge   // Large icon size
classes.layout.flexCenter // Centered flex
classes.layout.flexBetween // Space between flex
```

## 🎨 Complete Examples

### Full Landing Page Template
```javascript
import { templates } from './govv-design-system.js';

// Use the complete landing page template
const LandingPage = () => {
  return (
    <div dangerouslySetInnerHTML={{ __html: templates.landingPage }} />
  );
};
```

### Feature Card
```javascript
import { templates } from './govv-design-system.js';

const FeatureCard = () => {
  return (
    <div dangerouslySetInnerHTML={{ __html: templates.featureCard }} />
  );
};
```

### Button
```javascript
import { templates } from './govv-design-system.js';

const Button = () => {
  return (
    <div dangerouslySetInnerHTML={{ __html: templates.button }} />
  );
};
```

## 🎯 Usage Examples

### Creating a Badge
```javascript
import { components, classes } from './govv-design-system.js';
import { Star } from 'lucide-react';

const Badge = () => (
  <motion.div
    className={components.badge.className}
    initial={components.badge.animation.initial}
    animate={components.badge.animation.animate}
    transition={components.badge.animation.transition}
  >
    <Star className={classes.sizes.icon} />
    <span>Your Badge Text</span>
  </motion.div>
);
```

### Creating a Feature Card
```javascript
import { components, classes } from './govv-design-system.js';
import { Zap } from 'lucide-react';

const FeatureCard = () => (
  <motion.div 
    className={components.featureCard.className}
    whileHover={components.featureCard.hover}
  >
    <div className={classes.layout.flexBetween}>
      <div className={components.featureCard.icon.blue}>
        <Zap className={`${classes.sizes.icon} text-white`} />
      </div>
      <div>
        <h3 className={`${classes.text.white} font-semibold`}>Feature Title</h3>
        <p className={`${classes.text.gray400} text-sm`}>Feature description</p>
      </div>
    </div>
  </motion.div>
);
```

### Creating a Button
```javascript
import { components, classes } from './govv-design-system.js';
import { ArrowRight } from 'lucide-react';

const Button = () => (
  <motion.button
    className={components.button.primary.className}
    whileHover={components.button.primary.hover}
  >
    <span className="relative z-10 flex items-center gap-2">
      Click Me
      <ArrowRight className={`${classes.sizes.icon} group-hover:translate-x-1 transition-transform`} />
    </span>
  </motion.button>
);
```

## 🎨 Customization

### Changing Colors
```javascript
// Modify the background gradients
backgrounds.main = 'relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 overflow-hidden';

// Modify component colors
components.featureCard.icon.blue = 'w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center';
```

### Adding New Animations
```javascript
// Add custom animation
animations.custom = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 }
};
```

### Creating New Components
```javascript
// Add new component
components.customCard = {
  className: 'bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20',
  hover: { scale: 1.02, y: -2 }
};
```

## 📱 Responsive Design

All components are built with responsive design in mind:

- **Mobile**: Single column layout
- **Tablet**: Adaptive grid layouts
- **Desktop**: Full two-column layout

## 🎯 Best Practices

1. **Use the design system consistently** across your project
2. **Import only what you need** to keep bundle size small
3. **Customize colors and animations** to match your brand
4. **Test on different devices** to ensure responsiveness
5. **Use semantic HTML** for accessibility

## 🔧 Dependencies

- **framer-motion**: For animations
- **lucide-react**: For icons
- **tailwindcss**: For styling (already included)

## 📄 License

This design system is part of the GOVV project and can be used freely for educational and commercial purposes.

---

**Happy designing! 🎨✨** 