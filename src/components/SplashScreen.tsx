"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Membaca status apakah user sudah melihat splash screen di sesi ini
    const hasSeenSplash = sessionStorage.getItem("hasSeenSplash");
    if (hasSeenSplash) {
      setIsVisible(false);
      return;
    }

    // Durasi tampil splash screen 2 detik, lalu menghilang
    const timer = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem("hasSeenSplash", "true");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-forest-dark flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <h1 className="font-serif text-5xl md:text-7xl text-cream tracking-[0.2em] mb-4 font-bold">
              REAL.CO
            </h1>
            <div className="w-12 h-[1px] bg-gold mb-4 opacity-50" />
            <p className="text-gold text-[10px] md:text-xs tracking-[0.4em] uppercase font-bold">
              Hair Studio & Mini Cafe
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
