"use client";
import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion, useScroll, useSpring } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

// Data anggota tim
const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    role: "team.role.ceo",
    image: "/team/member1.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "john@example.com",
    },
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "team.role.cto",
    image: "/team/member2.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "jane@example.com",
    },
  },
  {
    id: 3,
    name: "Mike Johnson",
    role: "team.role.design",
    image: "/team/member3.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "mike@example.com",
    },
  },
  {
    id: 4,
    name: "Sarah Wilson",
    role: "Tax Consultant",
    image: "/team/sarah-wilson.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "sarah@example.com",
    },
    description:
      "Ahli perpajakan dengan pengalaman menangani berbagai kasus kompleks.",
  },
  {
    id: 5,
    name: "David Lee",
    role: "Financial Advisor",
    image: "/team/david-lee.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "david@example.com",
    },
    description:
      "Konsultan keuangan berpengalaman dalam perencanaan dan analisis bisnis.",
  },
  {
    id: 6,
    name: "John Doe",
    role: "CEO & Founder",
    image: "/team/john-doe.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "john@example.com",
    },
    description:
      "Berpengalaman lebih dari 15 tahun dalam industri konsultan bisnis dan teknologi.",
  },
  {
    id: 7,
    name: "John Doe",
    role: "CEO & Founder",
    image: "/team/john-doe.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "john@example.com",
    },
    description:
      "Berpengalaman lebih dari 15 tahun dalam industri konsultan bisnis dan teknologi.",
  },
];

export default function TeamPage() {
  const { t } = useLanguage();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40,
  });

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
        style={{ scaleX }}
      />
      <Navbar activePage="team" />
      <main className="flex min-h-screen flex-col pt-16">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="relative py-20 bg-gradient-to-b from-primary/5"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="container mx-auto px-4"
          >
            <motion.h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
              <span className="gradient-text">{t("team.page.title")}</span>
            </motion.h1>
            <motion.p className="text-lg text-muted text-center max-w-3xl mx-auto">
              {t("team.page.subtitle")}
            </motion.p>
          </motion.div>
        </motion.section>

        {/* Team Members Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4">
                {t("team.leadership.title")}
              </h2>
              <p className="text-muted">{t("team.leadership.subtitle")}</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/50 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20"
                >
                  <div className="relative w-full aspect-square mb-6 rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-muted mb-4">{t(member.role)}</p>
                  <div className="flex space-x-4">
                    {Object.entries(member.social).map(([platform, link]) => (
                      <a
                        key={platform}
                        href={link}
                        className="text-muted hover:text-primary transition-colors"
                      >
                        {platform}
                      </a>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Team Section */}
        <section className="py-20 bg-gradient-to-b from-white to-primary/5">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-4">
                {t("team.join.title")}
              </h2>
              <p className="text-muted mb-8">{t("team.join.subtitle")}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-primary text-white rounded-full font-medium"
              >
                {t("team.join.button")}
              </motion.button>
            </motion.div>
          </div>
        </section>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
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
