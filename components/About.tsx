"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const coreValues = [
  "Seeking the facts and providing insight",
  "Leading by example",
  "Being committed to our clients and communities",
  "Respecting the individual",
  "Communicating openly and honestly",
  "Acting with integrity",
  "Working together"
];

const businessLines = [
  "Automotive Products",
  "Banking",
  "Building and Construction",
  "Business Services",
  "Consumer Products",
  "Electronics",
  "Power Generation Company",
  "Financial Services",
  "Industrial Products",
  "Retail",
  "Transportation"
];

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
    <section id="about" className="py-20 relative overflow-hidden bg-gradient-to-br from-blue-50 to-green-50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-1/4 top-0 w-1/2 h-1/2 bg-blue-100/30 rounded-full blur-3xl" />
        <div className="absolute -left-1/4 bottom-0 w-1/2 h-1/2 bg-green-100/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-4 text-blue-600">Our Vision</h3>
            <p className="text-gray-700">
              To Become the light and the bridge for our client's successes
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-4 text-green-600">Our Mission</h3>
            <p className="text-gray-700">
              To Give and to be the Best and Complete Solution for Our Client's accounting, system, information technology and taxation needs
            </p>
          </motion.div>
        </div>

        {/* About Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
            About Us
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-gray-700">
            <p>
              At LD&Co, we are dedicated to providing tax consulting, IT consulting and financial services to businesses of all sizes. With a team of experienced tax professionals and a commitment to excellence, we have established ourselves as a trusted partner in navigating the complexities of taxation become more understandable.
            </p>
            <p>
              Good corporate governance is at the heart of what we stand for. We are committed to promote and embrace constructive reform and for helping clients follow good business practices, while increasing value for their stakeholders.
            </p>
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold mb-8 text-center text-gray-900">Core Values</h3>
          <p className="text-gray-700 text-center mb-8">
            Our increasingly complex environment makes it essential that we deliver clear value to our clients and stakeholders and continue to have clarity in our own values.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <p className="text-gray-800">{value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Business Lines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-8 text-center text-gray-900">Our Lines of Business</h3>
          <p className="text-gray-700 text-center mb-8">
            Individual client attention is a fundamental aspect of the professional services offered by us. While businesses in Indonesia may face a number of similar issues, the optimal solutions are not necessarily the same for each company or line of business.
          </p>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {businessLines.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white px-6 py-4 rounded-lg shadow hover:shadow-md transition-shadow text-center"
              >
                <p className="text-gray-800">{line}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
