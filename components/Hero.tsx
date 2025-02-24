"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";

export default function Hero() {
  const { t } = useLanguage();
  const [isTextVisible, setIsTextVisible] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video Background with Click Handler */}
      <div
        className="absolute inset-0 w-full h-full cursor-pointer"
        onClick={() => setIsTextVisible(true)}
      >
        <div
          className={`absolute inset-0 bg-black/40 z-10 transition-opacity duration-1000 ${
            isTextVisible ? "opacity-40" : "opacity-0"
          }`}
        />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/LD-VideoHome.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Click Instruction - shows only when text is not visible */}
        {!isTextVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute inset-0 z-20 flex items-center justify-center"
          >
            <div className="text-white text-center">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <svg
                  className="w-16 h-16 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-xl font-medium">Click to Continue</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Content - shows only after click */}
      {isTextVisible && (
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-black/60 backdrop-blur-sm p-8 rounded-2xl"
            >
              <motion.h1
                className="text-4xl md:text-6xl font-bold mb-6 text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {t("hero.welcome")}
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl text-white mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {t("hero.subtitle")}
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-primary text-white rounded-full font-medium shadow-lg hover:bg-primary-dark transition-colors"
                >
                  {t("hero.start_now")}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-white text-primary rounded-full font-medium shadow-lg hover:bg-gray-100 transition-colors"
                >
                  {t("hero.learn_more")}
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      )}

      {/* Scroll Indicator - shows only after text appears */}
      {isTextVisible && (
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      )}
    </section>
  );
}
