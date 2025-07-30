import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Technology = (): JSX.Element => {
  // Navigation menu items - left side
  const leftNavItems = [
    { text: "Home" },
    { text: "Our Bikes" },
    { text: "Technology" },
  ];

  // Navigation menu items - right side
  const rightNavItems = [
    { text: "About" },
    { text: "Blog" },
    { text: "Customize" },
  ];

  // Technology features data
  const features = [
    {
      title: "Swappable Battery Pack",
      description: "Revolutionary hot-swappable battery system that lets you change batteries in seconds. Never worry about running out of power again.",
      specs: [
        "Hot-swappable in under 30 seconds",
        "Lithium-ion cells with 1000+ cycles",
        "Smart battery management system",
        "Compatible across all Go VV models"
      ]
    },
    {
      title: "Smart Lock & GPS Tracking",
      description: "Advanced security system with real-time GPS tracking and smartphone-controlled smart lock for ultimate peace of mind.",
      specs: [
        "Real-time GPS location tracking",
        "Smartphone app integration",
        "Anti-theft alarm system",
        "Geofencing alerts"
      ]
    },
    {
      title: "Companion Mobile App",
      description: "Control and monitor your Go VV bike with our intuitive mobile app. Track rides, find charging stations, and customize settings.",
      specs: [
        "Ride tracking and analytics",
        "Battery level monitoring",
        "Route planning and navigation",
        "Performance optimization"
      ]
    },
    {
      title: "Regenerative Braking",
      description: "Intelligent braking system that captures energy while slowing down, extending your range and improving efficiency.",
      specs: [
        "Energy recovery on braking",
        "Extended battery range",
        "Smooth and responsive feel",
        "Automatic optimization"
      ]
    },
    {
      title: "Frame & Suspension Design",
      description: "Aerospace-grade aluminum frame with advanced suspension system for the perfect balance of strength, weight, and comfort.",
      specs: [
        "Lightweight aluminum alloy frame",
        "Advanced front suspension",
        "Aerodynamic design",
        "Weather-resistant coating"
      ]
    },
    {
      title: "Modular Design",
      description: "Innovative modular architecture allows for easy upgrades and maintenance, keeping your bike future-ready.",
      specs: [
        "Easily replaceable components",
        "Upgrade-friendly design",
        "Tool-free maintenance",
        "Future-proof architecture"
      ]
    }
  ];

  // Technical specifications
  const techSpecs = [
    {
      category: "Motor System",
      specs: [
        { label: "Type", value: "Brushless DC Motor" },
        { label: "Power", value: "250W - 750W" },
        { label: "Torque", value: "Up to 50 Nm" },
        { label: "Efficiency", value: "85%+" }
      ]
    },
    {
      category: "Battery Technology",
      specs: [
        { label: "Type", value: "Lithium-ion" },
        { label: "Capacity", value: "36V - 48V" },
        { label: "Range", value: "60-100 km" },
        { label: "Cycles", value: "1000+" }
      ]
    },
    {
      category: "Smart Features",
      specs: [
        { label: "Connectivity", value: "Bluetooth 5.0" },
        { label: "GPS", value: "Built-in tracking" },
        { label: "Display", value: "LCD/LED" },
        { label: "App", value: "iOS & Android" }
      ]
    }
  ];

  // Innovation timeline
  const timeline = [
    { year: "2023", title: "Go VV Founded", description: "Started with a vision to revolutionize urban mobility in India" },
    { year: "2023", title: "Battery Innovation", description: "Developed our first swappable battery system" },
    { year: "2024", title: "Smart Integration", description: "Launched companion app with GPS tracking" },
    { year: "2024", title: "AI Optimization", description: "Introduced AI-powered ride optimization" },
    { year: "2025", title: "Future Ready", description: "Autonomous features and IoT integration roadmap" }
  ];

  // Common glass card style
  const glassCardStyle =
    "bg-[#ffffff1a] rounded-[23px] border-[none] shadow-[inset_0px_2px_4px_#ffffff7a,inset_0px_-2px_4px_#00000047] backdrop-blur-[5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(5px)_brightness(100%)]";

  return (
    <div className="bg-[#bebebe] min-h-screen w-full">
      <div className="bg-[#bebebe] w-full max-w-[1440px] mx-auto relative">
        {/* Navigation Menu */}
        <div className="absolute top-[31px] left-0 w-full px-[53px] z-20">
          <div className="flex items-center justify-between w-full">
            {/* Left Navigation */}
            <div className="flex gap-3">
              {leftNavItems.map((item, index) => (
                <div
                  key={index}
                  className={`${glassCardStyle} w-[120px] h-[50px] flex items-center justify-center [font-family:'Poppins',Helvetica] font-bold text-black text-lg cursor-pointer hover:scale-105 transition-transform ${item.text === 'Technology' ? 'bg-[#b5d33c] text-white' : ''}`}
                >
                  {item.text}
                </div>
              ))}
            </div>

            {/* Center Logo */}
            <div className={`${glassCardStyle} w-[200px] h-[60px] flex items-center justify-center`}>
              <div className="[font-family:'Poppins',Helvetica] font-bold text-black text-2xl">
                E-BIKE
              </div>
            </div>

            {/* Right Navigation */}
            <div className="flex gap-3">
              {rightNavItems.map((item, index) => (
                <div
                  key={index}
                  className={`${glassCardStyle} w-[120px] h-[50px] flex items-center justify-center [font-family:'Poppins',Helvetica] font-bold text-black text-lg cursor-pointer hover:scale-105 transition-transform`}
                >
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="pt-[120px] px-[53px] pb-[60px]">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="[font-family:'Poppins',Helvetica] font-bold text-[#b5d33c] text-5xl mb-4">
              Advanced Technology
            </h1>
            <p className="[font-family:'Poppins',Helvetica] font-medium text-black text-xl max-w-4xl mx-auto">
              Cutting-edge innovations that make Go VV bikes the smartest choice for modern urban mobility
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className={`${glassCardStyle} p-6 hover:scale-105 transition-transform`}>
                <CardHeader>
                  <CardTitle className="[font-family:'Poppins',Helvetica] font-bold text-black text-xl mb-3">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="[font-family:'Poppins',Helvetica] font-medium text-gray-700 mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.specs.map((spec, specIndex) => (
                      <li key={specIndex} className="[font-family:'Poppins',Helvetica] font-medium text-sm text-gray-600 flex items-center">
                        <span className="w-2 h-2 bg-[#b5d33c] rounded-full mr-3"></span>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Technical Specifications */}
          <div className="mb-16">
            <h2 className="[font-family:'Poppins',Helvetica] font-bold text-black text-3xl text-center mb-8">
              Technical Specifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {techSpecs.map((category, index) => (
                <Card key={index} className={`${glassCardStyle} p-6`}>
                  <CardHeader>
                    <CardTitle className="[font-family:'Poppins',Helvetica] font-bold text-[#b5d33c] text-xl mb-4">
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="space-y-3">
                      {category.specs.map((spec, specIndex) => (
                        <div key={specIndex} className="flex justify-between items-center">
                          <span className="[font-family:'Poppins',Helvetica] font-medium text-gray-700">
                            {spec.label}:
                          </span>
                          <span className="[font-family:'Poppins',Helvetica] font-bold text-black">
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Innovation Timeline */}
          <div>
            <h2 className="[font-family:'Poppins',Helvetica] font-bold text-black text-3xl text-center mb-8">
              Innovation Timeline
            </h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-[#b5d33c]"></div>
              
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    <div className={`${glassCardStyle} p-6 w-96 ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                      <div className="flex items-center mb-3">
                        <div className="w-12 h-12 bg-[#b5d33c] rounded-full flex items-center justify-center mr-4">
                          <span className="[font-family:'Poppins',Helvetica] font-bold text-white text-sm">
                            {item.year}
                          </span>
                        </div>
                        <h3 className="[font-family:'Poppins',Helvetica] font-bold text-black text-lg">
                          {item.title}
                        </h3>
                      </div>
                      <p className="[font-family:'Poppins',Helvetica] font-medium text-gray-700">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};