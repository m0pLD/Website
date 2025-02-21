"use client";
import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion, useScroll, useSpring } from "framer-motion";

// Data layanan
const services = [
  {
    id: 1,
    title: "Perpajakan",
    description: `Perpajakan adalah komponen penting dalam semua operasi bisnis, dan sistem perpajakan di Indonesia memiliki banyak tantangan unik.`,
    items: [
      "Pendampingan dalam berbagai tahap proses sengketa pajak",
      "Uji tuntas perpajakan",
      "Layanan konsultasi pajak",
      "Kepatuhan pajak",
      "Dokumentasi Transfer Pricing",
      "Layanan perpajakan lainnya",
    ],
    icon: "📊",
  },
  {
    id: 2,
    title: "Konsultasi Manajemen",
    description: `Meningkatkan kinerja bisnis dan penggunaan teknologi informasi yang efektif adalah prioritas yang selalu dibutuhkan.`,
    items: [
      "Strategi dan perencanaan bisnis",
      "Mengelola transformasi skala besar",
      "Manajemen perubahan",
      "Konsultasi pengadaan",
    ],
    icon: "💼",
  },
  {
    id: 3,
    title: "Layanan TI",
    description: "Solusi TI komprehensif untuk kebutuhan bisnis modern.",
    items: [
      "Jaringan",
      "Implementasi Software Akuntansi",
      "Konsultan TI",
      "Strategi dan kinerja TI",
      "Konsultasi proyek TI",
      "Konsultasi ERP, konsolidasi dan business intelligence",
      "Perlindungan informasi & ketahanan bisnis",
    ],
    icon: "💻",
  },
  {
    id: 4,
    title: "Layanan Akuntansi",
    description: "Solusi akuntansi profesional untuk bisnis Anda.",
    items: [
      "Penyusunan laporan keuangan",
      "Pembukuan dan jasa akuntansi",
      "Pemulihan catatan akuntansi",
      "Konsultasi akuntansi",
      "Perancangan sistem informasi akuntansi",
    ],
    icon: "📈",
  },
  {
    id: 5,
    title: "Layanan Penggajian",
    description: "Solusi manajemen penggajian yang efisien.",
    items: ["Penyusunan layanan penggajian", "Persiapan pajak karyawan"],
    icon: "💰",
  },
];

export default function ServicesPage() {
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
                <span className="gradient-text">Layanan Kami</span>
              </motion.h1>
              <motion.p 
                className="text-lg text-muted"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Solusi lengkap untuk kebutuhan teknologi dan bisnis Anda
              </motion.p>
            </div>
          </motion.div>
        </motion.section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    type: "spring",
                    bounce: 0.4
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  className={`p-8 bg-white/50 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 transition-all duration-300 w-full max-w-xl ${
                    services.length % 2 !== 0 && index === services.length - 1
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
                    {service.title}
                  </motion.h3>
                  <motion.p 
                    className="text-muted"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {service.description}
                  </motion.p>
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
                Pendekatan Kami
              </h2>
              <p className="text-muted mb-6">
                Pendekatan kami dalam perencanaan pajak bersifat
                multi-yurisdiksi dan mencakup seluruh spektrum pajak langsung,
                tidak langsung dan pajak pribadi. Kami, bersama dengan firma
                anggota lainnya yang tersebar di seluruh dunia, memberikan saran
                perpajakan nasional dan internasional yang berorientasi bisnis
                dan berkualitas.
              </p>
              <p className="text-muted">
                Para profesional pajak kami yang berpengalaman berasal dari
                berbagai negara dan latar belakang. Spesialisasi industri,
                keahlian lini layanan dan paparan internasional, bersama dengan
                pelatihan lanjutan yang berkelanjutan, membekali mereka untuk
                bekerja dengan klien kami dan menjadi penasihat tepercaya
                mereka.
              </p>
            </div>
          </div>
        </section>

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
