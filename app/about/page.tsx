"use client";
import React from "react";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";

// Tambahkan interface untuk experience
interface Experience {
  id: number;
  title: string;
  icon: string;
  items?: string[]; // items bersifat opsional
}

// Data anggota tim
// const teamMembers = [
//   {
//     id: 1,
//     name: "John Doe",
//     role: "CEO & Founder",
//     image: "/team/john-doe.jpg",
//     social: {
//       linkedin: "#",
//       twitter: "#",
//       email: "john@example.com",
//     },
//   },
//   {
//     id: 2,
//     name: "Jane Smith",
//     role: "CTO",
//     image: "/team/jane-smith.jpg",
//     social: {
//       linkedin: "#",
//       twitter: "#",
//       email: "jane@example.com",
//     },
//   },
//   {
//     id: 3,
//     name: "Mike Johnson",
//     role: "Head of Design",
//     image: "/team/mike-johnson.jpg",
//     social: {
//       linkedin: "#",
//       twitter: "#",
//       email: "mike@example.com",
//     },
//   },
// ];

export default function AboutPage() {
  const { t } = useLanguage();

  // Pindahkan array experiences ke dalam komponen
  const experiences: Experience[] = [
    {
      id: 1,
      title: t("industry.mining.title"),
      icon: "⛏️",
      items: [
        t("industry.mining.items.coal"),
        t("industry.mining.items.gold"),
        t("industry.mining.items.nickel"),
        t("industry.mining.items.mineral"),
        t("industry.mining.items.service"),
        t("industry.mining.items.contractor"),
      ],
    },
    {
      id: 2,
      title: t("industry.chemical.title"),
      icon: "🧪",
      items: [
        t("industry.chemical.items.petrochemical"),
        t("industry.chemical.items.basic"),
        t("industry.chemical.items.plastic"),
        t("industry.chemical.items.paint"),
        t("industry.chemical.items.fertilizer"),
        t("industry.chemical.items.oleochemical"),
      ],
    },
    {
      id: 3,
      title: t("industry.energy.title"),
      icon: "⚡",
      items: [
        t("industry.energy.items.powerplant"),
        t("industry.energy.items.oil"),
        t("industry.energy.items.renewable"),
        t("industry.energy.items.distribution"),
        t("industry.energy.items.transmission"),
        t("industry.energy.items.contractor"),
      ],
    },
    {
      id: 4,
      title: t("industry.agriculture.title"),
      icon: "🌾",
      items: [
        t("industry.agriculture.items.plantation"),
        t("industry.agriculture.items.agribusiness"),
        t("industry.agriculture.items.processing"),
        t("industry.agriculture.items.farm"),
        t("industry.agriculture.items.fishery"),
        t("industry.agriculture.items.food"),
      ],
    },
    {
      id: 5,
      title: t("industry.stationery.title"),
      icon: "📝",
    },
    {
      id: 6,
      title: t("industry.trading.title"),
      icon: "🏢",
    },
    {
      id: 7,
      title: t("industry.footwear.title"),
      icon: "👞",
    },
    {
      id: 8,
      title: t("industry.holding.title"),
      icon: "🏢",
    },
    {
      id: 9,
      title: t("industry.alloy.title"),
      icon: "🛞",
    },
    {
      id: 10,
      title: t("industry.construction.title"),
      icon: "🏗️",
    },
    {
      id: 11,
      title: t("industry.building.title"),
      icon: "🏪",
    },
    {
      id: 12,
      title: t("industry.ink.title"),
      icon: "🖨️",
    },
    {
      id: 13,
      title: t("industry.school.title"),
      icon: "🏫",
    },
    {
      id: 14,
      title: t("industry.packaging.title"),
      icon: "📦",
    },
    {
      id: 15,
      title: t("industry.supermarket.title"),
      icon: "🏪",
    },
    {
      id: 16,
      title: t("industry.spunbond.title"),
      icon: "🏭",
    },
    {
      id: 17,
      title: t("industry.cigarette.title"),
      icon: "🚬",
    },
    {
      id: 18,
      title: t("industry.printing.title"),
      icon: "🖨️",
    },
    {
      id: 19,
      title: t("industry.toys.title"),
      icon: "🧸",
    },
    {
      id: 20,
      title: t("industry.plastic.title"),
      icon: "🏭",
    },
    {
      id: 21,
      title: t("industry.coffee.title"),
      icon: "☕",
    },
    {
      id: 22,
      title: t("industry.sparepart.title"),
      icon: "🚛",
    },
    {
      id: 23,
      title: t("industry.cake.title"),
      icon: "🍰",
    },
    {
      id: 24,
      title: t("industry.motorcycle.title"),
      icon: "🏍️",
    },
    {
      id: 25,
      title: t("industry.oil.title"),
      icon: "🛢️",
    },
    {
      id: 26,
      title: t("industry.furniture.title"),
      icon: "🪑",
    },
    {
      id: 27,
      title: t("industry.wood.title"),
      icon: "🪵",
    },
    {
      id: 28,
      title: t("industry.cargo.title"),
      icon: "🚢",
    },
    {
      id: 29,
      title: t("industry.church.title"),
      icon: "⛪",
    },
    {
      id: 30,
      title: t("industry.flour.title"),
      icon: "🌾",
    },
    {
      id: 31,
      title: t("industry.tire.title"),
      icon: "🛞",
    },
    {
      id: 32,
      title: t("industry.bike.title"),
      icon: "🚲",
    },
    {
      id: 33,
      title: t("industry.chemical.material.title"),
      icon: "🧪",
    },
    {
      id: 34,
      title: t("industry.property.title"),
      icon: "🏢",
    },
  ];

  // const teamMembers = [
  //   {
  //     name: "John Doe",
  //     role: t("about.team.ceo"),
  //     image: "/path/to/image1.jpg",
  //   },
  //   {
  //     name: "Jane Smith",
  //     role: t("about.team.cto"),
  //     image: "/path/to/image2.jpg",
  //   },
  //   {
  //     name: "Mike Johnson",
  //     role: t("about.team.cfo"),
  //     image: "/path/to/image3.jpg",
  //   },
  // ];

  const stats = [
    {
      number: "10+",
      label: t("about.stats.years"),
    },
    {
      number: "500+",
      label: t("about.stats.clients"),
    },
    {
      number: "95%",
      label: t("about.stats.satisfaction"),
    },
    {
      number: "24/7",
      label: t("about.stats.support"),
    },
  ];

  return (
    <>
      <Navbar activePage="about" />
      <main className="flex min-h-screen flex-col">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-primary/5">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-4"
          >
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-center mb-6"
            >
              <span className="gradient-text">{t("about.page.title")}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-muted text-center max-w-3xl mx-auto"
            >
              {t("about.page.subtitle")}
            </motion.p>
          </motion.div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white/50 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-white/20"
              >
                <h2 className="text-2xl font-bold mb-4">
                  {t("about.vision.title")}
                </h2>
                <p className="text-muted">{t("about.vision.description")}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-white/50 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-white/20"
              >
                <h2 className="text-2xl font-bold mb-4">
                  {t("about.mission.title")}
                </h2>
                <p className="text-muted">{t("about.mission.description")}</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-gradient-to-b from-white to-primary/5">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 scroll-mt-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                {t("about.experience.title")}
              </h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                Pengalaman kami melayani berbagai sektor industri di Indonesia
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 1 + index * 0.05 }}
                  className="group p-6 bg-white/50 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl">{exp.icon}</div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                  </div>
                  {exp.items && exp.items.length > 0 && (
                    <ul className="space-y-2 ml-4">
                      {exp.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-muted"
                        >
                          <svg
                            className="w-4 h-4 text-primary flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <Footer />
        </motion.div>
      </main>
    </>
  );
}
