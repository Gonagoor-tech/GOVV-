import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-4 6h4" />
  </svg>
);

export const Mobile = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Mobile-specific navigation (shorter text)
  const leftNavItems = [
    { text: "Home", href: "#home" },
    { text: "Bikes", href: "#bikes" },
    { text: "Tech", href: "#technology" },
  ];
  const rightNavItems = [
    { text: "About", href: "#about" },
    { text: "Blog", href: "#blog" },
    { text: "Custom", href: "#customize" },
  ];

  // Mobile-optimized spec cards (shorter descriptions)
  const specCards = [
    { icon: "/figmaAssets/image-1.png", title: "Range", description: "35-40Km" },
    { icon: "/figmaAssets/image-2.png", title: "Speed", description: "25Km/h" },
    { icon: "/figmaAssets/image-7.png", title: "Twist", description: "type" },
    { icon: "/figmaAssets/image-6.png", title: "36V", description: "Li-ion" },
    { icon: "/figmaAssets/image-4.png", title: "5hrs", description: "42V" },
    { icon: "/figmaAssets/image-8.png", title: "BLDC", description: "250W" }
  ];

  const variants = [
    { imageSrc: "/figmaAssets/group.png", title: "Campus Rider" },
    { imageSrc: "/figmaAssets/group-1.png", title: "Urban Rider" }
  ];

  // Mobile-optimized technology features
  const techFeatures = [
    {
      title: "Swappable Battery",
      description: "Hot-swappable battery system for unlimited range.",
      specs: [
        "30-second battery swap",
        "1000+ charge cycles",
        "Smart battery management",
        "Universal compatibility"
      ]
    },
    {
      title: "Smart Lock & GPS",
      description: "Advanced security with real-time tracking.",
      specs: [
        "GPS location tracking",
        "Smartphone integration",
        "Anti-theft alarms",
        "Geofencing alerts"
      ]
    },
    {
      title: "Mobile App",
      description: "Control your bike with our intuitive app.",
      specs: [
        "Ride tracking",
        "Battery monitoring",
        "Route planning",
        "Performance stats"
      ]
    },
    {
      title: "Regenerative Braking",
      description: "Energy recovery system for extended range.",
      specs: [
        "Energy recovery",
        "Extended battery life",
        "Smooth braking",
        "Auto optimization"
      ]
    }
  ];

  // Mobile-optimized bike models
  const bikeModels = [
    {
      name: "Campus Rider",
      tagline: "Campus Commute!",
      description: "Compact e-cycle for universities and tech parks.",
      features: [
        { label: "Range", value: "35-40 km" },
        { label: "Speed", value: "25 km/h" },
        { label: "Battery", value: "36V, 9Ah" },
        { label: "Motor", value: "250W BLDC" },
        { label: "Charging", value: "5 hours" },
        { label: "Weight", value: "22 kg" }
      ],
      image: "/figmaAssets/group.png",
      color: "#b5d33c"
    },
    {
      name: "Urban Rider",
      tagline: "City Streets!",
      description: "Superior performance for daily city commuting.",
      features: [
        { label: "Range", value: "50-60 km" },
        { label: "Speed", value: "25 km/h" },
        { label: "Battery", value: "48V, 12Ah" },
        { label: "Motor", value: "350W BLDC" },
        { label: "Charging", value: "4 hours" },
        { label: "Weight", value: "25 kg" }
      ],
      image: "/figmaAssets/group-1.png",
      color: "#ff6b35"
    }
  ];

  // Mobile-optimized values
  const values = [
    { title: "Innovation", description: "Cutting-edge electric mobility technology" },
    { title: "Sustainability", description: "Eco-friendly solutions for cleaner future" },
    { title: "Community", description: "Building conscious rider communities" },
    { title: "Quality", description: "Uncompromising design and service" }
  ];

  // Mobile-optimized team
  const team = [
    { initials: "AS", name: "Arjun Sharma", role: "CEO", description: "Ex-Tesla engineer, 8+ years EV experience" },
    { initials: "PP", name: "Priya Patel", role: "CTO", description: "Ex-Google architect, IoT specialist" },
    { initials: "RK", name: "Ravi Kumar", role: "Design Head", description: "Award-winning industrial designer" },
    { initials: "DMS", name: "Dr. Meera Singh", role: "R&D Head", description: "PhD Battery Technology, IIT Delhi" }
  ];

  // Mobile-optimized stats
  const stats = [
    { number: "500+", label: "Customers" },
    { number: "50k+", label: "Km Traveled" },
    { number: "25+", label: "Service Centers" },
    { number: "99%", label: "Satisfaction" }
  ];

  // Mobile-optimized blog
  const blog = [
    { title: "Electric Mobility Future", date: "Jan 2025", preview: "How e-bikes are revolutionizing city transport.", readTime: "3 min" },
    { title: "Campus Sustainability", date: "Dec 2024", preview: "Universities adopting GoVV for greener campuses.", readTime: "3 min" },
    { title: "Battery Breakthrough", date: "Nov 2024", preview: "60km range with 2-hour fast charging.", readTime: "4 min" }
  ];

  const glassCardStyle = "bg-[#ffffff1a] rounded-[23px] border-[none] shadow-[inset_0px_2px_4px_#ffffff7a,inset_0px_-2px_4px_#00000047] backdrop-blur-[5px] backdrop-brightness-[100%]";

  return (
    <div className="relative min-h-screen w-full font-['Poppins'] overflow-x-hidden">
      {/* Mobile Background */}
      <div className="relative">
        <div 
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat pointer-events-none"
          style={{
            backgroundImage: "url('/figmaAssets/vector-5-1.svg')",
            minHeight: "100vh"
          }}
        />

        {/* Mobile Navigation with vector-6-1.svg background and bigger logo */}
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur border-b border-blue-900/15 shadow-md"
                style={{
                  backgroundImage: "url('/figmaAssets/vector-6-1.svg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat"
                }}>
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="flex items-center bg-white px-2 py-1 rounded-md shadow-md">
              <img 
                src="/govv.png" 
                alt="GoVV Logo" 
                className="h-[60px] w-auto object-contain"
              />
</a>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
              <MenuIcon />
            </button>
          </div>
          {isMenuOpen && (
            <nav className="bg-white/90 backdrop-blur shadow-lg rounded-b-xl border-t">
              {[...leftNavItems, ...rightNavItems].map((item) => (
                <a key={item.text} href={item.href} onClick={() => setIsMenuOpen(false)}
                  className="block text-center font-bold text-blue-800 py-3 border-b last:border-b-0 hover:bg-blue-200 transition">
                  {item.text}
                </a>
              ))}
            </nav>
          )}
        </header>

        {/* Mobile Hero - Stacked layout */}
        <section id="home" className="relative z-10 pt-24 pb-16 px-4 min-h-screen flex items-center">
          <div className="w-full flex flex-col items-center justify-center gap-6">
            <div className="w-full max-w-xs mx-auto relative">
              <img src="/figmaAssets/vector-121.svg" alt="Electric Bike" className="w-full object-contain" />
            </div>
            
            {/* Mobile Spec Cards - Grid layout only */}
            <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto w-full">
              {specCards.map((card, i) => (
                <Card key={i} className={glassCardStyle}>
                  <CardContent className="flex flex-col items-center justify-center text-center p-3 gap-2">
                    <img src={card.icon} alt={card.title} className="w-8 h-8 mx-auto" />
                    <span className="font-bold text-black text-xs leading-tight">{card.title}<br />{card.description}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Mobile Green Section */}
      <div className="relative bg-gradient-to-br from-white to-slate-100">
        <section className="relative">
          <img 
            className="absolute w-full h-[50px] top-0 left-0 object-cover z-10 pointer-events-none" 
            alt="" 
            src="/figmaAssets/vector-4-1.svg" 
          />
          
          <div className="w-full bg-[url('/figmaAssets/vector-6-1.svg')] bg-cover bg-center pt-12 pb-10 px-4 rounded-t-[35px] relative z-0">
            <div className="text-center max-w-2xl mx-auto">
              <div className="font-bold text-white text-2xl mb-3">MAXIMIZE YOUR PRODUCTIVITY</div>
              <div className="font-bold text-[#b5d33c] text-3xl mb-4 leading-tight">GOVV - CAMPUS RIDER 1</div>
              <div className="font-bold text-white text-lg mb-8 leading-relaxed">
                Empower Your Campus Commute!<br />
                Designed for life on the move.
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="font-bold text-white text-lg">Variants:</div>
                <div className="flex flex-col gap-4 max-w-xs w-full">
                  {variants.map((variant, i) => (
                    <div key={i} className="w-full h-16 rounded-[25px] shadow-[inset_0px_4px_4px_#665e3440] backdrop-blur-[0.7px] bg-[linear-gradient(35deg,rgba(218,217,164,1)_43%,rgba(116,115,87,1)_100%)] flex items-center p-2">
                      <img className="w-[60px] h-[40px] object-contain" alt={variant.title} src={variant.imageSrc} />
                      <div className="ml-3 font-bold text-black text-sm">{variant.title}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Technology Section */}
        <section id="technology" className="py-14 px-4">
          <div className="text-center mb-10">
            <h2 className="font-bold text-[#b5d33c] text-3xl mb-4">Advanced Technology</h2>
            <p className="font-medium text-black text-lg max-w-4xl mx-auto">
              Cutting-edge innovations for modern urban mobility.
            </p>
          </div>
          <div className="space-y-6">
            {techFeatures.map((feature, i) => (
              <Card key={i} className={`${glassCardStyle} p-4 hover:scale-105 transition-transform`}>
                <CardHeader>
                  <CardTitle className="font-bold text-black text-lg mb-2">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium text-gray-700 mb-3 text-sm">{feature.description}</p>
                  <ul className="space-y-1">
                    {feature.specs.map((spec, si) => (
                      <li key={si} className="font-medium text-xs text-gray-600 flex items-center">
                        <span className="w-1.5 h-1.5 bg-[#b5d33c] rounded-full mr-2"></span>{spec}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Mobile Bikes Section */}
        <section id="bikes" className="py-14 px-4 bg-gradient-to-br from-blue-50 to-slate-100">
          <div className="text-center mb-10">
            <h2 className="font-bold text-[#b5d33c] text-3xl mb-4">Our Bikes</h2>
            <p className="font-medium text-black text-lg max-w-4xl mx-auto">Electric bikes for every urban adventure.</p>
          </div>
          <div className="space-y-8">
            {bikeModels.map((bike, i) => (
              <Card key={i} className="relative overflow-hidden bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-xl border border-white/30 shadow-2xl p-4 hover:scale-105 transition-all duration-300">
                <CardHeader className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="w-4 h-4 rounded-full mr-3 shadow-lg ring-2 ring-white/50" style={{ backgroundColor: bike.color }} />
                    <CardTitle className="font-bold text-2xl" style={{ color: bike.color }}>{bike.name}</CardTitle>
                  </div>
                  <h3 className="font-bold text-black text-lg mb-4">{bike.tagline}</h3>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center mb-4">
                    <img src={bike.image} alt={bike.name} className="w-[150px] h-[90px] object-contain mb-4" />
                    <p className="font-medium text-gray-700 mb-4 text-sm text-center">{bike.description}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {bike.features.map((f, fi) => (
                      <div key={fi} className="text-xs font-bold flex flex-col text-center">
                        <span className="text-gray-500 font-normal">{f.label}</span>
                        <span>{f.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Mobile About Section */}
        <section id="about" className="py-14 px-4 bg-gradient-to-br from-slate-100 to-blue-100">
          <div className="text-center mb-10">
            <h2 className="font-bold text-[#b5d33c] text-3xl mb-4">About Go VV</h2>
            <p className="font-medium text-black text-lg max-w-4xl mx-auto">Pioneering urban mobility in India.</p>
          </div>

          {/* Mission & Vision */}
          <div className="space-y-6 mb-12">
            <Card className={`${glassCardStyle} p-6`}>
              <CardHeader>
                <CardTitle className="font-bold text-[#b5d33c] text-xl mb-3">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-medium text-gray-700 text-sm">To revolutionize urban transportation in India with smart, sustainable electric bicycles that empower people and protect our environment.</p>
              </CardContent>
            </Card>
            <Card className={`${glassCardStyle} p-6`}>
              <CardHeader>
                <CardTitle className="font-bold text-[#b5d33c] text-xl mb-3">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-medium text-gray-700 text-sm">To become India's leading electric mobility brand, transforming cities into cleaner, more livable spaces.</p>
              </CardContent>
            </Card>
          </div>

          {/* Our Values */}
          <h3 className="font-bold text-black text-2xl text-center mb-6">Our Values</h3>
          <div className="grid grid-cols-2 gap-4 mb-10">
            {values.map((value, vi) => (
              <Card key={vi} className={`${glassCardStyle} p-4 text-center hover:scale-105 transition-transform`}>
                <CardHeader>
                  <CardTitle className="font-bold text-[#b5d33c] text-sm mb-2">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium text-gray-700 text-xs">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Our Team */}
          <h3 className="font-bold text-black text-2xl text-center mb-6">Our Team</h3>
          <div className="grid grid-cols-2 gap-4 mb-10">
            {team.map((member, mi) => (
              <Card key={mi} className={`${glassCardStyle} p-4 text-center`}>
                <CardHeader>
                  <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-[#b5d33c] text-white font-bold text-sm mb-2">{member.initials}</div>
                  <CardTitle className="font-bold text-black text-sm">{member.name}</CardTitle>
                  <div className="text-[#b5d33c] text-xs font-semibold">{member.role}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-xs">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Our Impact */}
          <h3 className="font-bold text-black text-2xl text-center mb-6">Our Impact</h3>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, si) => (
              <Card key={si} className={`${glassCardStyle} p-4 text-center`}>
                <CardContent>
                  <div className="font-bold text-[#b5d33c] text-2xl mb-1">{stat.number}</div>
                  <div className="text-black text-xs">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Mobile Blog Section */}
        <section id="blog" className="py-14 px-4 bg-gradient-to-br from-blue-100 to-slate-50">
          <div className="text-center mb-10">
            <h2 className="font-bold text-[#b5d33c] text-3xl mb-4">Latest Updates</h2>
            <p className="font-medium text-black text-lg max-w-4xl mx-auto">Stay informed about electric mobility innovations.</p>
          </div>
          <div className="space-y-6">
            {blog.map((post, bi) => (
              <Card key={bi} className={`${glassCardStyle} p-4 hover:scale-105 transition-transform cursor-pointer`}>
                <CardHeader>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-[#b5d33c] text-xs">{post.date}</span>
                    <span className="font-medium text-gray-600 text-xs">{post.readTime}</span>
                  </div>
                  <CardTitle className="font-bold text-black text-lg mb-2">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm mb-3">{post.preview}</p>
                  <button className="font-bold text-[#b5d33c] hover:text-black transition-colors text-sm">Read More →</button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Mobile Customize Section */}
        <section id="customize" className="py-14 px-4">
          <div className="text-center mb-10">
            <h2 className="font-bold text-[#b5d33c] text-3xl mb-4">Customize Your Ride</h2>
            <p className="font-medium text-black text-lg max-w-3xl mx-auto">Personalize your GoVV bike with colors and accessories.</p>
          </div>
          <div className="space-y-8">
            <Card className={`${glassCardStyle} p-6`}>
              <CardHeader>
                <CardTitle className="font-bold text-black text-xl mb-4">Color Options</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: "Lime Green", color: "#b5d33c" },
                    { name: "Ocean Blue", color: "#2563eb" },
                    { name: "Sunset Orange", color: "#ea580c" },
                    { name: "Midnight Black", color: "#000000" }
                  ].map((option, oi) => (
                    <div key={oi} className="text-center cursor-pointer hover:scale-110 transition-transform">
                      <div className="w-10 h-10 rounded-full mx-auto mb-2 border-2 border-gray-300" style={{ backgroundColor: option.color }} />
                      <span className="font-medium text-black text-xs">{option.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className={`${glassCardStyle} p-6`}>
              <CardHeader>
                <CardTitle className="font-bold text-black text-xl mb-4">Accessories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    "LED Headlight Kit",
                    "Phone Mount",
                    "Cargo Basket",
                    "Security System",
                    "Comfort Seat",
                    "Extended Battery"
                  ].map((acc, ai) => (
                    <div key={ai} className="flex justify-between items-center p-2 bg-white/10 rounded-lg cursor-pointer hover:bg-white/20 transition">
                      <span className="font-medium text-black text-sm">{acc}</span>
                      <button className="font-bold text-[#b5d33c] text-xs hover:text-black transition">Add +</button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className={`${glassCardStyle} p-6 text-center`}>
              <CardContent>
                <img src="/figmaAssets/vector-121.svg" alt="Custom Bike Preview" className="w-full max-w-xs mx-auto h-auto mb-4" />
                <h3 className="font-bold text-black text-lg mb-2">Your Custom GoVV</h3>
                <p className="text-gray-700 mb-4 text-sm">Preview your personalized electric bike.</p>
                <button className={`${glassCardStyle} px-6 py-2 font-bold text-black hover:scale-105 transition text-sm`}>Start Customizing</button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Mobile Footer */}
        <footer className="bg-gradient-to-br from-blue-50 to-slate-100 py-12 px-4 mt-8 border-t border-white/20">
          <div className="text-center space-y-6">
            <div className="font-bold text-black text-2xl mb-4">GoVV E-BIKE</div>
            <p className="font-medium text-gray-700 mb-6 text-sm max-w-md mx-auto">
              Pioneering the future of urban mobility in India with smart, sustainable electric bicycles.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex justify-center space-x-4 mb-6">
              {["F","T","I","L"].map((s,i) => (
                <div key={i} className={`${glassCardStyle} w-10 h-10 flex items-center justify-center cursor-pointer hover:scale-110 transition`}>
                  <span className="font-bold text-black text-sm">{s}</span>
                </div>
              ))}
            </div>

            {/* Quick Links */}
            <div className="mb-6">
              <h4 className="font-bold text-black text-base mb-3">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2 max-w-xs mx-auto">
                {[...leftNavItems, ...rightNavItems].map((link, i) => (
                  <a key={i} href={link.href} className="font-medium text-gray-700 hover:text-[#b5d33c] transition text-sm">
                    {link.text}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="mb-6">
              <h4 className="font-bold text-black text-base mb-3">Contact Us</h4>
              <div className="space-y-2 font-medium text-gray-700 text-sm">
                <div>📍 Bangalore, India</div>
                <div>📞 +91 98765 43210</div>
                <div>✉️ hello@govv.in</div>
                <div>🕒 Mon-Sat 9AM-6PM</div>
              </div>
            </div>

            <div className="border-t border-white/20 pt-6 text-center text-sm font-medium text-gray-700">
              <div className="mb-4">© 2025 GoVV E-Bike. All rights reserved.</div>
              <div className="flex justify-center gap-4 text-xs">
                <a href="#" className="hover:text-[#b5d33c] transition">Privacy Policy</a>
                <a href="#" className="hover:text-[#b5d33c] transition">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
