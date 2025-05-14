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
    <div className="relative h-screen overflow-hidden">
      <CarbonBubbles />

      <div className="relative h-full flex items-center justify-center overflow-auto">
        <div className="text-center max-w-xl bg-transparent backdrop-blur-sm">
          <div className="logo mb-6">
            <FaLeaf className="text-5xl text-emerald-700 mx-auto" />
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-emerald-700 mb-6">
            Our Carbon Project
            <br />
            Is Coming Soon
          </h1>

          <Countdown />

          <p className="text-lg text-gray-700 mb-6">
            We're developing innovative solutions to reduce carbon footprints.
            Join our mission!
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-6">
            <div className="flex flex-col gap-4">
              <textarea
                placeholder="Have enquiry? Write to us..."
                className="w-full px-4 py-3 bg-white/90 rounded-lg border border-gray-300 focus:outline-none focus:ring-0 text-gray-800 min-h-[120px]"
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
            {status.message && (
              <p
                className={`mt-2 text-sm text-center ${status.success ? "text-emerald-600" : "text-red-600"}`}
              >
                {status.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
