"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTeamMembers } from "@/data/teamData";

export default function OurTeam() {
  const { t } = useLanguage();

  // Get top 3 team members
  const topMembers = getTeamMembers(t).slice(0, 3);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            {t("home.team.title")}
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            {t("home.team.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="group relative bg-white/50 backdrop-blur-xl rounded-2xl overflow-hidden shadow-xl border border-white/20 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[4/5] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 z-10" />
                <motion.div
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:scale-110 transition-transform duration-500"
                />
                {member.image && (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                )}
              </div>

              {/* Content Container */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm text-white/80 line-clamp-3">
                  {member.description}
                </p>

                {/* Social Links */}
                <div className="flex items-center space-x-4 mt-4">
                  {Object.entries(member.social).map(([platform, link]) => (
                    <motion.a
                      key={platform}
                      href={link}
                      whileHover={{ scale: 1.1 }}
                      className="text-white/80 hover:text-primary transition-all"
                    >
                      {platform === "linkedin" && (
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      )}
                      {platform === "twitter" && (
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                        </svg>
                      )}
                      {platform === "email" && (
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      )}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-12"
        >
          <Link
            href="/team"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            {t("home.team.viewAll")}
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
