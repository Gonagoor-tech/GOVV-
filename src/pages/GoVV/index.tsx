"use client";
import { useEffect, useState } from "react";
import { Desktop } from "./Desktop";
import { Mobile } from "./Mobile";

export const GoVVComponent = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen bg-gradient-to-br from-white to-slate-100" />;
  }

  return isMobile ? <Mobile /> : <Desktop />;
};

export default GoVVComponent;
