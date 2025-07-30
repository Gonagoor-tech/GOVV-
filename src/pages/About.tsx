import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const About = (): JSX.Element => {
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

  // Our values data
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

  // Journey timeline
  const journey = [
    {
      quarter: "2023 Q1",
      title: "The Vision",
      description: "Go VV was conceived with a simple yet powerful vision: to revolutionize urban mobility in India through smart, sustainable electric bicycles."
    },
    {
      quarter: "2023 Q2",
      title: "Research & Development",
      description: "Our team of engineers and designers began intensive R&D, studying urban commuting patterns and developing our first prototypes."
    },
    {
      quarter: "2023 Q3",
      title: "First Prototype",
      description: "Successfully developed our first working prototype with swappable battery technology and basic smart features."
    },
    {
      quarter: "2024 Q1",
      title: "Smart Integration",
      description: "Launched our companion mobile app with GPS tracking, ride analytics, and remote bike control features."
    },
    {
      quarter: "2024 Q2",
      title: "Production Ready",
      description: "Finalized our production line and began manufacturing our first commercial models: Lite, Urban, and Plus."
    },
    {
      quarter: "2024 Q4",
      title: "Market Launch",
      description: "Officially launched Go VV bikes in the Indian market with overwhelmingly positive response from early adopters."
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
    "bg-[#ffffff1a] rounded-[23px] border-[none] shadow-[inset_0px_2px_4px_#ffffff7a,inset_0px_-2px_4px_#00000047] backdrop-blur-[5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(5px)_brightness(100%)]";

  return (
    <div className="bg-[#bebebe] min-h-screen w-full">
      <div className="bg-[#bebebe] w-full mx-auto relative">
        {/* Navigation Menu */}
        <div className="absolute top-[31px] left-0 w-full px-4 md:px-[53px] z-20">
          <div className="flex items-center justify-center md:justify-between w-full">
            {/* Mobile Navigation - Simplified */}
            <div className="flex flex-wrap gap-2 md:gap-3 justify-center md:justify-between w-full">
              {/* Left Navigation */}
              <div className="flex gap-2 md:gap-3 md:mr-auto">
                {leftNavItems.map((item, index) => (
                  <div
                    key={index}
                    className={`${glassCardStyle} w-[80px] md:w-[120px] h-[40px] md:h-[50px] flex items-center justify-center [font-family:'Poppins',Helvetica] font-bold text-black text-sm md:text-lg cursor-pointer hover:scale-105 transition-transform`}
                  >
                    {item.text === "Our Bikes" ? "Bikes" : item.text}
                  </div>
                ))}
              </div>

              {/* Center Logo - Hidden on mobile, visible on md+ */}
              <div className={`hidden md:flex ${glassCardStyle} w-[200px] h-[60px] items-center justify-center`}>
                <div className="[font-family:'Poppins',Helvetica] font-bold text-black text-2xl">
                  E-BIKE
                </div>
              </div>

              {/* Right Navigation */}
              <div className="flex gap-2 md:gap-3">
                {rightNavItems.map((item, index) => (
                  <div
                    key={index}
                    className={`${glassCardStyle} w-[80px] md:w-[120px] h-[40px] md:h-[50px] flex items-center justify-center [font-family:'Poppins',Helvetica] font-bold text-black text-sm md:text-lg cursor-pointer hover:scale-105 transition-transform ${item.text === 'About' ? 'bg-[#b5d33c] text-white' : ''}`}
                  >
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="pt-[100px] md:pt-[120px] px-4 md:px-[53px] pb-[60px]">
          {/* Header Section */}
          <div className="text-center mb-8 md:mb-12">
            <h1 className="[font-family:'Poppins',Helvetica] font-bold text-[#b5d33c] text-3xl md:text-5xl mb-4 px-4">
              About Go VV
            </h1>
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
            <h2 className="[font-family:'Poppins',Helvetica] font-bold text-black text-2xl md:text-3xl text-center mb-6 md:mb-8">
              Our Values
            </h2>
            <p className="[font-family:'Poppins',Helvetica] font-medium text-gray-700 text-center mb-6 md:mb-8 px-4">
              The principles that drive everything we do
            </p>
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

          {/* Our Journey */}
          <div className="mb-12 md:mb-16">
            <h2 className="[font-family:'Poppins',Helvetica] font-bold text-black text-2xl md:text-3xl text-center mb-6 md:mb-8">
              Our Journey
            </h2>
            <p className="[font-family:'Poppins',Helvetica] font-medium text-gray-700 text-center mb-6 md:mb-8 px-4">
              From vision to reality - the Go VV story
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {journey.map((item, index) => (
                <Card key={index} className={`${glassCardStyle} p-4 md:p-6 hover:scale-105 transition-transform`}>
                  <CardHeader>
                    <div className="flex items-center mb-3">
                      <div className="w-14 md:w-16 h-7 md:h-8 bg-[#b5d33c] rounded-full flex items-center justify-center mr-3">
                        <span className="[font-family:'Poppins',Helvetica] font-bold text-white text-xs">
                          {item.quarter}
                        </span>
                      </div>
                    </div>
                    <CardTitle className="[font-family:'Poppins',Helvetica] font-bold text-black text-lg mb-3">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="[font-family:'Poppins',Helvetica] font-medium text-gray-700">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Our Team */}
          <div className="mb-12 md:mb-16">
            <h2 className="[font-family:'Poppins',Helvetica] font-bold text-black text-2xl md:text-3xl text-center mb-6 md:mb-8">
              Our Team
            </h2>
            <p className="[font-family:'Poppins',Helvetica] font-medium text-gray-700 text-center mb-6 md:mb-8 px-4">
              Meet the visionaries behind Go VV
            </p>
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
            <h2 className="[font-family:'Poppins',Helvetica] font-bold text-black text-2xl md:text-3xl text-center mb-6 md:mb-8">
              Our Impact
            </h2>
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
    </div>
  );
};