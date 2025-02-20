'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
            <NavLink href="#about">Tentang Kami</NavLink>
            <NavLink href="#services">Layanan</NavLink>
            <NavLink href="#contact">Kontak</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Menu</span>
            <div className="w-6 h-6 flex flex-col justify-around">
              <span className="w-full h-0.5 bg-foreground"></span>
              <span className="w-full h-0.5 bg-foreground"></span>
              <span className="w-full h-0.5 bg-foreground"></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <MobileNavLink href="#about">Tentang Kami</MobileNavLink>
            <MobileNavLink href="#services">Layanan</MobileNavLink>
            <MobileNavLink href="#contact">Kontak</MobileNavLink>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <motion.a
    href={href}
    whileHover={{ scale: 1.05 }}
    className="text-foreground/80 hover:text-foreground"
  >
    {children}
  </motion.a>
);

const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <motion.a
    href={href}
    whileTap={{ scale: 0.95 }}
    className="block px-3 py-2 text-base font-medium text-foreground/80 hover:text-foreground"
  >
    {children}
  </motion.a>
); 