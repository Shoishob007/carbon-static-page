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

      <div className="relative h-full flex items-center justify-center overflow-auto">
        <div className="text-center max-w-xl bg-transparent backdrop-blur-sm">
          <div className="logo my-3">
            <FaLeaf className="text-5xl text-emerald-700 mx-auto" />
          </div>

          <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-emerald-700 mb-2">
              Earth Renewal Initiatives
            </h1>
            <div className="relative w-full max-w-md h-1">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-700 to-transparent"></div>
            </div>
          </div>

          <p className="text-base sm:text-lg text-gray-700 mt-4">
            We are working one something impactful - a platform designed to help
            individuals and organizations calculate, reduce and offset their
            carbon footprint.
          </p>
          <p className="text-base sm:text-lg text-gray-700 mb-6">
            Whether you're taking your first steps in sustainability or
            deepening your climate journey, we're building the tools to support
            you.{" "}
          </p>

          <h2 className="text-lg sm:text-xl text-emerald-700 mb-4 font-semibold">
            Launching Soon!
          </h2>

          <Countdown />

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col gap-4">
              <textarea
                placeholder="Have enquiry? Write to us..."
                className="w-full px-4 py-3 bg-white/90 rounded-lg border border-gray-300 focus:outline-none focus:ring-0 text-gray-800 h-[100px]"
                required
                value={enquiry}
                onChange={(e) => setEnquiry(e.target.value)}
              />
              <button
                type="submit"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg transition-colors flex items-center justify-center"
              >
                Send Enquiry <FaPaperPlane className="ml-3" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
