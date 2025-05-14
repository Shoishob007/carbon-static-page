"use client";

import { useState, useEffect } from "react";

export default function Countdown() {
  const [targetDate, setTargetDate] = useState(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const getOrSetTargetDate = () => {
      if (typeof window !== "undefined" && localStorage) {
        const storedDate = localStorage.getItem("targetDate");

        if (storedDate) {
          // stored date if it exists
          return new Date(storedDate);
        } else {
          // calculate a new target date
          const newTargetDate = new Date();
          newTargetDate.setMonth(newTargetDate.getMonth() + 1);
          localStorage.setItem("targetDate", newTargetDate.toISOString());
          return newTargetDate;
        }
      }
      return null;
    };

    const date = getOrSetTargetDate();
    if (date) {
      setTargetDate(date);
    }
  }, []);

  useEffect(() => {
    if (!targetDate) return;

    const calculateTimeLeft = () => {
      const now = new Date();
      const distance = targetDate - now;

      if (distance <= 0) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
      }

      return {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      };
    };

    const updateCountdown = () => {
      setTimeLeft(calculateTimeLeft());
    };

    // first calculation and setting the interval
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex flex-col items-center my-8">
      {targetDate ? (
        <div className="flex justify-center gap-4">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div
              key={unit}
              className="bg-white/90 p-4 rounded-lg min-w-20 shadow-sm flex flex-col items-center"
            >
              <span className="block text-3xl font-bold text-emerald-700">
                {String(Math.floor(value)).padStart(2, "0")}
              </span>
              <span className="text-xs uppercase text-gray-600">{unit}</span>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
