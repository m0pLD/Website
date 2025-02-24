"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

export default function WhyChooseUs() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Side - 2 Images */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 space-y-4"
          >
            <div className="relative h-[250px] rounded-2xl overflow-hidden">
              <Image
                src="/images/about-01.png"
                alt="Professional Service"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[250px] rounded-2xl overflow-hidden">
              <Image
                src="/images/about-02.png"
                alt="Expert Team"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Middle - 1 Large Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="relative h-[520px] rounded-2xl overflow-hidden">
              <Image
                src="/images/about-03.png"
                alt="Global Reach"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 lg:pl-8"
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6 gradient-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Why Choose Us
            </motion.h2>

            <motion.p
              className="text-lg text-muted mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              We make our customers happy by giving best services.
            </motion.p>

            <motion.p
              className="text-muted mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We provide tax and advisory services, individually or on a
              combined basis, delivering globally consistent multi-disciplinary
              skills and capabilities, based on extensive industry knowledge, to
              all of our national and international clients.
            </motion.p>

            <motion.p
              className="text-muted"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              We respond to our clients' complex business challenges with a
              global approach to services that spans industry sectors and
              national boundaries. Global capability and consistency are central
              to the way we work.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
