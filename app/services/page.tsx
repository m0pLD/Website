"use client";
import React, { useEffect } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import { motion, useScroll, useSpring } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { useRouter } from "next/navigation";

// Data layanan
const services = {
  id: [
    {
      id: "tax",
      icon: "📊",
    },
    {
      id: "management",
      icon: "💼",
    },
    {
      id: "it",
      icon: "💻",
    },
    {
      id: "accounting",
      icon: "📈",
    },
    {
      id: "payroll",
      icon: "💰",
    },
  ],
  en: [
    {
      id: "tax",
      icon: "📊",
    },
    {
      id: "management",
      icon: "💼",
    },
    {
      id: "it",
      icon: "💻",
    },
    {
      id: "accounting",
      icon: "📈",
    },
    {
      id: "payroll",
      icon: "💰",
    },
  ],
};

export default function ServicesPage() {
  const { t, language } = useLanguage();
  const router = useRouter();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
        style={{ scaleX }}
      />
      <Navbar activePage="services" />
      <main className="flex min-h-screen flex-col pt-16">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative py-20 bg-gradient-to-b from-primary/5"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  type: "spring",
                  bounce: 0.4,
                }}
              >
                <motion.h1
                  className="text-4xl md:text-5xl font-bold mb-6"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{
                    duration: 0.5,
                    type: "spring",
                    bounce: 0.4,
                  }}
                >
                  <motion.span
                    className="gradient-text inline-block"
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.2 },
                    }}
                  >
                    {t("services.page.title")}
                  </motion.span>
                </motion.h1>
              </motion.div>

              <motion.p
                className="text-lg text-muted"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                {t("services.page.subtitle")}
              </motion.p>
            </div>
          </div>
        </motion.section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
              {services[language].map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.2,
                  }}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.2 },
                  }}
                  className={`p-8 bg-white/50 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 w-full max-w-xl ${
                    services[language].length % 2 !== 0 &&
                    index === services[language].length - 1
                      ? "md:col-span-2 md:max-w-xl"
                      : ""
                  }`}
                >
                  <motion.div
                    className="text-4xl mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", bounce: 0.6 }}
                  >
                    {service.icon}
                  </motion.div>
                  <motion.h3
                    className="text-xl font-semibold mb-3"
                    whileHover={{ scale: 1.02 }}
                  >
                    {t(`services.${service.id}.title`)}
                  </motion.h3>
                  <motion.p
                    className="text-muted"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.2 + 0.3,
                      duration: 0.5,
                    }}
                  >
                    {t(`services.${service.id}.description`)}
                  </motion.p>
                  <ul className="space-y-2 mt-4">
                    {t(`services.${service.id}.items`)
                      .split("|")
                      .map((item, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: index * 0.2 + idx * 0.1 + 0.5,
                            duration: 0.3,
                          }}
                          className="flex items-start space-x-2"
                        >
                          <span className="text-primary">•</span>
                          <span className="text-muted">{item}</span>
                        </motion.li>
                      ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <motion.h2
                className="text-3xl font-bold mb-6 text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {t("services.approach.title")}
              </motion.h2>
              <motion.p
                className="text-muted mb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {t("services.approach.description1")}
              </motion.p>
              <motion.p
                className="text-muted"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                {t("services.approach.description2")}
              </motion.p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Footer />
        </motion.div>
      </main>
    </>
  );
}
