# 📝 GOVV Website Content

A comprehensive content management file for the GoVV website containing all text, messaging, and content structure.

## 📁 Files Created

### `content.js` - Main Content File
This file contains all the website content organized into logical sections:

## 🎯 Content Sections

### **Brand Information**
```javascript
brand.name = "Go VV"
brand.tagline = "Electrifying Your Campus Commute"
brand.description = "Revolutionary electric vehicles designed for modern campus transportation"
```

### **Hero Section**
```javascript
hero.badge = "Revolutionary Campus Mobility"
hero.heading.main = "Go VV"
hero.heading.subtitle = "Electrifying Your"
hero.heading.subtitle2 = "Campus Commute"
hero.description = "Experience the future of campus transportation..."
hero.cta.primary = "Start Your Journey"
hero.cta.secondary = "Watch Demo"
```

### **Features**
```javascript
features = [
  {
    icon: "Zap",
    title: "36V Power",
    description: "Li-ion Battery",
    color: "blue"
  },
  // ... more features
]
```

### **Stats**
```javascript
stats = [
  {
    number: "500+",
    label: "Happy Students"
  },
  // ... more stats
]
```

### **About Section**
```javascript
about = {
  title: "About Go VV",
  subtitle: "Revolutionizing Campus Transportation",
  content: "Go VV was born from a simple idea...",
  highlights: [
    "Founded by students, for students",
    "Eco-friendly transportation solutions",
    // ... more highlights
  ]
}
```

### **Products**
```javascript
products = [
  {
    name: "Go VV Campus",
    category: "Standard Model",
    price: "$1,299",
    features: [
      "36V Li-ion Battery",
      "25 km/h Top Speed",
      // ... more features
    ],
    description: "Perfect for daily campus commuting..."
  },
  // ... more products
]
```

### **Services**
```javascript
services = [
  {
    icon: "Truck",
    title: "Free Delivery",
    description: "We deliver your Go VV directly to your campus"
  },
  // ... more services
]
```

### **Testimonials**
```javascript
testimonials = [
  {
    name: "Sarah Chen",
    university: "MIT",
    content: "Go VV has completely changed my campus experience..."
  },
  // ... more testimonials
]
```

### **FAQ**
```javascript
faq = [
  {
    question: "How long does the battery last?",
    answer: "The battery life depends on the model..."
  },
  // ... more FAQs
]
```

### **Contact Information**
```javascript
contact = {
  title: "Get in Touch",
  subtitle: "We're here to help",
  info: {
    email: "hello@govv.com",
    phone: "+1 (555) 123-4567",
    address: "123 Innovation Drive, Tech City, TC 12345"
  }
}
```

### **Footer**
```javascript
footer = {
  company: {
    name: "Go VV",
    description: "Revolutionizing campus mobility..."
  },
  links: {
    products: ["Go VV Campus", "Go VV Pro", "Go VV Lite", "Accessories"],
    support: ["Help Center", "Warranty", "Service Centers", "Contact Us"],
    company: ["About Us", "Careers", "Press", "Partnerships"],
    legal: ["Privacy Policy", "Terms of Service", "Warranty Terms", "Safety Information"]
  }
}
```

### **Navigation**
```javascript
navigation = {
  main: [
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Support", href: "/support" },
    { name: "Contact", href: "/contact" }
  ]
}
```

### **Meta Information**
```javascript
meta = {
  title: "Go VV - Electrifying Your Campus Commute",
  description: "Revolutionary electric vehicles designed for modern campus transportation..."
}
```

## 🚀 Usage Examples

### **Importing Content**
```javascript
import { hero, features, products, contact } from './content.js';

// Use in your component
const MyComponent = () => {
  return (
    <div>
      <h1>{hero.heading.main}</h1>
      <p>{hero.description}</p>
      <button>{hero.cta.primary}</button>
    </div>
  );
};
```

### **Using Features**
```javascript
import { features } from './content.js';

const FeaturesSection = () => {
  return (
    <div>
      {features.map((feature, index) => (
        <div key={index}>
          <Icon name={feature.icon} />
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  );
};
```

### **Using Products**
```javascript
import { products } from './content.js';

const ProductsSection = () => {
  return (
    <div>
      {products.map((product, index) => (
        <div key={index}>
          <h3>{product.name}</h3>
          <p>{product.category}</p>
          <p>{product.price}</p>
          <ul>
            {product.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
};
```

### **Using Testimonials**
```javascript
import { testimonials } from './content.js';

const TestimonialsSection = () => {
  return (
    <div>
      {testimonials.map((testimonial, index) => (
        <div key={index}>
          <p>{testimonial.content}</p>
          <h4>{testimonial.name}</h4>
          <p>{testimonial.university}</p>
        </div>
      ))}
    </div>
  );
};
```

## 🎨 Content Management Benefits

### **Easy Updates**
- Change any text without touching component code
- Update pricing, features, or descriptions in one place
- Maintain consistency across the website

### **Localization Ready**
- Easy to translate content to different languages
- Separate content from presentation
- Support for multiple language versions

### **SEO Optimization**
- Centralized meta information
- Easy to update titles and descriptions
- Consistent messaging across pages

### **A/B Testing**
- Easy to test different content versions
- Quick content swaps for testing
- Track performance of different messaging

## 📋 Content Structure

The content is organized into logical sections:

1. **Brand** - Core brand information
2. **Hero** - Main landing page content
3. **Features** - Product features and benefits
4. **Stats** - Social proof and numbers
5. **About** - Company information
6. **Products** - Product catalog
7. **Services** - Service offerings
8. **Testimonials** - Customer reviews
9. **FAQ** - Frequently asked questions
10. **Contact** - Contact information
11. **Footer** - Footer links and information
12. **Navigation** - Menu structure
13. **Meta** - SEO and meta information

## 🔧 Customization

### **Adding New Content**
```javascript
// Add new section
export const newSection = {
  title: "New Section",
  content: "Your content here"
};

// Add to default export
export default {
  // ... existing exports
  newSection
};
```

### **Modifying Existing Content**
```javascript
// Update any content easily
hero.description = "Updated description here";
products[0].price = "$1,199"; // Update price
features[0].title = "Updated Feature"; // Update feature
```

### **Adding New Products**
```javascript
products.push({
  name: "Go VV Ultra",
  category: "Premium Plus Model",
  price: "$1,999",
  features: [
    "60V Li-ion Battery",
    "35 km/h Top Speed",
    "80km Range"
  ],
  description: "Ultimate campus mobility solution"
});
```

## 📱 Content for Different Pages

### **Homepage**
- Hero section
- Features
- Stats
- Testimonials

### **Products Page**
- Product catalog
- Product details
- Pricing information

### **About Page**
- Company information
- Mission and vision
- Team information

### **Contact Page**
- Contact information
- Support details
- Office locations

### **Support Page**
- FAQ section
- Help resources
- Service information

## 🎯 Best Practices

1. **Keep content organized** - Use clear section names
2. **Update regularly** - Keep information current
3. **Test content** - A/B test different messaging
4. **Localize when needed** - Prepare for multiple languages
5. **Optimize for SEO** - Use relevant keywords
6. **Maintain consistency** - Keep brand voice consistent

## 📄 License

This content is part of the GOVV project and can be used freely for educational and commercial purposes.

---

**Happy content managing! 📝✨** 