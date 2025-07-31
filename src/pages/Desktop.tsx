import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Desktop = (): JSX.Element => {
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

  // Bike specification cards data
  const specCards = [
    {
      top: "273px",
      left: "897px",
      icon: "/figmaAssets/image-1.png",
      title: "Range",
      description: "35 - 40Km",
    },
    {
      top: "273px",
      left: "1047px",
      icon: "/figmaAssets/image-2.png",
      title: "Speed",
      description: "25 Km/h",
    },
    {
      top: "273px",
      left: "1197px",
      icon: "/figmaAssets/image-7.png",
      title: "Twist",
      description: "type",
    },
    {
      top: "434px",
      left: "897px",
      icon: "/figmaAssets/image-6.png",
      title: "36V, 9ah,",
      description: "Li-ion",
    },
    {
      top: "434px",
      left: "1047px",
      icon: "/figmaAssets/image-4.png",
      title: "5 hours,2 amp,",
      description: "42V",
    },
    {
      top: "427px",
      left: "1197px",
      icon: "/figmaAssets/image-8.png",
      title: "BLDC Motor",
      description: "36V/250W",
    },
  ];

  // Variant cards data
  const variants = [
    {
      top: "158px",
      left: "1108px",
      imageSrc: "/figmaAssets/group.png",
      title: "Campus Rider",
    },
    {
      top: "277px",
      left: "1108px",
      imageSrc: "/figmaAssets/group-1.png",
      title: "Urban Rider",
    },
  ];

  // Technology features data
  const techFeatures = [
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
    }
  ];

  // Bike models data
  const bikeModels = [
    {
      name: "Campus Rider",
      tagline: "Empower Your Campus Commute!",
      description: "Designed for life on the move, Campus Rider is GoVV's compact and efficient e‑cycle tailored for universities, tech parks, and institutional campuses.",
      features: [
        { label: "Range", value: "35-40 km" },
        { label: "Speed", value: "25 km/h" },
        { label: "Battery", value: "36V, 9Ah Li-ion" },
        { label: "Motor", value: "250W BLDC" },
        { label: "Charging", value: "5 hours" },
        { label: "Weight", value: "22 kg" }
      ],
      image: "/figmaAssets/group.png",
      color: "#b5d33c"
    },
    {
      name: "Urban Rider",
      tagline: "Conquer the City Streets!",
      description: "Built for urban warriors, Urban Rider delivers superior performance with enhanced battery life and robust build quality for daily city commuting.",
      features: [
        { label: "Range", value: "50-60 km" },
        { label: "Speed", value: "25 km/h" },
        { label: "Battery", value: "48V, 12Ah Li-ion" },
        { label: "Motor", value: "350W BLDC" },
        { label: "Charging", value: "4 hours" },
        { label: "Weight", value: "25 kg" }
      ],
      image: "/figmaAssets/group-1.png",
      color: "#ff6b35"
    }
  ];

  // Company values
  const values = [
    {
      title: "Innovation",
      description: "Pushing the boundaries of electric mobility with cutting-edge technology"
    },
    {
      title: "Sustainability",
      description: "Committed to creating eco-friendly solutions for a cleaner future"
    },
    {
      title: "Community",
      description: "Building a community of conscious riders transforming urban mobility"
    },
    {
      title: "Quality",
      description: "Uncompromising quality in design, manufacturing, and customer service"
    }
  ];

  // Team members
  const team = [
    {
      initials: "AS",
      name: "Arjun Sharma",
      role: "CEO & Co-Founder",
      description: "Former Tesla engineer with 8+ years in electric vehicle technology"
    },
    {
      initials: "PP",
      name: "Priya Patel",
      role: "CTO & Co-Founder",
      description: "Ex-Google software architect specializing in IoT and mobile applications"
    },
    {
      initials: "RK",
      name: "Ravi Kumar",
      role: "Head of Design",
      description: "Award-winning industrial designer with expertise in sustainable mobility"
    },
    {
      initials: "DMS",
      name: "Dr. Meera Singh",
      role: "Head of R&D",
      description: "PhD in Battery Technology from IIT Delhi, 10+ years in energy storage"
    }
  ];

  // Statistics
  const stats = [
    { number: "500+", label: "Happy Customers" },
    { number: "50k+", label: "Km Traveled" },
    { number: "25+", label: "Service Centers" },
    { number: "99%", label: "Satisfaction Rate" }
  ];

  // Common glass card style
  const glassCardStyle =
    "bg-[#ffffff1a] rounded-[23px] border-[none] shadow-[inset_0px_2px_4px_#ffffff7a,inset_0px_-2px_4px_#00000047] backdrop-blur-[5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(5px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-[0.5px] before:rounded-[23px] before:[background:linear-gradient(212deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,1)_62%,rgba(255,255,255,0.05)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none";

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen w-full overflow-x-hidden">
      <div className="bg-gradient-to-br from-slate-50 to-blue-50 w-full relative">
        {/* Hero Section */}
        <div id="home" className="h-screen min-h-[800px] md:h-[1024px] relative overflow-hidden">
          <div className="relative w-full h-full">
            {/* Top section - Original desktop layout */}
            <div className="absolute w-full h-full top-0 left-0">
              <div className="h-full w-full relative">
                {/* Navigation Menu - Fixed desktop layout with logo */}
                <div className="absolute top-[31px] left-[53px] right-[53px] z-20">
                  <div className="flex items-center justify-between w-full">
                    {/* Left Navigation */}
                    <div className="flex gap-3">
                      {leftNavItems.map((item, index) => (
                        <a
                          key={index}
                          href={item.text === "Home" ? "#home" : item.text === "Our Bikes" ? "#bikes" : "#technology"}
                          className={`${glassCardStyle} w-[120px] h-[50px] flex items-center justify-center [font-family:'Poppins',Helvetica] font-bold text-black text-lg cursor-pointer hover:scale-105 transition-transform`}
                        >
                          {item.text}
                        </a>
                      ))}
                    </div>

                    {/* Center Logo */}
                    <div className="absolute left-1/2 transform -translate-x-1/2">
                      <img
                        src="/lovable-uploads/b2ca6469-0789-4236-b761-3d74a0c5e4d7.png"
                        alt="GoVV Logo"
                        className="h-[60px] w-auto"
                      />
                    </div>

                    {/* Right Navigation */}
                    <div className="flex gap-3">
                      {rightNavItems.map((item, index) => (
                        <a
                          key={index}
                          href={item.text === "About" ? "#about" : item.text === "Blog" ? "#blog" : "#customize"}
                          className={`${glassCardStyle} w-[120px] h-[50px] flex items-center justify-center [font-family:'Poppins',Helvetica] font-bold text-black text-lg cursor-pointer hover:scale-105 transition-transform`}
                        >
                          {item.text}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Background and bike image - Original positioning */}
                <div className="absolute w-full h-full top-0 left-0 bg-[url(/figmaAssets/vector-5-1.svg)] bg-cover bg-center" />
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-start">
                  <img
                    className="w-[720px] h-[506px] object-contain ml-0 z-10"
                    alt="Electric Bike"
                    src="/figmaAssets/vector-121.svg"
                  />
                </div>

                {/* Desktop Specification Cards - Original absolute positioning */}
                {specCards.map((card, index) => (
                  <Card
                    key={`spec-card-${index}`}
                    className={`absolute ${glassCardStyle} z-15`}
                    style={{
                      top: card.top,
                      left: card.left,
                      width: "125px",
                      height: index === 5 ? "132px" : "123px",
                    }}
                  >
                    <CardContent className="p-0 flex flex-col items-center">
                      <img
                        className="w-[50px] h-[50px] mt-2"
                        alt="Feature icon"
                        src={card.icon}
                      />
                      <div className="mt-2 text-center [font-family:'Poppins',Helvetica] font-bold text-black text-base">
                        {card.title}
                        <br />
                        {card.description}
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {/* Decorative elements - Original positioning */}
                <img
                  className="absolute w-[85px] h-[134px] top-3 left-[694px] z-5"
                  alt="Vector"
                  src="/figmaAssets/vector-1-1.svg"
                />
                <img
                  className="absolute w-14 h-[55px] top-[74px] left-[668px] z-5"
                  alt="Ellipse"
                  src="/figmaAssets/ellipse-1.svg"
                />
                <img
                  className="absolute w-[74px] h-[92px] top-[39px] left-[750px] z-5"
                  alt="Ellipse"
                  src="/figmaAssets/ellipse-3.svg"
                />
                <img
                  className="absolute w-[57px] h-[65px] top-[11px] left-[666px] z-5"
                  alt="Ellipse"
                  src="/figmaAssets/ellipse-4.svg"
                />
                <img
                  className="absolute w-9 h-[41px] top-6 left-[679px] z-5"
                  alt="Vector"
                  src="/figmaAssets/vector-2-1.svg"
                />
              </div>
            </div>

            {/* Bottom section - Original positioning */}
            <div className="absolute w-full bottom-0 left-0">
              <div className="relative">
                {/* Top curve separator */}
                <div className="absolute w-full h-[92px] -top-[92px] left-0">
                  <img
                    className="absolute w-full h-full left-0"
                    alt="Vector"
                    src="/figmaAssets/vector-4-1.svg"
                  />
                </div>

                {/* Content section - Original layout */}
                <div className="w-full bg-[url(/figmaAssets/vector-6-1.svg)] bg-cover bg-center px-[115px] py-16">
                  <div className="text-left mb-8">
                    <div className="[font-family:'Poppins',Helvetica] font-bold text-white text-2xl mb-4">
                      MAXIMIZE YOUR PRODUCTIVITY
                    </div>
                    <div className="[font-family:'Poppins',Helvetica] font-bold text-[#b5d33c] text-[50px] mb-6 leading-tight">
                      GOVV - CAMPUS RIDER 1
                    </div>
                    <div className="[font-family:'Poppins',Helvetica] font-bold text-white text-xl leading-relaxed max-w-2xl">
                      Empower Your Campus Commute! <br />
                      Designed for life on the move, Campus Rider is
                      GoVV&apos;s compact and efficient e‑cycle
                      tailored for universities, tech parks, and
                      institutional campuses
                    </div>
                  </div>

                  {/* Variants section - Original positioning */}
                  <div className="flex items-center gap-8">
                    <div className="[font-family:'Poppins',Helvetica] font-bold text-white text-2xl">
                      Variants:
                    </div>
                    
                    <div className="flex gap-4">
                      {variants.map((variant, index) => (
                        <div
                          key={`variant-${index}`}
                          className="w-[260px] h-20 rounded-[35px] shadow-[inset_0px_4px_4px_#665e3440] blur-[0.45px] backdrop-blur-[0.7px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(0.7px)_brightness(100%)] bg-[linear-gradient(35deg,rgba(218,217,164,1)_43%,rgba(116,115,87,1)_100%)] flex items-center p-2"
                        >
                          <img
                            className="w-[111px] h-[71px] object-contain"
                            alt="Variant"
                            src={variant.imageSrc}
                          />
                          <div className="ml-4 [font-family:'Poppins',Helvetica] font-bold text-black text-sm">
                            {variant.title}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Technology Section */}
        <div id="technology" className="py-12 md:py-20 px-4 md:px-[53px] bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
            <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#b5d33c] text-3xl md:text-5xl mb-4">
              Advanced Technology
            </h2>
            <p className="[font-family:'Poppins',Helvetica] font-medium text-black text-lg md:text-xl max-w-4xl mx-auto px-4">
              Cutting-edge innovations that make Go VV bikes the smartest choice for modern urban mobility
            </p>
          </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {techFeatures.map((feature, index) => (
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
          </div>
        </div>

        {/* Bikes Section */}
        <div id="bikes" className="py-12 md:py-20 px-4 md:px-[53px] bg-gradient-to-br from-blue-50 to-slate-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
            <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#b5d33c] text-3xl md:text-5xl mb-4">
              Our Bikes
            </h2>
            <p className="[font-family:'Poppins',Helvetica] font-medium text-black text-lg md:text-xl max-w-4xl mx-auto px-4">
              Discover our range of electric bikes designed for every urban adventure
            </p>
          </div>

            <div className="space-y-12 md:space-y-20">
              {bikeModels.map((bike, index) => (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <Card className="relative overflow-hidden bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-xl border border-white/30 shadow-2xl p-4 md:p-8 hover:scale-105 transition-all duration-300 hover:shadow-3xl group">
                      {/* Decorative gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent opacity-50 group-hover:opacity-70 transition-opacity"></div>
                      
                      <CardHeader className="relative z-10">
                        <div className="flex items-center mb-4 md:mb-6">
                          <div className="w-4 md:w-6 h-4 md:h-6 rounded-full mr-3 md:mr-4 shadow-lg ring-2 ring-white/50" style={{ backgroundColor: bike.color }}></div>
                          <CardTitle className="[font-family:'Poppins',Helvetica] font-bold text-2xl md:text-4xl bg-gradient-to-r bg-clip-text text-transparent" 
                                     style={{ backgroundImage: `linear-gradient(135deg, ${bike.color}, ${bike.color}dd)` }}>
                            {bike.name}
                          </CardTitle>
                        </div>
                        <div className="relative">
                          <h3 className="[font-family:'Poppins',Helvetica] font-bold text-black text-lg md:text-2xl mb-4 relative z-10">
                            {bike.tagline}
                          </h3>
                          <div className="absolute left-0 bottom-0 w-16 md:w-20 h-1 rounded-full" style={{ backgroundColor: bike.color }}></div>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="p-0 relative z-10">
                        <p className="[font-family:'Poppins',Helvetica] font-medium text-gray-700 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                          {bike.description}
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                          {bike.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="group/feature relative overflow-hidden">
                              <div className="bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-sm border border-white/30 rounded-xl p-3 md:p-4 hover:from-white/60 hover:to-white/40 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                                {/* Feature icon background */}
                                <div className="absolute top-2 right-2 w-6 md:w-8 h-6 md:h-8 rounded-full opacity-10" style={{ backgroundColor: bike.color }}></div>
                                
                                <div className="relative z-10">
                                  <span className="[font-family:'Poppins',Helvetica] font-semibold text-gray-800 text-xs md:text-sm block mb-1 md:mb-2">
                                    {feature.label}:
                                  </span>
                                  <span className="[font-family:'Poppins',Helvetica] font-bold text-black text-base md:text-lg">
                                    {feature.value}
                                  </span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        {/* Action button */}
                        <div className="mt-6 md:mt-8 flex justify-center">
                          <button className="bg-gradient-to-r from-white/30 to-white/10 backdrop-blur-sm border-2 border-white/40 rounded-full px-6 md:px-8 py-2 md:py-3 [font-family:'Poppins',Helvetica] font-bold text-black hover:from-white/50 hover:to-white/30 hover:border-white/60 transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm md:text-base"
                                  style={{ borderColor: `${bike.color}40` }}>
                            <span className="flex items-center gap-2">
                              <span>Learn More</span>
                              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: bike.color }}></span>
                            </span>
                          </button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <div className={`flex justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''} order-first lg:order-none`}>
                    <img
                      src={bike.image}
                      alt={bike.name}
                      className="w-[280px] md:w-[400px] h-[210px] md:h-[300px] object-contain hover:scale-110 transition-transform"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* About Section */}
        <div id="about" className="py-12 md:py-20 px-4 md:px-[53px] bg-gradient-to-br from-slate-100 to-blue-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
            <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#b5d33c] text-3xl md:text-5xl mb-4">
              About Go VV
            </h2>
            <p className="[font-family:'Poppins',Helvetica] font-medium text-black text-lg md:text-xl max-w-4xl mx-auto px-4">
              Pioneering the future of urban mobility in India with smart, sustainable electric bicycles
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
            <Card className={`${glassCardStyle} p-4 md:p-8`}>
              <CardHeader>
                <CardTitle className="[font-family:'Poppins',Helvetica] font-bold text-[#b5d33c] text-xl md:text-2xl mb-4">
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="[font-family:'Poppins',Helvetica] font-medium text-gray-700 mb-4">
                  To revolutionize urban transportation in India by creating smart, sustainable, and affordable electric bicycles that empower people to go further, go freely, and contribute to a cleaner environment.
                </p>
                <p className="[font-family:'Poppins',Helvetica] font-medium text-gray-700">
                  We believe that the future of urban mobility lies in intelligent, eco-friendly solutions that seamlessly integrate with modern lifestyles while reducing our carbon footprint.
                </p>
              </CardContent>
            </Card>

            <Card className={`${glassCardStyle} p-4 md:p-8`}>
              <CardHeader>
                <CardTitle className="[font-family:'Poppins',Helvetica] font-bold text-[#b5d33c] text-xl md:text-2xl mb-4">
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="[font-family:'Poppins',Helvetica] font-medium text-gray-700 mb-4">
                  To become India's leading electric mobility brand, transforming cities into cleaner, more liveable spaces where smart transportation solutions enable people to lead healthier, more connected lives.
                </p>
                <p className="[font-family:'Poppins',Helvetica] font-medium text-gray-700">
                  We envision a future where every urban commuter has access to intelligent, sustainable transportation that adapts to their needs and contributes to building smarter cities.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Our Values */}
          <div className="mb-12 md:mb-16">
            <h3 className="[font-family:'Poppins',Helvetica] font-bold text-black text-2xl md:text-3xl text-center mb-6 md:mb-8">
              Our Values
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {values.map((value, index) => (
                <Card key={index} className={`${glassCardStyle} p-4 md:p-6 text-center hover:scale-105 transition-transform`}>
                  <CardHeader>
                    <CardTitle className="[font-family:'Poppins',Helvetica] font-bold text-[#b5d33c] text-lg md:text-xl mb-3">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="[font-family:'Poppins',Helvetica] font-medium text-gray-700">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Our Team */}
          <div className="mb-12 md:mb-16">
            <h3 className="[font-family:'Poppins',Helvetica] font-bold text-black text-2xl md:text-3xl text-center mb-6 md:mb-8">
              Our Team
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {team.map((member, index) => (
                <Card key={index} className={`${glassCardStyle} p-4 md:p-6 text-center hover:scale-105 transition-transform`}>
                  <CardHeader>
                    <div className="w-16 md:w-20 h-16 md:h-20 bg-[#b5d33c] rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="[font-family:'Poppins',Helvetica] font-bold text-white text-lg md:text-xl">
                        {member.initials}
                      </span>
                    </div>
                    <CardTitle className="[font-family:'Poppins',Helvetica] font-bold text-black text-base md:text-lg mb-1">
                      {member.name}
                    </CardTitle>
                    <p className="[font-family:'Poppins',Helvetica] font-semibold text-[#b5d33c] text-xs md:text-sm mb-3">
                      {member.role}
                    </p>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="[font-family:'Poppins',Helvetica] font-medium text-gray-700 text-sm">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Statistics */}
          <div>
            <h3 className="[font-family:'Poppins',Helvetica] font-bold text-black text-2xl md:text-3xl text-center mb-6 md:mb-8">
              Our Impact
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className={`${glassCardStyle} p-4 md:p-6 text-center hover:scale-105 transition-transform`}>
                  <CardContent className="p-0 flex flex-col items-center">
                    <div className="[font-family:'Poppins',Helvetica] font-bold text-[#b5d33c] text-2xl md:text-4xl mb-2">
                      {stat.number}
                    </div>
                    <div className="[font-family:'Poppins',Helvetica] font-medium text-black text-sm md:text-lg">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          </div>
        </div>

        {/* Blog Section */}
        <div id="blog" className="py-12 md:py-20 px-4 md:px-[53px] bg-gradient-to-br from-blue-100 to-slate-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
            <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#b5d33c] text-3xl md:text-5xl mb-4">
              Latest Updates
            </h2>
            <p className="[font-family:'Poppins',Helvetica] font-medium text-black text-lg md:text-xl max-w-4xl mx-auto px-4">
              Stay informed about the latest developments in electric mobility and GoVV innovations
            </p>
          </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  title: "The Future of Urban Mobility is Electric",
                  date: "January 2025",
                  preview: "Discover how electric bikes are revolutionizing city transportation with zero emissions and smart technology integration.",
                  readTime: "5 min read"
                },
                {
                  title: "Campus Sustainability with GoVV",
                  date: "December 2024", 
                  preview: "Learn how universities across India are adopting GoVV bikes to create greener, more connected campuses.",
                  readTime: "4 min read"
                },
                {
                  title: "Battery Technology Breakthrough",
                  date: "November 2024",
                  preview: "Our latest swappable battery technology offers 60km range and 2-hour fast charging capabilities.",
                  readTime: "6 min read"
                }
              ].map((post, index) => (
                <Card key={index} className={`${glassCardStyle} p-4 md:p-6 hover:scale-105 transition-transform cursor-pointer`}>
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <span className="[font-family:'Poppins',Helvetica] font-medium text-[#b5d33c] text-xs md:text-sm">
                        {post.date}
                      </span>
                      <span className="[font-family:'Poppins',Helvetica] font-medium text-gray-600 text-xs md:text-sm">
                        {post.readTime}
                      </span>
                    </div>
                    <CardTitle className="[font-family:'Poppins',Helvetica] font-bold text-black text-lg md:text-xl mb-3">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="[font-family:'Poppins',Helvetica] font-medium text-gray-700 mb-4">
                      {post.preview}
                    </p>
                    <button className="[font-family:'Poppins',Helvetica] font-bold text-[#b5d33c] hover:text-black transition-colors">
                      Read More →
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Customize Section */}
        <div id="customize" className="py-12 md:py-20 px-4 md:px-[53px] bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#b5d33c] text-3xl md:text-5xl mb-4">
                Customize Your Ride
              </h2>
              <p className="[font-family:'Poppins',Helvetica] font-medium text-black text-lg md:text-xl max-w-4xl mx-auto px-4">
                Make your GoVV bike uniquely yours with our extensive customization options and accessories
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Customization Options */}
              <div className="space-y-6 md:space-y-8">
                <Card className={`${glassCardStyle} p-4 md:p-6`}>
                  <CardHeader>
                    <CardTitle className="[font-family:'Poppins',Helvetica] font-bold text-black text-xl md:text-2xl mb-4">
                      Color Options
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-4">
                      {[
                        { name: "Lime Green", color: "#b5d33c" },
                        { name: "Ocean Blue", color: "#2563eb" },
                        { name: "Sunset Orange", color: "#ea580c" }, 
                        { name: "Midnight Black", color: "#000000" }
                      ].map((color, index) => (
                        <div key={index} className="text-center">
                          <div 
                            className="w-10 md:w-12 h-10 md:h-12 rounded-full mx-auto mb-2 border-2 border-gray-300 cursor-pointer hover:scale-110 transition-transform"
                            style={{ backgroundColor: color.color }}
                          ></div>
                          <span className="[font-family:'Poppins',Helvetica] font-medium text-black text-xs md:text-sm">
                            {color.name}
                          </span>
                        </div>
                      ))}  
                    </div>
                  </CardContent>
                </Card>

                <Card className={`${glassCardStyle} p-4 md:p-6`}>
                  <CardHeader>
                    <CardTitle className="[font-family:'Poppins',Helvetica] font-bold text-black text-xl md:text-2xl mb-4">
                      Accessories
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="space-y-3">
                      {[
                        "Premium LED Headlight Kit",
                        "Weatherproof Phone Mount", 
                        "Cargo Basket & Side Bags",
                        "Anti-theft Security System",
                        "Comfort Gel Seat Upgrade",
                        "Extended Battery Pack"
                      ].map((accessory, index) => (
                        <div key={index} className="flex items-center justify-between p-2 md:p-3 bg-white/10 rounded-lg">
                          <span className="[font-family:'Poppins',Helvetica] font-medium text-black text-sm md:text-base">
                            {accessory}
                          </span>
                          <button className="[font-family:'Poppins',Helvetica] font-bold text-[#b5d33c] hover:text-black transition-colors text-xs md:text-sm">
                            Add +
                          </button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Customization Preview */}
              <div className="relative">
                <Card className={`${glassCardStyle} p-4 md:p-8 text-center`}>
                  <CardContent className="p-0">
                    <div className="mb-4 md:mb-6">
                      <img 
                        src="/figmaAssets/vector-121.svg" 
                        alt="Customizable Bike Preview"
                        className="w-full max-w-xs md:max-w-md mx-auto h-auto"
                      />
                    </div>
                    <h3 className="[font-family:'Poppins',Helvetica] font-bold text-black text-xl md:text-2xl mb-3 md:mb-4">
                      Your Custom GoVV
                    </h3>
                    <p className="[font-family:'Poppins',Helvetica] font-medium text-gray-700 mb-4 md:mb-6 text-sm md:text-base">
                      Preview your personalized electric bike with selected colors and accessories
                    </p>
                    <button className={`${glassCardStyle} px-6 md:px-8 py-2 md:py-3 [font-family:'Poppins',Helvetica] font-bold text-black hover:scale-105 transition-transform text-sm md:text-base`}>
                      Start Customizing
                    </button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gradient-to-br from-blue-50 to-slate-100 py-12 md:py-16 px-4 md:px-[53px] border-t border-white/20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
              {/* Company Info */}
              <div className="col-span-1 md:col-span-2 mb-6 md:mb-0">
                <div className="[font-family:'Poppins',Helvetica] font-bold text-black text-2xl md:text-3xl mb-4">
                  GoVV E-BIKE
                </div>
                <p className="[font-family:'Poppins',Helvetica] font-medium text-gray-700 mb-4 md:mb-6 max-w-md text-sm md:text-base">
                  Pioneering the future of urban mobility in India with smart, sustainable electric bicycles that empower communities and protect our environment.
                </p>
                <div className="flex space-x-3 md:space-x-4">
                  {["Facebook", "Twitter", "Instagram", "LinkedIn"].map((social, index) => (
                    <div key={index} className={`${glassCardStyle} w-10 md:w-12 h-10 md:h-12 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform`}>
                      <span className="[font-family:'Poppins',Helvetica] font-bold text-black text-xs md:text-sm">
                        {social[0]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="mb-6 md:mb-0">
                <h4 className="[font-family:'Poppins',Helvetica] font-bold text-black text-base md:text-lg mb-3 md:mb-4">
                  Quick Links
                </h4>
                <ul className="space-y-2">
                  {[
                    { text: "Home", href: "#home" },
                    { text: "Technology", href: "#technology" },
                    { text: "Our Bikes", href: "#bikes" },
                    { text: "About", href: "#about" },
                    { text: "Blog", href: "#blog" },
                    { text: "Customize", href: "#customize" }
                  ].map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.href}
                        className="[font-family:'Poppins',Helvetica] font-medium text-gray-700 hover:text-[#b5d33c] transition-colors text-sm md:text-base"
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="[font-family:'Poppins',Helvetica] font-bold text-black text-base md:text-lg mb-3 md:mb-4">
                  Contact Us
                </h4>
                <div className="space-y-2 md:space-y-3">
                  <div className="[font-family:'Poppins',Helvetica] font-medium text-gray-700 text-sm md:text-base">
                    📍 Bangalore, Karnataka, India
                  </div>
                  <div className="[font-family:'Poppins',Helvetica] font-medium text-gray-700 text-sm md:text-base">
                    📞 +91 98765 43210
                  </div>
                  <div className="[font-family:'Poppins',Helvetica] font-medium text-gray-700 text-sm md:text-base">
                    ✉️ hello@govv.in
                  </div>
                  <div className="[font-family:'Poppins',Helvetica] font-medium text-gray-700 text-sm md:text-base">
                    🕒 Mon-Sat 9AM-6PM
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/20 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center">
              <div className="[font-family:'Poppins',Helvetica] font-medium text-gray-700 mb-4 md:mb-0 text-sm md:text-base text-center md:text-left">
                © 2025 GoVV E-Bike. All rights reserved.
              </div>
              <div className="flex flex-wrap justify-center md:justify-end space-x-4 md:space-x-6">
                {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((policy, index) => (
                  <a 
                    key={index}
                    href="#"
                    className="[font-family:'Poppins',Helvetica] font-medium text-gray-700 hover:text-[#b5d33c] transition-colors text-sm md:text-base"
                  >
                    {policy}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
