"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full h-[100vh]">
      {/* Video Background Container */}
      <div className="absolute inset-0">
        <div className="relative h-full w-full overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute h-full w-full object-cover md:object-fill"
            style={{
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              minWidth: "100%",
              minHeight: "100%",
            }}
            poster="/images/video-poster.jpg"
          >
            <source src="/videos/LD-VideoHome.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-1 h-2 bg-white/70 rounded-full mt-2"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
}
