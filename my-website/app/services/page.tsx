import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

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
  return (
    <>
      <Navbar activePage="services" />
      <main className="flex min-h-screen flex-col pt-16">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Layanan Kami</span>
              </h1>
              <p className="text-lg text-muted">
                Kami menyediakan layanan perpajakan dan konsultasi, baik secara
                individual maupun terpadu, memberikan layanan multi-disiplin
                yang konsisten secara global, berdasarkan pengetahuan industri
                yang luas, untuk semua klien nasional dan internasional kami.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className={`p-8 bg-white/50 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 transition-all duration-300 hover:-translate-y-2 w-full max-w-xl ${
                    services.length % 2 !== 0 && index === services.length - 1
                      ? "md:col-span-2 md:max-w-xl"
                      : ""
                  }`}
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                  <p className="text-muted mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.items.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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

        <Footer />
      </main>
    </>
  );
}
