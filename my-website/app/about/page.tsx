"use client";
import React from "react";
import Footer from "@/components/Footer";
import * as framerMotion from "framer-motion";
const { motion } = framerMotion;

import Navbar from "@/components/Navbar";

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
  },
];

// Data pengalaman
const experiences = [
  {
    id: 1,
    title: "Engine and Power Generation Company",
    icon: "⚡",
  },
  {
    id: 2,
    title: "PET Plastic Manufacturing",
    icon: "🏭",
  },
  {
    id: 3,
    title: "PVC Manufacturing",
    icon: "🏭",
  },
  {
    id: 4,
    title: "Thermoforming Plastic Manufacturing",
    icon: "🏭",
  },
  {
    id: 5,
    title: "Stationery Trading and Manufacturing",
    icon: "📝",
  },
  {
    id: 6,
    title: "General Trading Company",
    icon: "🏢",
  },
  {
    id: 7,
    title: "Footwear Manufacturing",
    icon: "👞",
  },
  {
    id: 8,
    title: "Holding Company",
    icon: "🏢",
  },
  {
    id: 9,
    title: "Alloy Wheel Manufacturing",
    icon: "🛞",
  },
  {
    id: 10,
    title: "Construction",
    icon: "🏗️",
  },
  {
    id: 11,
    title: "Building Material Distributor",
    icon: "🏪",
  },
  {
    id: 12,
    title: "Ink Distributor",
    icon: "🖨️",
  },
  {
    id: 13,
    title: "School",
    icon: "🏫",
  },
  {
    id: 14,
    title: "Flexible Packaging Manufacturing",
    icon: "📦",
  },
  {
    id: 15,
    title: "Building Material Supermarket",
    icon: "🏪",
  },
  {
    id: 16,
    title: "Spunbond Manufacturing",
    icon: "🏭",
  },
  {
    id: 17,
    title: "Cigarette Distributor",
    icon: "🚬",
  },
  {
    id: 18,
    title: "Printing Company",
    icon: "🖨️",
  },
  {
    id: 19,
    title: "Toys Importer",
    icon: "🧸",
  },
  {
    id: 20,
    title: "Plastic Injection Molding Manufacturing",
    icon: "🏭",
  },
  {
    id: 21,
    title: "Coffee Manufacturing",
    icon: "☕",
  },
  {
    id: 22,
    title: "Vehicle and Heavy Equipment Sparepart Distributor",
    icon: "🚛",
  },
  {
    id: 23,
    title: "Cake Ingredients Distributor",
    icon: "🍰",
  },
  {
    id: 24,
    title: "Motorcycle Distributor",
    icon: "🏍️",
  },
  {
    id: 25,
    title: "Oil and Asphalt Distributor",
    icon: "🛢️",
  },
  {
    id: 26,
    title: "Furniture Manufacturing and Exportir",
    icon: "🪑",
  },
  {
    id: 27,
    title: "Wood Drying Manufacturing",
    icon: "🪵",
  },
  {
    id: 28,
    title: "Ship Cargo Expedition Service",
    icon: "🚢",
  },
  {
    id: 29,
    title: "Non-profit Organization (Church)",
    icon: "⛪",
  },
  {
    id: 30,
    title: "Flour Manufacturing",
    icon: "🌾",
  },
  {
    id: 31,
    title: "Tire Lining Manufacturing",
    icon: "🛞",
  },
  {
    id: 32,
    title: "Bike Manufacturing",
    icon: "🚲",
  },
  {
    id: 33,
    title: "Chemical Material Manufacturing",
    icon: "🧪",
  },
  {
    id: 34,
    title: "Property",
    icon: "🏢",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar activePage="about" />
      <main className="flex min-h-screen flex-col">
        {/* Hero Section */}
        <section className="relative py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Tentang Kami</span>
              </h1>
              <p className="text-lg text-muted">
                Membangun masa depan digital Indonesia dengan solusi teknologi
                inovatif
              </p>
            </motion.div>
          </div>
        </section>

        {/* About Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-6">Visi Kami</h2>
                <p className="text-lg text-muted mb-8">
                  Menjadi cahaya dan jembatan bagi kesuksesan klien kami
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold mb-6">Misi Kami</h2>
                <p className="text-lg text-muted mb-8">
                  Memberikan dan menjadi Solusi Terbaik dan Lengkap untuk
                  kebutuhan akuntansi, sistem, teknologi informasi, dan
                  perpajakan Klien Kami
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-12 bg-primary/5">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-center mb-12"
            >
              Nilai-Nilai Kami
            </motion.h2>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Inovasi",
                  desc: "Selalu mencari cara baru dan lebih baik dalam menyelesaikan tantangan",
                },
                {
                  title: "Integritas",
                  desc: "Menjunjung tinggi kejujuran dan etika dalam setiap tindakan",
                },
                {
                  title: "Kolaborasi",
                  desc: "Bekerja sama untuk mencapai hasil yang lebih baik",
                },
                {
                  title: "Dampak",
                  desc: "Fokus pada hasil yang memberikan nilai tambah bagi stakeholder",
                },
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 bg-background/80 rounded-xl border border-foreground/10"
                >
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-muted">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-20 bg-gradient-to-b from-white to-primary/5">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                Pengalaman Kami
              </h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                Berbagai industri yang telah kami layani dengan dedikasi dan
                profesionalisme
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group p-6 bg-white/50 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{exp.icon}</div>
                    <div className="flex-1">
                      <div className="text-xl font-semibold">
                        {String(exp.id).padStart(2, "0")}
                      </div>
                      <div className="text-muted">{exp.title}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
