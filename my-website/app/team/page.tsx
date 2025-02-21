"use client";
import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion, useScroll, useSpring } from "framer-motion";

// Data anggota tim
const teamMembers = [
  {
    id: 1,
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
    id: 2,
    name: "Jane Smith",
    role: "CTO",
    image: "/team/jane-smith.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "jane@example.com",
    },
    description:
      "Ahli dalam pengembangan solusi teknologi dan transformasi digital.",
  },
  {
    id: 3,
    name: "Mike Johnson",
    role: "Head of Design",
    image: "/team/mike-johnson.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "mike@example.com",
    },
    description:
      "Spesialis UI/UX dengan fokus pada pengalaman pengguna yang optimal.",
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
          className="relative py-20"
        >
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="container mx-auto px-4"
          >
            <motion.div 
              className="max-w-2xl mx-auto text-center mb-16"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", bounce: 0.4 }}
            >
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <span className="gradient-text">Tim Kami</span>
              </motion.h1>
              <motion.p 
                className="text-lg text-muted"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                Bertemu dengan para profesional berbakat yang mendorong kesuksesan
                perusahaan kami
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Team Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 300,
                  }}
                  whileHover={{ 
                    scale: 1.03,
                    rotateY: 5,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                  }}
                  className="group relative bg-white/50 backdrop-blur-xl rounded-2xl overflow-hidden shadow-lg border border-white/20"
                >
                  {/* Member Image */}
                  <motion.div 
                    className="aspect-square relative overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-full h-full bg-gradient-to-br from-primary/5 to-secondary/5" />
                  </motion.div>

                  {/* Member Info */}
                  <motion.div 
                    className="p-6 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <motion.h3 
                      className="text-xl font-semibold mb-2"
                      whileHover={{ scale: 1.05 }}
                    >
                      {member.name}
                    </motion.h3>
                    <motion.p 
                      className="text-primary mb-4"
                      whileHover={{ y: -2 }}
                    >
                      {member.role}
                    </motion.p>

                    {/* Social Links */}
                    <motion.div 
                      className="flex justify-center space-x-4"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {Object.entries(member.social).map(([platform, link]) => (
                        <motion.a
                          key={platform}
                          href={link}
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                          className="text-muted hover:text-primary transition-colors"
                        >
                          {platform === 'linkedin' && (
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                          )}
                        </motion.a>
                      ))}
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
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
