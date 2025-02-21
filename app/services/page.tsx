"use client";
import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import { motion, useScroll, useSpring } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

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
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="container mx-auto px-4"
          >
            <div className="max-w-3xl mx-auto text-center">
              <motion.h1
                className="text-4xl md:text-5xl font-bold mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", bounce: 0.4 }}
              >
                <span className="gradient-text">
                  {t("services.page.title")}
                </span>
              </motion.h1>
              <motion.p
                className="text-lg text-muted"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                {t("services.page.subtitle")}
              </motion.p>
            </div>
          </motion.div>
        </motion.section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
              {services[language].map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    type: "spring",
                    bounce: 0.4,
                  }}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    boxShadow:
                      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                  className={`p-8 bg-white/50 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 transition-all duration-300 w-full max-w-xl ${
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
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {t(`services.${service.id}.description`)}
                  </motion.p>
                  <ul className="space-y-2 mt-4">
                    {t(`services.${service.id}.items`)
                      .split("|")
                      .map((item, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
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
              <h2 className="text-3xl font-bold mb-6 text-center">
                {t("services.approach.title")}
              </h2>
              <p className="text-muted mb-6">
                {t("services.approach.description1")}
              </p>
              <p className="text-muted">
                {t("services.approach.description2")}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <Contact />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Footer />
        </motion.div>
      </main>
    </>
  );
}
