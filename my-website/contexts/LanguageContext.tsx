"use client";
import React, { createContext, useContext, useState } from "react";

type Language = "id" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  id: {
    // Navbar
    "nav.home": "Beranda",
    "nav.about": "Tentang",
    "nav.services": "Layanan",
    "nav.team": "Tim",
    "nav.contact": "Kontak",

    // Hero
    "hero.welcome": "Selamat Datang di Website Kami",
    "hero.subtitle":
      "Kami adalah partner terpercaya untuk solusi teknologi dan konsultasi bisnis Anda",

    // Hero buttons
    "hero.start_now": "Mulai Sekarang",
    "hero.learn_more": "Pelajari Lebih Lanjut",
    "hero.global_solutions": "Solusi Global",

    // About
    "about.title": "Tentang Kami",
    "about.description":
      "Membangun masa depan digital Indonesia dengan solusi teknologi inovatif",

    // About Features
    "about.expertise.title": "Keahlian",
    "about.expertise.description":
      "Tim ahli kami memiliki pengalaman luas dalam berbagai bidang teknologi",

    "about.innovation.title": "Inovasi",
    "about.innovation.description":
      "Selalu menghadirkan solusi terbaru dan terdepan untuk klien kami",

    "about.quality.title": "Kualitas",
    "about.quality.description":
      "Berkomitmen untuk memberikan layanan berkualitas tinggi",

    "about.support.title": "Dukungan",
    "about.support.description":
      "Dukungan 24/7 untuk memastikan kepuasan klien kami",

    "about.page.title": "Tentang Kami",
    "about.page.subtitle":
      "Membangun masa depan digital Indonesia dengan solusi teknologi inovatif dan layanan profesional",
    "about.vision.title": "Visi",
    "about.vision.description":
      "Menjadi pemimpin dalam transformasi digital dan solusi teknologi di Indonesia",
    "about.mission.title": "Misi",
    "about.mission.description":
      "Memberikan solusi teknologi terbaik dan layanan profesional yang mendorong pertumbuhan bisnis klien kami",
    "about.team.ceo": "CEO & Founder",
    "about.team.cto": "CTO",
    "about.team.cfo": "CFO",
    "about.stats.years": "Tahun Pengalaman",
    "about.stats.clients": "Klien Puas",
    "about.stats.satisfaction": "Tingkat Kepuasan",
    "about.stats.support": "Dukungan Pelanggan",

    // About Experience
    "about.experience.title": "Pengalaman Kami",
    "about.experience.subtitle":
      "Berbagai industri yang telah kami layani dengan dedikasi dan profesionalisme",

    // Services
    "services.title": "Layanan Kami",
    "services.subtitle":
      "Solusi lengkap untuk kebutuhan teknologi dan bisnis Anda",

    "services.tax.title": "Perpajakan",
    "services.tax.description":
      "Perpajakan adalah komponen penting dalam semua operasi bisnis, dan sistem perpajakan di Indonesia memiliki banyak tantangan unik.",
    "services.tax.items":
      "Pendampingan dalam berbagai tahap proses sengketa pajak|Uji tuntas perpajakan|Layanan konsultasi pajak|Kepatuhan pajak|Dokumentasi Transfer Pricing|Layanan perpajakan lainnya",

    "services.management.title": "Konsultasi Manajemen",
    "services.management.description":
      "Meningkatkan kinerja bisnis dan penggunaan teknologi informasi yang efektif adalah prioritas yang selalu dibutuhkan.",
    "services.management.items":
      "Strategi dan perencanaan bisnis|Mengelola transformasi skala besar|Manajemen perubahan|Konsultasi pengadaan",

    "services.it.title": "Layanan TI",
    "services.it.description":
      "Solusi TI komprehensif untuk kebutuhan bisnis modern.",
    "services.it.items":
      "Jaringan|Implementasi Software Akuntansi|Konsultan TI|Strategi dan kinerja TI|Konsultasi proyek TI|Konsultasi ERP|Perlindungan informasi & ketahanan bisnis",

    "services.accounting.title": "Layanan Akuntansi",
    "services.accounting.description":
      "Solusi akuntansi profesional untuk bisnis Anda.",
    "services.accounting.items":
      "Penyusunan laporan keuangan|Pembukuan dan jasa akuntansi|Pemulihan catatan akuntansi|Konsultasi akuntansi|Perancangan sistem informasi akuntansi",

    "services.payroll.title": "Layanan Penggajian",
    "services.payroll.description": "Solusi manajemen penggajian yang efisien.",
    "services.payroll.items":
      "Penyusunan layanan penggajian|Persiapan pajak karyawan",

    // Contact
    "contact.title": "Hubungi Kami",
    "contact.subtitle":
      "Kami siap membantu Anda. Hubungi kami untuk konsultasi dan informasi lebih lanjut",
    "contact.name": "Nama Lengkap",
    "contact.email": "Email",
    "contact.message": "Pesan",
    "contact.send": "Kirim",
    "contact.address.title": "Alamat",
    "contact.address.content": "Jl. Example No.123, Jakarta",
    "contact.email.title": "Email",
    "contact.email.content": "info@example.com",
    "contact.phone.title": "Telepon",
    "contact.phone.content": "+62 812-3456-7890",
    "contact.form.title": "Kirim Pesan",
    "contact.form.name": "Nama Lengkap",
    "contact.form.email": "Email",
    "contact.form.message": "Pesan",
    "contact.form.send": "Kirim",
    "contact.form.sending": "Mengirim...",
    "contact.form.whatsapp": "Chat WhatsApp",

    // Footer
    "footer.rights": "Hak Cipta Dilindungi",
    "footer.privacy": "Kebijakan Privasi",
    "footer.terms": "Syarat & Ketentuan",

    // Team Page
    "team.page.title": "Tim Kami",
    "team.page.subtitle":
      "Bertemu dengan para profesional yang berdedikasi di balik kesuksesan kami",
    "team.leadership.title": "Tim Kepemimpinan",
    "team.leadership.subtitle":
      "Dipimpin oleh para ahli dengan pengalaman luas di industri",
    "team.experts.title": "Tim Ahli",
    "team.experts.subtitle":
      "Profesional berpengalaman yang siap membantu Anda",
    "team.join.title": "Bergabung dengan Tim Kami",
    "team.join.subtitle":
      "Jadilah bagian dari perjalanan kami dalam membangun masa depan",
    "team.join.button": "Lihat Lowongan",

    // Team Roles
    "team.role.ceo": "CEO & Founder",
    "team.role.cto": "Chief Technology Officer",
    "team.role.cfo": "Chief Financial Officer",
    "team.role.design": "Kepala Desain",
    "team.role.dev": "Lead Developer",
    "team.role.marketing": "Marketing Manager",

    // Services Page
    "services.page.title": "Layanan Kami",
    "services.page.subtitle":
      "Solusi lengkap untuk kebutuhan teknologi dan bisnis Anda",
    "services.cta.title": "Butuh Bantuan?",
    "services.cta.subtitle":
      "Konsultasikan kebutuhan bisnis Anda dengan tim kami",
    "services.cta.button": "Hubungi Kami",

    // Services Contact
    "services.contact.title": "Informasi Kontak",
    "services.contact.address": "Jl. Example No.123, Jakarta",
    "services.contact.email": "info@example.com",
    "services.contact.phone": "+62 812-3456-7890",
    "services.form.title": "Kirim Pesan",
    "services.form.name": "Nama Lengkap",
    "services.form.email": "Email",
    "services.form.message": "Pesan",
    "services.form.send": "Kirim",
    "services.form.whatsapp": "Chat WhatsApp",

    // Contact Page
    "contact.hero.title": "Hubungi Kami",
    "contact.hero.subtitle":
      "Kami siap membantu. Hubungi kami untuk konsultasi.",

    // Contact Info Section
    "contact.info.address.title": "Alamat",
    "contact.info.address.content": "Jl. Example No.123, Jakarta",
    "contact.info.email.title": "Email",
    "contact.info.email.content": "info@example.com",
    "contact.info.phone.title": "Telepon",
    "contact.info.phone.content": "+62 812-3456-7890",

    // Contact Form
    "contact.form.name.label": "Nama Lengkap",
    "contact.form.name.placeholder": "Masukkan nama lengkap",
    "contact.form.email.label": "Email",
    "contact.form.email.placeholder": "Masukkan email",
    "contact.form.message.label": "Pesan",
    "contact.form.message.placeholder": "Tulis pesan Anda",
    "contact.form.characters": "karakter",
    "contact.form.submit.email": "Kirim Email",
    "contact.form.submit.sending": "Mengirim...",
    "contact.form.submit.whatsapp": "Chat WhatsApp",

    // Form Validation
    "contact.form.error.name.required": "Nama harus diisi",
    "contact.form.error.name.minLength": "Nama minimal 3 karakter",
    "contact.form.error.name.maxLength": "Nama terlalu panjang",
    "contact.form.error.email.required": "Email harus diisi",
    "contact.form.error.email.invalid": "Format email tidak valid",
    "contact.form.error.message.required": "Pesan harus diisi",
    "contact.form.error.message.minLength":
      "Pesan terlalu pendek (minimal 10 karakter)",
    "contact.form.error.message.maxLength":
      "Pesan terlalu panjang (maksimal 500 karakter)",

    // Services Approach
    "services.approach.title": "Pendekatan Kami",
    "services.approach.description1":
      "Pendekatan kami dalam perencanaan pajak bersifat multi-yurisdiksi dan mencakup seluruh spektrum pajak langsung, tidak langsung dan pajak pribadi. Kami, bersama dengan firma anggota lainnya yang tersebar di seluruh dunia, memberikan saran perpajakan nasional dan internasional yang berorientasi bisnis dan berkualitas.",
    "services.approach.description2":
      "Tim kami terdiri dari profesional yang sangat terlatih dan berpengalaman. Kombinasi keahlian lini layanan dan paparan internasional, bersama dengan pelatihan lanjutan yang berkelanjutan, membekali mereka untuk bekerja dengan klien kami dan menjadi penasihat tepercaya mereka.",
  },
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.team": "Team",
    "nav.contact": "Contact",

    // Hero
    "hero.welcome": "Welcome to Our Website",
    "hero.subtitle":
      "We are your trusted partner for technology solutions and business consulting",

    // Hero buttons
    "hero.start_now": "Get Started",
    "hero.learn_more": "Learn More",
    "hero.global_solutions": "Global Solutions",

    // About
    "about.title": "About Us",
    "about.description":
      "Building Indonesia's digital future with innovative technology solutions",

    // About Features
    "about.expertise.title": "Expertise",
    "about.expertise.description":
      "Our expert team has extensive experience in various technology fields",

    "about.innovation.title": "Innovation",
    "about.innovation.description":
      "Always delivering the latest and leading solutions for our clients",

    "about.quality.title": "Quality",
    "about.quality.description": "Committed to providing high-quality services",

    "about.support.title": "Support",
    "about.support.description":
      "24/7 support to ensure our clients' satisfaction",

    "about.page.title": "About Us",
    "about.page.subtitle":
      "Building Indonesia's digital future with innovative technology solutions and professional services",
    "about.vision.title": "Vision",
    "about.vision.description":
      "To become a leader in digital transformation and technology solutions in Indonesia",
    "about.mission.title": "Mission",
    "about.mission.description":
      "To provide the best technology solutions and professional services that drive our clients' business growth",
    "about.team.ceo": "CEO & Founder",
    "about.team.cto": "CTO",
    "about.team.cfo": "CFO",
    "about.stats.years": "Years Experience",
    "about.stats.clients": "Happy Clients",
    "about.stats.satisfaction": "Satisfaction Rate",
    "about.stats.support": "Customer Support",

    // About Experience
    "about.experience.title": "Our Experience",
    "about.experience.subtitle":
      "Various industries we have served with dedication and professionalism",

    // Services
    "services.title": "Our Services",
    "services.subtitle":
      "Complete solutions for your technology and business needs",

    "services.tax.title": "Taxation",
    "services.tax.description":
      "Taxation is a crucial component in all business operations, and Indonesia's tax system presents unique challenges.",
    "services.tax.items":
      "Assistance in various stages of tax dispute process|Tax due diligence|Tax consulting services|Tax compliance|Transfer Pricing Documentation|Other tax services",

    "services.management.title": "Management Consulting",
    "services.management.description":
      "Improving business performance and effective use of information technology are always needed priorities.",
    "services.management.items":
      "Business strategy and planning|Managing large-scale transformation|Change management|Procurement consulting",

    "services.it.title": "IT Services",
    "services.it.description":
      "Comprehensive IT solutions for modern business needs.",
    "services.it.items":
      "Networking|Accounting Software Implementation|IT Consulting|IT strategy and performance|IT project consulting|ERP consulting|Information protection & business resilience",

    "services.accounting.title": "Accounting Services",
    "services.accounting.description":
      "Professional accounting solutions for your business.",
    "services.accounting.items":
      "Financial statement preparation|Bookkeeping and accounting services|Accounting records recovery|Accounting consultation|Accounting information system design",

    "services.payroll.title": "Payroll Services",
    "services.payroll.description": "Efficient payroll management solutions.",
    "services.payroll.items": "Payroll service setup|Employee tax preparation",

    // Contact
    "contact.title": "Contact Us",
    "contact.subtitle":
      "We're ready to help. Contact us for consultation and more information",
    "contact.name": "Full Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Send",
    "contact.address.title": "Address",
    "contact.address.content": "Example St. No.123, Jakarta",
    "contact.email.title": "Email",
    "contact.email.content": "info@example.com",
    "contact.phone.title": "Phone",
    "contact.phone.content": "+62 812-3456-7890",
    "contact.form.title": "Send Message",
    "contact.form.name": "Full Name",
    "contact.form.email": "Email",
    "contact.form.message": "Message",
    "contact.form.send": "Send",
    "contact.form.sending": "Sending...",
    "contact.form.whatsapp": "WhatsApp Chat",

    // Footer
    "footer.rights": "All Rights Reserved",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms & Conditions",

    // Team Page
    "team.page.title": "Our Team",
    "team.page.subtitle": "Meet the dedicated professionals behind our success",
    "team.leadership.title": "Leadership Team",
    "team.leadership.subtitle":
      "Lead by industry experts with extensive experience",
    "team.experts.title": "Expert Team",
    "team.experts.subtitle": "Experienced professionals ready to help you",
    "team.join.title": "Join Our Team",
    "team.join.subtitle": "Be part of our journey in building the future",
    "team.join.button": "View Openings",

    // Team Roles
    "team.role.ceo": "CEO & Founder",
    "team.role.cto": "Chief Technology Officer",
    "team.role.cfo": "Chief Financial Officer",
    "team.role.design": "Head of Design",
    "team.role.dev": "Lead Developer",
    "team.role.marketing": "Marketing Manager",

    // Services Page
    "services.page.title": "Our Services",
    "services.page.subtitle":
      "Complete solutions for your technology and business needs",
    "services.cta.title": "Need Help?",
    "services.cta.subtitle": "Consult your business needs with our team",
    "services.cta.button": "Contact Us",

    // Services Contact
    "services.contact.title": "Contact Information",
    "services.contact.address": "Example St. No.123, Jakarta",
    "services.contact.email": "info@example.com",
    "services.contact.phone": "+62 812-3456-7890",
    "services.form.title": "Send Message",
    "services.form.name": "Full Name",
    "services.form.email": "Email",
    "services.form.message": "Message",
    "services.form.send": "Send",
    "services.form.whatsapp": "WhatsApp Chat",

    // Contact Page
    "contact.hero.title": "Contact Us",
    "contact.hero.subtitle":
      "We're here to help. Get in touch with us for consultation.",

    // Contact Info Section
    "contact.info.address.title": "Address",
    "contact.info.address.content": "Example St. No.123, Jakarta",
    "contact.info.email.title": "Email",
    "contact.info.email.content": "info@example.com",
    "contact.info.phone.title": "Phone",
    "contact.info.phone.content": "+62 812-3456-7890",

    // Contact Form
    "contact.form.name.label": "Full Name",
    "contact.form.name.placeholder": "Enter your full name",
    "contact.form.email.label": "Email",
    "contact.form.email.placeholder": "Enter your email",
    "contact.form.message.label": "Message",
    "contact.form.message.placeholder": "Write your message",
    "contact.form.characters": "characters",
    "contact.form.submit.email": "Send Email",
    "contact.form.submit.sending": "Sending...",
    "contact.form.submit.whatsapp": "WhatsApp Chat",

    // Form Validation
    "contact.form.error.name.required": "Name is required",
    "contact.form.error.name.minLength": "Name must be at least 3 characters",
    "contact.form.error.name.maxLength": "Name is too long",
    "contact.form.error.email.required": "Email is required",
    "contact.form.error.email.invalid": "Invalid email format",
    "contact.form.error.message.required": "Message is required",
    "contact.form.error.message.minLength":
      "Message is too short (minimum 10 characters)",
    "contact.form.error.message.maxLength":
      "Message is too long (maximum 500 characters)",

    // Services Approach
    "services.approach.title": "Our Approach",
    "services.approach.description1":
      "Our approach to tax planning is multi-jurisdictional and covers the entire spectrum of direct, indirect and personal taxes. Together with our member firms worldwide, we provide business-oriented and quality national and international tax advice.",
    "services.approach.description2":
      "Our team consists of highly trained and experienced professionals. The combination of service line expertise and international exposure, along with continuous advanced training, equips them to work with our clients and be their trusted advisors.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("id");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.id] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
