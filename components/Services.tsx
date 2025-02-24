"use client";
import { motion } from "framer-motion";

const services = [
  {
    title: "Industri Pertambangan",
    description: "Solusi komprehensif untuk sektor pertambangan dengan teknologi modern dan berkelanjutan.",
    icon: "⛏️",
    gradient: "from-blue-500 to-blue-700"
  },
  {
    title: "Industri Kimia",
    description: "Inovasi dalam industri kimia dan pengolahan dengan standar keamanan tertinggi.",
    icon: "🧪",
    gradient: "from-purple-500 to-purple-700"
  },
  {
    title: "Industri Energi",
    description: "Solusi energi berkelanjutan untuk masa depan yang lebih hijau.",
    icon: "⚡",
    gradient: "from-green-500 to-green-700"
  },
  {
    title: "Industri Pertanian",
    description: "Teknologi modern untuk pertanian yang efisien dan ramah lingkungan.",
    icon: "🌾",
    gradient: "from-yellow-500 to-yellow-700"
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-1/4 top-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -left-1/4 bottom-0 w-1/2 h-1/2 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">Layanan Kami</h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Solusi terbaik untuk kebutuhan bisnis Anda dengan teknologi modern dan berkelanjutan
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 dark:border-gray-700/50 h-full transition-all duration-300 hover:transform hover:-translate-y-2">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                <div className="relative z-10">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
