import { useLanguage } from "@/contexts/LanguageContext";

export const getTeamMembers = (t: (key: string) => string) => [
  {
    id: 1,
    name: "Liem Sian Liong",
    image: "/images/team/liem-sian-liong.png",
    description: t("team.member.liem-sian-liong.description"),
    social: {
      linkedin: "#",
      twitter: "#",
      email: "liem@example.com",
    },
  },
  {
    id: 2,
    name: "Budi Selamet Hartono",
    image: "/images/team/budi-selamet-hartono.png",
    description: t("team.member.budi-selamet.description"),
    social: {
      linkedin: "#",
      twitter: "#",
      email: "budi@example.com",
    },
  },
  {
    id: 3,
    name: "Soebyantoro",
    image: "/images/team/soebyantoro.png",
    description: t("team.member.soebyantoro.description"),
    social: {
      linkedin: "#",
      twitter: "#",
      email: "soeby@example.com",
    },
  },
  {
    id: 4,
    name: "Diana Kurnia",
    image: "/images/team/diana-kurnia.png",
    description:t("team.member.diana-kurnia.description"),
    social: {
      linkedin: "#",
      twitter: "#",
      email: "diana@example.com",
    },
  },
  {
    id: 6,
    name: "Hendro Susilo",
    image: "/images/team/hendro-susilo.png",
    description:t("team.member.hendro-susilo.description"),
    social: {
      linkedin: "#",
      twitter: "#",
      email: "hendro@example.com",
    },
  },
  {
    id: 7,
    name: "Chuie Linda",
    image: "/images/team/chuie-linda.png",
    description:t("team.member.chuie-linda.description"),
    social: {
      linkedin: "#",
      twitter: "#",
      email: "linda@example.com",
    },
  },
  {
    id: 8,
    name: "Siti Nurasiah",
    image: "/images/team/siti-nurasiah.png",
    description:t("team.member.siti-nurasiah.description"),
    social: {
      linkedin: "#",
      twitter: "#",
      email: "siti@example.com",
    },
  },
  {
    id: 9,
    name: "Irna Natalia",
    image: "/images/team/irna-natalia.png",
    description:t("team.member.irna-natalia.description"),
    social: {
      linkedin: "#",
      twitter: "#",
      email: "irna@example.com",
    },
  },
  {
    id: 10,
    name: "Yenny",
    image: "/images/team/andrian.png",
    description:t("team.member.yenny.description"),
    social: {
      linkedin: "#",
      twitter: "#",
      email: "yenny@example.com",
    },
  },
  {
    id: 11,
    name: "Andrian",
    image: "/images/team/andrian.png",
    description:t("team.member.andrian.description"),
    social: {
      linkedin: "#",
      twitter: "#",
      email: "liem@example.com",
    },
  },
  {
    id: 12,
    name: "Merianawati Sinatra",
    image: "/images/team/merianawati-sinatra.png",
    description:t("team.member.merianawati.description"),
    social: {
      linkedin: "#",
      twitter: "#",
      email: "merianawati@example.com",
    },
  },
  {
    id: 13,
    name: "Arin Avila",
    image: "/images/team/arin-avila.png",
    description:t("team.member.arin.description"),
    social: {
      linkedin: "#",
      twitter: "#",
      email: "liem@example.com",
    },
  },
];
