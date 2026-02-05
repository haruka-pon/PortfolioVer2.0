import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export const SITE_CONFIG = {
  name: "Yagi Haruka",
  role: "Frontend / Backend Engineer",
  description: "A portfolio showcasing reliability and innovation through physical design.",
  url: "https://portfolio-ver2.vercel.app", // Placeholder
};

export const NAVIGATION_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Yagi Haruka",
  role: "Frontend Engineer / Backend",
  short_bio: "Available for reliability and innovation.",
  socials: [
    {
      name: "GitHub",
      href: "https://github.com/haruka-pon",
      icon: Github,
    },
    // Add others if provided, for now only GitHub is known
  ],
};

export const SKILLS = [
  { name: "PHP (Laravel)", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "Java", level: 80 },
  { name: "MySQL", level: 85 },
  { name: "HTML5/CSS3", level: 95 },
  { name: "JavaScript", level: 90 },
  { name: "React", level: 85 },
  { name: "VBA", level: 70 },
  { name: "Figma/XD", level: 75 },
];

export const CERTIFICATIONS = [
  "基本情報技術者",
  "AZ900 : Microsoft Azure Fundamentals",
  "Webデザイナー検定ベーシック",
  "マルチメディア検定ベーシック",
  "J検情報システム試験基本スキル",
  "J検情報活用試験2級",
];
