"use client";
import React from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion, useScroll, useSpring } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { t } = useLanguage();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, rotate: -5 },
    visible: {
      y: 0,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  const fadeInUpVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        duration: 1,
      },
    },
  };

  const scaleInVariants = {
    hidden: { scale: 0.9, opacity: 0, rotateX: -15 },
    visible: {
      scale: 1,
      opacity: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        duration: 0.8,
      },
    },
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
        style={{ scaleX }}
      />
      <Navbar activePage="home" />
      <motion.main
        className="flex min-h-screen flex-col"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.02, rotateX: 5 }}
          transition={{ type: "spring", bounce: 0.4 }}
        >
          <Hero />
        </motion.div>

        <motion.section
          variants={itemVariants}
          className="py-20 bg-gradient-to-b from-primary/5"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring" }}
            className="container mx-auto px-4"
          >
            <motion.div
              className="max-w-3xl mx-auto text-center"
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ type: "spring", bounce: 0.4 }}
            >
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-6"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <span className="gradient-text">{t("hero.welcome")}</span>
              </motion.h2>
              <motion.p
                className="text-lg text-muted"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                {t("hero.subtitle")}
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.section>

        <motion.div
          variants={itemVariants}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          whileHover={{ scale: 1.02, rotateY: 2 }}
          transition={{ type: "spring", bounce: 0.4 }}
        >
          <About />
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          whileHover={{ scale: 1.02, rotateX: 2 }}
          transition={{ type: "spring", bounce: 0.4 }}
        >
          <Services />
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          whileHover={{ scale: 1.02, rotateY: -2 }}
          transition={{ type: "spring", bounce: 0.4 }}
        >
          <Contact />
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02, rotate: 1 }}
          transition={{ type: "spring", bounce: 0.4 }}
        >
          <Footer />
        </motion.div>
      </motion.main>
    </>
  );
}
