"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  // Data untuk fitur-fitur
  const features = [
    {
      id: "expertise",
      title: t("about.expertise.title"),
      description: t("about.expertise.description"),
      icon: "🎯",
    },
    {
      id: "innovation",
      title: t("about.innovation.title"),
      description: t("about.innovation.description"),
      icon: "💡",
    },
    {
      id: "quality",
      title: t("about.quality.title"),
      description: t("about.quality.description"),
      icon: "✨",
    },
    {
      id: "support",
      title: t("about.support.title"),
      description: t("about.support.description"),
      icon: "🤝",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">{t("about.title")}</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            {t("about.description")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white/50 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
