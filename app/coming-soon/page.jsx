"use client";

import { useState } from "react";
import { sendComingSoonEnquiry } from "@/app/actions/sendComingSoonEmail";
import {
  FaLeaf,
  FaSeedling,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaPlane,
  FaPaperPlane,
} from "react-icons/fa";
import CarbonBubbles from "@/components/CarbonBubbles";
import Countdown from "@/components/Countdown";

export default function ComingSoon() {
  const [enquiry, setEnquiry] = useState("");
  const [status, setStatus] = useState({ success: null, message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("enquiry", enquiry);

    const { data, error } = await sendComingSoonEnquiry(formData);

    if (error) {
      setStatus({ success: false, message: error });
      return;
    }

    setStatus({
      success: true,
      message: "Thank you for your enquiry! We'll get back to you soon.",
    });
    setEnquiry("");
  };

  return (
    <div className="relative h-full overflow-auto">
      <CarbonBubbles />

      <div className="relative h-full flex justify-center overflow-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center w-full max-w-2xl lg:max-w-3xl bg-transparent backdrop-blur-md py-8 sm:py-12">
          <div className="logo my-3 sm:my-4">
            <FaLeaf className="text-6xl lg:text-7xl text-emerald-700 mx-auto" />
          </div>

          <div className="flex flex-col justify-center items-center px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-700 mb-2 sm:mb-3">
              Earth Renewal Initiatives
            </h1>
            <div className="relative w-full max-w-md h-1 lg:h-1.5 mt-2 sm:mt-3">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-700 to-transparent"></div>
            </div>
          </div>

          <div className="px-4 sm:px-6">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mt-6 mb-2 sm:mt-8 sm:mb-4 lg:mb-6">
              We are working on something impactful - a platform designed to help
              individuals and organizations calculate, reduce and offset their
              carbon footprint.
            </p>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-8 sm:mb-10">
              Whether you're taking your first steps in sustainability or
              deepening your climate journey, we're building the tools to support
              you.{" "}
            </p>

            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-emerald-700 mb-4 sm:mb-6 font-semibold">
              Launching Soon!
            </h2>

            <Countdown />

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-6 sm:mb-8">
              Together, we can restore the balance amongst people, progress and the planet. 
            </p>

            <form onSubmit={handleSubmit} className="max-w-md md:max-w-lg lg:max-w-xl mx-auto mb-4 sm:mb-6">
              <div className="flex flex-col gap-4 sm:gap-5">
                <textarea
                  placeholder="Have enquiry? Write to us..."
                  className="w-full px-4 py-3 bg-white/90 rounded-lg border border-gray-300 focus:outline-none focus:ring-0 text-gray-800 h-[100px] sm:h-[120px] md:h-[140px] lg:h-[150px] text-base sm:text-lg md:text-xl lg:text-2xl"
                  required
                  value={enquiry}
                  onChange={(e) => setEnquiry(e.target.value)}
                />
                <button
                  type="submit"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 sm:py-3 rounded-lg transition-colors flex items-center justify-center text-base sm:text-lg md:text-xl lg:text-2xl"
                >
                  Send Enquiry <FaPaperPlane className="ml-3" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}