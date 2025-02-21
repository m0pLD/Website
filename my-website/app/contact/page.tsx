"use client";
import React, { useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const contactInfo = [
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    title: "Alamat",
    content: "Jl. Example No.123, Jakarta",
    gradient: "from-blue-500 to-blue-700",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "Email",
    content: "info@example.com",
    gradient: "from-purple-500 to-purple-700",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
    title: "Telepon",
    content: "+62 812-3456-7890",
    gradient: "from-green-500 to-green-700",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const constructWhatsAppMessage = () => {
    const message = `Halo saya ${formData.name}, ${formData.message} untuk infomasi lebih lanjut bisa lewat email saya :${formData.email}`;
    return encodeURIComponent(message);
  };

  return (
    <>
      <Navbar activePage="contact" />
      <main className="flex min-h-screen flex-col pt-16">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Hubungi Kami</span>
              </h1>
              <p className="text-lg text-muted">
                Kami siap membantu Anda. Hubungi kami untuk konsultasi dan
                informasi lebih lanjut mengenai layanan kami.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -right-1/4 top-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute -left-1/4 bottom-0 w-1/2 h-1/2 bg-secondary/5 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="group relative p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 dark:border-gray-700/50"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
                    />
                    <div className="relative z-10 flex items-center space-x-4">
                      <div
                        className={`p-3 bg-gradient-to-br ${info.gradient} text-white rounded-xl`}
                      >
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">
                          {info.title}
                        </h3>
                        <p className="text-muted">{info.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact Form */}
              <div className="relative p-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 dark:border-gray-700/50">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Masukkan nama lengkap"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Masukkan email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Pesan
                    </label>
                    <textarea
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Tulis pesan Anda"
                    ></textarea>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={`mailto:info@example.com?subject=Permintaan Kerjasama&body=${encodeURIComponent(
                        formData.message
                      )}`}
                      className="flex-1 inline-flex justify-center items-center px-6 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-xl transition-colors"
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      Kirim Email
                    </a>
                    <a
                      href={`https://wa.me/628873433309?text=${constructWhatsAppMessage()}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex justify-center items-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-xl transition-colors"
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                      </svg>
                      Chat WhatsApp
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
