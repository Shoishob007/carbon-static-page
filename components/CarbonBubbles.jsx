"use client";

import { useEffect, useState } from "react";

export default function CarbonBubbles() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] bg-green-300 rounded-full opacity-50 top-[10%] sm:top-[25%] left-[5%] sm:left-[5%] animate-float-1" />
      <div className="absolute w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px] bg-teal-500 rounded-full opacity-50 bottom-[10%] sm:bottom-[15%] right-[10%] sm:right-[16%] animate-float-2" />
      <div className="absolute w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px] bg-lime-300 rounded-full opacity-50 top-[65%] sm:top-[80%] left-[15%] sm:left-[15%] animate-float-3" />
      <div className="absolute w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] bg-cyan-400 rounded-full opacity-50 top-[5%] sm:top-[18%] right-[5%] sm:right-[10%] animate-float-4" />
    </div>
  );
}