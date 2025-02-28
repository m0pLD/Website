"use client";
import React from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { useState } from "react";

interface NavbarProps {
  activePage: string;
}

export default function Navbar({ activePage }: NavbarProps) {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = () => {
    setLanguage(language === "id" ? "en" : "id");
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-background/80 backdrop-blur-sm z-50 border-b border-foreground/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="font-bold text-xl">
            Your Logo
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className={`transition-colors ${
                activePage === "home"
                  ? "text-primary font-semibold"
                  : "text-foreground/80 hover:text-foreground"
              }`}
            >
              {t("nav.home")}
            </Link>
            <Link
              href="/about"
              className={`transition-colors ${
                activePage === "about"
                  ? "text-primary font-semibold"
                  : "text-foreground/80 hover:text-foreground"
              }`}
            >
              {t("nav.about")}
            </Link>
            <Link
              href="/team"
              className={`transition-colors ${
                activePage === "team"
                  ? "text-primary font-semibold"
                  : "text-foreground/80 hover:text-foreground"
              }`}
            >
              {t("nav.team")}
            </Link>
            <Link
              href="/services"
              className={`transition-colors ${
                activePage === "services"
                  ? "text-primary font-semibold"
                  : "text-foreground/80 hover:text-foreground"
              }`}
            >
              {t("nav.services")}
            </Link>
            <Link
              href="/contact"
              className={`transition-colors ${
                activePage === "contact"
                  ? "text-primary font-semibold"
                  : "text-foreground/80 hover:text-foreground"
              }`}
            >
              {t("nav.contact")}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <span className="sr-only">Menu</span>
            <div className="w-6 h-6 flex flex-col justify-around">
              <span className="w-full h-0.5 bg-foreground"></span>
              <span className="w-full h-0.5 bg-foreground"></span>
              <span className="w-full h-0.5 bg-foreground"></span>
            </div>
          </button>

          <motion.div
            className="flex items-center space-x-4"
            whileHover={{ scale: 1.05 }}
          >
            <button
              onClick={handleLanguageChange}
              className="px-3 py-1 rounded-md bg-primary/10 hover:bg-primary/20"
            >
              {language.toUpperCase()}
            </button>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className={`block px-3 py-2 text-base font-medium rounded-md ${
                  activePage === "home"
                    ? "text-primary bg-primary/5"
                    : "text-foreground/80 hover:text-foreground hover:bg-foreground/5"
                }`}
              >
                {t("nav.home")}
              </Link>
              <Link
                href="/about"
                className={`block px-3 py-2 text-base font-medium rounded-md ${
                  activePage === "about"
                    ? "text-primary bg-primary/5"
                    : "text-foreground/80 hover:text-foreground hover:bg-foreground/5"
                }`}
              >
                {t("nav.about")}
              </Link>
              <Link
                href="/team"
                className={`block px-3 py-2 text-base font-medium rounded-md ${
                  activePage === "team"
                    ? "text-primary bg-primary/5"
                    : "text-foreground/80 hover:text-foreground hover:bg-foreground/5"
                }`}
              >
                {t("nav.team")}
              </Link>
              <Link
                href="/services"
                className={`block px-3 py-2 text-base font-medium rounded-md ${
                  activePage === "services"
                    ? "text-primary bg-primary/5"
                    : "text-foreground/80 hover:text-foreground hover:bg-foreground/5"
                }`}
              >
                {t("nav.services")}
              </Link>
              <Link
                href="/contact"
                className={`block px-3 py-2 text-base font-medium rounded-md ${
                  activePage === "contact"
                    ? "text-primary bg-primary/5"
                    : "text-foreground/80 hover:text-foreground hover:bg-foreground/5"
                }`}
              >
                {t("nav.contact")}
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
