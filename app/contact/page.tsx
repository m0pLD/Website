"use client";
import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import { motion, useScroll, useSpring } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ContactPage() {
  const { language, setLanguage, t } = useLanguage();
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
      <Navbar activePage="contact" />
      <main className="flex min-h-screen flex-col pt-16">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="relative py-20 bg-gradient-to-b from-primary/5"
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="container mx-auto px-4"
          >
            <motion.div
              className="max-w-3xl mx-auto text-center"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", bounce: 0.4, duration: 0.2 }}
            >
              <motion.h1
                className="text-4xl md:text-5xl font-bold mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <span className="gradient-text">{t("contact.hero.title")}</span>
              </motion.h1>
              <motion.p
                className="text-lg text-muted"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                {t("contact.hero.subtitle")}
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Contact Section */}
        <Contact />

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <Footer />
        </motion.div>
      </main>
    </>
  );
}
