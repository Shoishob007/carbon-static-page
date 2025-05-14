"use client";

import { useState, useEffect } from "react";
import { ref, get, set } from "firebase/database";
import database from "@/firebaseConfig";

export default function Countdown() {
  const DB_KEY = "launchDate";

  const [launchDate, setLaunchDate] = useState(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Fetch the launch date from Firebase
  useEffect(() => {
    const fetchLaunchDate = async () => {
      try {
        const snapshot = await get(ref(database, DB_KEY));
        if (snapshot.exists()) {
          setLaunchDate(new Date(snapshot.val()));
          console.log("Launch date fetched from Firebase:", snapshot.val());
        } else {
          console.error("Launch date not found in Firebase.");
        }
      } catch (error) {
        console.error("Error fetching launch date:", error);
      }
    };

    fetchLaunchDate();
  }, []);

  // Countdown logic
  useEffect(() => {
    if (!launchDate) return;

    const calculateTimeLeft = () => {
      const now = new Date();
      const distance = launchDate.getTime() - now.getTime();

      if (distance <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      };
    };

    const updateCountdown = () => {
      setTimeLeft(calculateTimeLeft());
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [launchDate]);

  // Function to update the launch date in Firebase
  // const updateLaunchDate = async (newDate) => {
  //   try {
  //     await set(ref(database, DB_KEY), newDate.toISOString());
  //     setLaunchDate(newDate);
  //     console.log("Launch date updated successfully to:", newDate.toISOString());
  //   } catch (error) {
  //     console.error("Error updating launch date:", error);
  //   }
  // };

  return (
    <div className="flex flex-col items-center my-8">
      {launchDate ? (
        <>
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
          {/* <button
            onClick={() => updateLaunchDate(new Date("2025-06-31T00:00:00Z"))}
            className="mt-4 px-4 py-2 bg-emerald-600 text-white rounded-lg shadow hover:bg-emerald-700"
          >
            Update Launch Date to 2025-06-31
          </button> */}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}