"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

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
    title: "contact.info.address.title",
    content: "contact.info.address.content",
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
    title: "contact.info.email.title",
    content: "contact.info.email.content",
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
    title: "contact.info.phone.title",
    content: "contact.info.phone.content",
    gradient: "from-green-500 to-green-700",
  },
];

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validasi email dengan regex
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Sanitasi input untuk mencegah XSS
  const sanitizeInput = (input: string) => {
    return input
      .replace(/[<>]/g, "") // Hapus tag HTML
      .replace(/[&]/g, "dan") // Ganti karakter khusus
      .trim(); // Hapus whitespace
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name) {
      newErrors.name = "contact.form.error.name.required";
    } else if (formData.name.length < 3) {
      newErrors.name = "contact.form.error.name.minLength";
    } else if (formData.name.length > 50) {
      newErrors.name = "contact.form.error.name.maxLength";
    }

    if (!formData.email) {
      newErrors.email = "contact.form.error.email.required";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "contact.form.error.email.invalid";
    }

    if (!formData.message) {
      newErrors.message = "contact.form.error.message.required";
    } else if (formData.message.length < 10) {
      newErrors.message = "contact.form.error.message.minLength";
    } else if (formData.message.length > 500) {
      newErrors.message = "contact.form.error.message.maxLength";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const sanitizedValue = sanitizeInput(value);
    setFormData((prev) => ({
      ...prev,
      [name]: sanitizedValue,
    }));
    // Clear error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = (type: "email" | "whatsapp") => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      if (!validateForm()) {
        setIsSubmitting(false);
        return;
      }

      const sanitizedData = {
        name: sanitizeInput(formData.name),
        email: formData.email.toLowerCase(),
        message: sanitizeInput(formData.message),
      };

      if (type === "whatsapp") {
        const message = `Halo saya ${sanitizedData.name}, ${sanitizedData.message} untuk informasi lebih lanjut bisa lewat email saya: ${sanitizedData.email}`;
        window.open(
          `https://wa.me/628873433309?text=${encodeURIComponent(message)}`,
          "_blank",
          "noopener,noreferrer"
        );
      } else {
        window.location.href = `mailto:info@example.com?subject=${encodeURIComponent(
          "Permintaan Kerjasama"
        )}&body=${encodeURIComponent(
          `Dari: ${sanitizedData.name}\nEmail: ${sanitizedData.email}\n\n${sanitizedData.message}`
        )}`;
      }
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute -right-1/4 top-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -left-1/4 bottom-0 w-1/2 h-1/2 bg-secondary/5 rounded-full blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">{t("contact.title")}</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.05,
                  duration: 0.3,
                  type: "spring",
                  stiffness: 300,
                }}
                whileHover={{ scale: 1.02, rotateY: 2 }}
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
                      {t(info.title)}
                    </h3>
                    <p className="text-muted">{t(info.content)}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="relative p-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 dark:border-gray-700/50"
          >
            <h3 className="text-2xl font-bold mb-6">
              {t("contact.form.title")}
            </h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium mb-2">
                  {t("contact.form.name.label")}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t("contact.form.name.placeholder")}
                  className={`w-full px-4 py-3 rounded-xl ${
                    errors.name ? "border-red-500" : "border-gray-200"
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{t(errors.name)}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  {t("contact.form.email.label")}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t("contact.form.email.placeholder")}
                  className={`w-full px-4 py-3 rounded-xl ${
                    errors.email ? "border-red-500" : "border-gray-200"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{t(errors.email)}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  {t("contact.form.message.label")}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t("contact.form.message.placeholder")}
                  rows={4}
                  className={`w-full px-4 py-3 rounded-xl ${
                    errors.message ? "border-red-500" : "border-gray-200"
                  }`}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {t(errors.message)}
                  </p>
                )}
                <p className="text-sm text-muted mt-1">
                  {formData.message.length}/500 {t("contact.form.characters")}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  onClick={() => handleSubmit("email")}
                  disabled={isSubmitting}
                  className="flex-1 btn btn-primary"
                >
                  {isSubmitting
                    ? t("contact.form.submit.sending")
                    : t("contact.form.submit.email")}
                </motion.button>
                <motion.button
                  onClick={() => handleSubmit("whatsapp")}
                  disabled={isSubmitting}
                  className="flex-1 btn btn-whatsapp"
                >
                  {t("contact.form.submit.whatsapp")}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
