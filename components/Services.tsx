"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Services() {
  const { t } = useLanguage();

  // Data layanan
  const services = [
    {
      id: "tax",
      title: t("services.tax.title"),
      description: t("services.tax.description"),
      items: t("services.tax.items").split("|"),
      icon: "📊",
    },
    {
      id: "management",
      title: t("services.management.title"),
      description: t("services.management.description"),
      items: t("services.management.items").split("|"),
      icon: "💼",
    },
    {
      id: "it",
      title: t("services.it.title"),
      description: t("services.it.description"),
      items: t("services.it.items").split("|"),
      icon: "💻",
    },
    {
      id: "accounting",
      title: t("services.accounting.title"),
      description: t("services.accounting.description"),
      items: t("services.accounting.items").split("|"),
      icon: "📈",
    },
    {
      id: "payroll",
      title: t("services.payroll.title"),
      description: t("services.payroll.description"),
      items: t("services.payroll.items").split("|"),
      icon: "💰",
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
            <span className="gradient-text">{t("services.title")}</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                bounce: 0.4,
              }}
              whileHover={{
                scale: 1.02,
                rotateY: 5,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              className={`p-8 bg-white/50 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 transition-all duration-300 w-full max-w-xl ${
                // Menambahkan class col-span-2 dan mengatur max-width untuk item terakhir jika total item ganjil
                services.length % 2 !== 0 && index === services.length - 1
                  ? "md:col-span-2 md:max-w-2xl"
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
                className="text-muted mb-4"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {service.description}
              </motion.p>
              <ul className="space-y-2 text-muted">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
