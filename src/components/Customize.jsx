import React, { useState } from "react";
import { motion } from "framer-motion";
import Section from "./Section";
import Heading from "./Heading";
import { components, classes, animations } from "../../design-system.js";
import { 
  Palette, 
  Settings, 
  Zap, 
  Shield, 
  Bike, 
  Smartphone,
  CheckCircle,
  Star
} from "lucide-react";

const Customize = () => {
  const [selectedColor, setSelectedColor] = useState("black");
  const [selectedAccessories, setSelectedAccessories] = useState([]);

  const colors = [
    { name: "Black", value: "black", hex: "#000000" },
    { name: "White", value: "white", hex: "#FFFFFF" },
    { name: "Blue", value: "blue", hex: "#3B82F6" },
    { name: "Red", value: "red", hex: "#EF4444" },
    { name: "Green", value: "green", hex: "#10B981" },
    { name: "Purple", value: "purple", hex: "#8B5CF6" },
  ];

  const accessories = [
    {
      id: "basket",
      name: "Front Basket",
      description: "Perfect for carrying books and essentials",
      price: "₹2,500",
      icon: Bike,
      popular: false
    },
    {
      id: "lock",
      name: "Smart Lock",
      description: "Advanced security with mobile app control",
      price: "₹5,000",
      icon: Shield,
      popular: true
    },
    {
      id: "light",
      name: "LED Headlight",
      description: "Bright LED lighting for night rides",
      price: "₹3,500",
      icon: Zap,
      popular: false
    },
    {
      id: "phone",
      name: "Phone Mount",
      description: "Secure phone holder for navigation",
      price: "₹1,500",
      icon: Smartphone,
      popular: false
    },
    {
      id: "bell",
      name: "Smart Bell",
      description: "Electronic bell with multiple sounds",
      price: "₹2,000",
      icon: Settings,
      popular: false
    },
    {
      id: "reflector",
      name: "Safety Reflectors",
      description: "Enhanced visibility package",
      price: "₹1,000",
      icon: Star,
      popular: false
    }
  ];

  const toggleAccessory = (accessoryId) => {
    setSelectedAccessories(prev => 
      prev.includes(accessoryId) 
        ? prev.filter(id => id !== accessoryId)
        : [...prev, accessoryId]
    );
  };

  const totalPrice = selectedAccessories.reduce((total, accessoryId) => {
    const accessory = accessories.find(a => a.id === accessoryId);
    return total + parseInt(accessory.price.replace("₹", "").replace(",", ""));
  }, 0);

  return (
    <Section id="customize" className="bg-slate-900">
      <div className="container">
        <motion.div
          initial={components.heading.main.animation.initial}
          animate={components.heading.main.animation.animate}
          transition={components.heading.main.animation.transition}
        >
          <Heading
            title="Customize Your Ride"
            text="Personalize your Go VV with colors and accessories that match your style"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mt-16">
          {/* Color Selection */}
          <motion.div
            initial={animations.entrance.left.initial}
            animate={animations.entrance.left.animate}
            transition={animations.entrance.left.transition}
            className="space-y-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Choose Your Color</h3>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {colors.map((color) => (
                <motion.button
                  key={color.value}
                  onClick={() => setSelectedColor(color.value)}
                  className={`relative p-6 rounded-2xl border-2 transition-all duration-300 ${
                    selectedColor === color.value
                      ? "border-purple-400 scale-105"
                      : "border-gray-600 hover:border-gray-500"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div 
                    className="w-full h-16 rounded-xl mb-3"
                    style={{ backgroundColor: color.hex }}
                  />
                  <span className="text-white font-medium">{color.name}</span>
                  {selectedColor === color.value && (
                    <motion.div
                      className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <CheckCircle className="w-4 h-4 text-white" />
                    </motion.div>
                  )}
                </motion.button>
              ))}
            </div>

            {/* Preview */}
            <motion.div
              className="mt-8 p-6 bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl border border-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h4 className="text-white font-semibold mb-4">Your Custom Bike</h4>
              <div className="flex items-center gap-4">
                <div 
                  className="w-16 h-16 rounded-full border-2 border-gray-500"
                  style={{ backgroundColor: colors.find(c => c.value === selectedColor)?.hex }}
                />
                <div>
                  <p className="text-white font-medium">Go VV Campus Rider</p>
                  <p className="text-gray-400 text-sm">
                    Color: {colors.find(c => c.value === selectedColor)?.name}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Accessories Selection */}
          <motion.div
            initial={animations.entrance.right.initial}
            animate={animations.entrance.right.animate}
            transition={animations.entrance.right.transition}
            className="space-y-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Add Accessories</h3>
            </div>

            <div className="grid gap-4 max-h-96 overflow-y-auto">
              {accessories.map((accessory) => (
                <motion.div
                  key={accessory.id}
                  className={`relative p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                    selectedAccessories.includes(accessory.id)
                      ? "border-blue-400 bg-blue-500/10"
                      : "border-gray-600 hover:border-gray-500 bg-slate-800/50"
                  }`}
                  onClick={() => toggleAccessory(accessory.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl ${
                        selectedAccessories.includes(accessory.id)
                          ? "bg-blue-500"
                          : "bg-gray-600"
                      }`}>
                        <accessory.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-white font-semibold">{accessory.name}</h4>
                          {accessory.popular && (
                            <span className="px-2 py-1 bg-yellow-500 text-black text-xs font-bold rounded-full">
                              POPULAR
                            </span>
                          )}
                        </div>
                        <p className="text-gray-400 text-sm">{accessory.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-bold">{accessory.price}</p>
                      {selectedAccessories.includes(accessory.id) && (
                        <motion.div
                          className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-2"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 200 }}
                        >
                          <CheckCircle className="w-3 h-3 text-white" />
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Total */}
            <motion.div
              className="mt-8 p-6 bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-500/20 rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-white font-semibold">Total Accessories</h4>
                  <p className="text-gray-400 text-sm">
                    {selectedAccessories.length} items selected
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-green-400">
                    ₹{totalPrice.toLocaleString()}
                  </p>
                  <p className="text-gray-400 text-sm">Additional cost</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Order Your Custom Bike
          </motion.button>
        </motion.div>
      </div>
    </Section>
  );
};

export default Customize; 