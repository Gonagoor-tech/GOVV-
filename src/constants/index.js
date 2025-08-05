import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

// Import GoVV content
import { navigation as govvNavigation, hero, features, stats, about, products, services, testimonials, faq, contact, footer, meta } from "../../content.js";

// Updated navigation with new menu items
export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "#hero",
  },
  {
    id: "1",
    title: "Our Bikes",
    url: "#roadmap",
  },
  {
    id: "2",
    title: "Technology",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "About",
    url: "#collaboration",
  },
  {
    id: "4",
    title: "Blog",
    url: "#blog",
  },
  {
    id: "5",
    title: "Customize",
    url: "#customize",
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

// Convert features to services format
export const govvServices = features.map(feature => feature.title);

export const govvServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

// Convert products to roadmap format
export const roadmap = products.map((product, index) => ({
  id: index.toString(),
  title: product.name,
  text: product.description,
  date: "2024",
  status: product.popular ? "done" : "progress",
  imageUrl: index === 0 ? roadmap1 : index === 1 ? roadmap2 : index === 2 ? roadmap3 : roadmap4,
  colorful: product.popular,
}));

export const collabText = about.content;

export const collabContent = [
  {
    id: "0",
    title: "About Go VV",
    text: collabText,
  },
  {
    id: "1",
    title: "Student-Focused",
  },
  {
    id: "2",
    title: "Eco-Friendly",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Universities",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Tech Parks",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Campuses",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Institutions",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Corporate",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Urban Areas",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Peri-urban",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Smart Cities",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

// Convert products to pricing format
export const pricing = products.map((product, index) => ({
  id: index.toString(),
  title: product.name,
  description: product.category,
  price: product.price,
  features: product.features,
}));

// Convert services to benefits format
export const benefits = services.map((service, index) => ({
  id: index.toString(),
  title: service.title,
  text: service.description,
  backgroundUrl: `./src/assets/benefits/card-${(index % 6) + 1}.svg`,
  iconUrl: index === 0 ? benefitIcon1 : index === 1 ? benefitIcon2 : index === 2 ? benefitIcon3 : benefitIcon4,
  imageUrl: benefitImage2,
  light: index % 2 === 1,
}));

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];

// Export GoVV specific content
export { hero, features, stats, about, products, services, testimonials, faq, contact, footer, meta };
