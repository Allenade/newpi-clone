"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    initial: "K",
    name: "Kelvin",
    country: "Kenya",
    text: "Fantastic experience with PI coin trading!",
  },
  {
    initial: "J",
    name: "Joseph",
    country: "Angola",
    text: "Secure and fast transactions every time.",
  },
  {
    initial: "M",
    name: "Maria",
    country: "Brazil",
    text: "Best rates I've found for PI coins.",
  },
];

export function PopupTestimonial() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const showPopup = () => {
      setIsVisible(true);
      setTimeout(() => setIsVisible(false), 10000); // Hide after 10 seconds
    };

    const interval = setInterval(() => {
      showPopup();
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 35000); // Show every 35 seconds (25 seconds hidden + 10 seconds visible)

    showPopup(); // Show immediately on mount

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-4 left-4 bg-white rounded-lg shadow-lg p-4 max-w-sm z-50"
        >
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-full bg-[#583A89] flex items-center justify-center text-white font-semibold">
              {testimonials[currentTestimonial].initial}
            </div>
            <div>
              <p className="text-[#583A89] font-semibold">
                {testimonials[currentTestimonial].name}
                <span className="text-gray-500 font-normal ml-2">
                  {testimonials[currentTestimonial].country}
                </span>
              </p>
              <p className="text-gray-600 mt-1">
                {testimonials[currentTestimonial].text}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
