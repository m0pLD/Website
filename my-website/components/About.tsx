'use client';
import { motion } from 'framer-motion';

const stats = [
  { number: "10+", label: "Tahun Pengalaman", color: "from-blue-500 to-blue-700" },
  { number: "100+", label: "Proyek Selesai", color: "from-green-500 to-green-700" },
  { number: "50+", label: "Tim Ahli", color: "from-purple-500 to-purple-700" },
  { number: "20+", label: "Negara", color: "from-yellow-500 to-yellow-700" }
];

export default function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 top-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -right-1/4 bottom-0 w-1/2 h-1/2 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 gradient-text">Tentang Kami</h2>
            <p className="text-muted text-lg mb-6">
              Perusahaan kami adalah pemimpin dalam memberikan solusi bisnis yang
              inovatif dan berkelanjutan. Dengan pengalaman bertahun-tahun, kami
              telah membangun reputasi yang kuat dalam industri.
            </p>
            <p className="text-muted text-lg mb-8">
              Visi kami adalah menjadi mitra terpercaya dalam pengembangan bisnis
              global dengan mengedepankan inovasi dan keberlanjutan.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-primary to-primary-dark text-white rounded-full font-medium shadow-lg shadow-primary/25"
            >
              Pelajari Lebih Lanjut
            </motion.button>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 dark:border-gray-700/50"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-2 gradient-text">{stat.number}</h3>
                  <p className="text-muted">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}