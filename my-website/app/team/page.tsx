import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

// Data anggota tim
const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO & Founder",
    image: "/team/john-doe.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "john@example.com",
    },
    description:
      "Berpengalaman lebih dari 15 tahun dalam industri konsultan bisnis dan teknologi.",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "CTO",
    image: "/team/jane-smith.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "jane@example.com",
    },
    description:
      "Ahli dalam pengembangan solusi teknologi dan transformasi digital.",
  },
  {
    id: 3,
    name: "Mike Johnson",
    role: "Head of Design",
    image: "/team/mike-johnson.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "mike@example.com",
    },
    description:
      "Spesialis UI/UX dengan fokus pada pengalaman pengguna yang optimal.",
  },
  {
    id: 4,
    name: "Sarah Wilson",
    role: "Tax Consultant",
    image: "/team/sarah-wilson.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "sarah@example.com",
    },
    description:
      "Ahli perpajakan dengan pengalaman menangani berbagai kasus kompleks.",
  },
  {
    id: 5,
    name: "David Lee",
    role: "Financial Advisor",
    image: "/team/david-lee.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "david@example.com",
    },
    description:
      "Konsultan keuangan berpengalaman dalam perencanaan dan analisis bisnis.",
  },
  {
    id: 6,
    name: "John Doe",
    role: "CEO & Founder",
    image: "/team/john-doe.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "john@example.com",
    },
    description:
      "Berpengalaman lebih dari 15 tahun dalam industri konsultan bisnis dan teknologi.",
  },
  {
    id: 7,
    name: "John Doe",
    role: "CEO & Founder",
    image: "/team/john-doe.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "john@example.com",
    },
    description:
      "Berpengalaman lebih dari 15 tahun dalam industri konsultan bisnis dan teknologi.",
  },
  
  
  
  
];

export default function TeamPage() {
  return (
    <>
      <Navbar activePage="team" />
      <main className="flex min-h-screen flex-col pt-16">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Tim Kami</span>
              </h1>
              <p className="text-lg text-muted">
                Bertemu dengan para profesional berbakat yang mendorong
                kesuksesan perusahaan kami. Setiap anggota tim membawa keahlian
                unik dan dedikasi untuk memberikan layanan terbaik.
              </p>
            </div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {teamMembers.map((member, index) => (
                <div
                  key={member.id}
                  className={`p-8 bg-white/50 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 transition-all duration-300 hover:-translate-y-2 w-full max-w-sm ${
                    teamMembers.length % 2 !== 0 &&
                    index === teamMembers.length - 1
                      ? "md:col-span-2 lg:col-span-1"
                      : ""
                  }`}
                >
                  {/* Profile Image */}
                  <div className="relative mb-6">
                    <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5">
                      {member.image && (
                        <div className="w-full h-full bg-primary/5" />
                      )}
                    </div>
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-end justify-center pb-4">
                      <div className="flex space-x-3">
                        <a
                          href={member.social.linkedin}
                          className="p-2 bg-white/20 rounded-full hover:bg-white/40 transition-colors"
                        >
                          <svg
                            className="w-5 h-5 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </a>
                        <a
                          href={member.social.twitter}
                          className="p-2 bg-white/20 rounded-full hover:bg-white/40 transition-colors"
                        >
                          <svg
                            className="w-5 h-5 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                          </svg>
                        </a>
                        <a
                          href={`mailto:${member.social.email}`}
                          className="p-2 bg-white/20 rounded-full hover:bg-white/40 transition-colors"
                        >
                          <svg
                            className="w-5 h-5 text-white"
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
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-2">
                      {member.name}
                    </h3>
                    <p className="text-primary mb-3">{member.role}</p>
                    <p className="text-muted">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
