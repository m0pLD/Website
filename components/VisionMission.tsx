"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function VisionMission() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-b from-white to-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            {t("home.vision.title")}
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            {t("home.vision.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow relative overflow-hidden group"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative z-10">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-4 text-primary">
                {t("about.vision.title")}
              </h3>
              <p className="text-muted leading-relaxed">
                {t("about.vision.description")}
              </p>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow relative overflow-hidden group"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative z-10">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-4 text-primary">
                {t("about.mission.title")}
              </h3>
              <p className="text-muted leading-relaxed">
                {t("about.mission.description")}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
