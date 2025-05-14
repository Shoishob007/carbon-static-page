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
      <div className="absolute w-[300px] h-[300px] bg-green-300 rounded-full opacity-50 top-[10%] left-[5%] animate-float-1" />
      <div className="absolute w-[150px] h-[150px] bg-teal-500 rounded-full opacity-50 bottom-[15%] right-[10%] animate-float-2" />
      <div className="absolute w-[200px] h-[200px] bg-lime-300 rounded-full opacity-50 top-[60%] left-[30%] animate-float-3" />
      <div className="absolute w-[100px] h-[100px] bg-cyan-400 rounded-full opacity-50 top-[20%] right-[25%] animate-float-4" />
    </div>
  );
}
