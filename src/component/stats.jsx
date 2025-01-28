"use client";

import { useEffect, useState } from "react";

export function Stats() {
  const [activeUser, setActiveUser] = useState(6420235);
  const [totalTrade, setTotalTrade] = useState(9113510);
  const [totalUSDT, setTotalUSDT] = useState(7061631252);

  // Animation states
  const [displayedActiveUser, setDisplayedActiveUser] = useState(0);
  const [displayedTotalTrade, setDisplayedTotalTrade] = useState(0);
  const [displayedTotalUSDT, setDisplayedTotalUSDT] = useState(0);

  useEffect(() => {
    // Animation duration in milliseconds
    const animationDuration = 5000; // 5 seconds
    const frameRate = 60; // Number of updates per second (60fps)
    const totalFrames = (animationDuration / 1000) * frameRate;

    const animateNumber = (start, end, setDisplayedValue) => {
      const increment = (end - start) / totalFrames;
      let currentFrame = 0;

      const interval = setInterval(() => {
        currentFrame++;
        const nextValue = Math.floor(start + increment * currentFrame);

        if (currentFrame >= totalFrames) {
          clearInterval(interval); // Stop animation when it's complete
          setDisplayedValue(end); // Ensure it ends exactly at the final value
        } else {
          setDisplayedValue(nextValue);
        }
      }, 1000 / frameRate); // Update based on frame rate
    };

    // Start the animation for each stat
    animateNumber(0, activeUser, setDisplayedActiveUser);
    animateNumber(0, totalTrade, setDisplayedTotalTrade);
    animateNumber(0, totalUSDT, setDisplayedTotalUSDT);
  }, [activeUser, totalTrade, totalUSDT]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUser((prev) => prev + 1); // Increment active users
      setTotalTrade((prev) => prev + 5); // Increment total trades
      setTotalUSDT((prev) => prev + 1000); // Increment total USDT paid
    }, 3600000); // Run every hour (3600000 ms)

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);
  return (
    <div className="max-w-3xl mx-auto mt-6 relative z-10">
      {/* White border container */}
      <div className="bg-white p-[1px] rounded-lg shadow-sm">
        {/* Purple stats container */}
        <div className="bg-[#9F4EE1] rounded-lg flex divide-x divide-white/20">
          <div className="flex-1 p-6 text-center">
            <div className="text-2xl font-bold text-white">
              <span>{displayedActiveUser}</span>
            </div>
            <div className="text-sm text-white/90">Active Users</div>
          </div>
          <div className="flex-1 p-6 text-center border-l border-white/20">
            <div className="text-2xl font-bold text-white">
              <span>{displayedTotalTrade}</span>
            </div>
            <div className="text-sm text-white/90">Total Trades</div>
          </div>
          <div className="flex-1 p-6 text-center border-l border-white/20">
            <div className="text-2xl font-bold text-white">
              <span>{displayedTotalUSDT}</span>
            </div>
            <div className="text-sm text-white/90">Total USDT Paid</div>
          </div>
        </div>
      </div>
    </div>
  );
}
