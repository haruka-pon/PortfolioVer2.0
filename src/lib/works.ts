import { Layout, Database, Globe, LucideIcon } from "lucide-react";

export interface Project {
    title: string;
    category: "Frontend" | "Full Stack" | "Data Viz";
    description: string;
    tags: string[];
    demoUrl: string;
    repoUrl: string;
}

export const PROJECTS: Project[] = [
    {
        title: "Portfolio Ver 2.0",
        category: "Frontend",
        description: "Next.jsとTailwind CSSを用いた、信頼性と革新性を融合させたポートフォリオサイト。",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
        demoUrl: "#",
        repoUrl: "https://github.com/haruka-pon/PortfolioVer2.0",
    },
    {
        title: "Task Management System",
        category: "Full Stack",
        description: "ReactとLaravelを使用したタスク管理アプリケーション。リアルタイム更新機能も実装。",
        tags: ["Laravel", "React", "MySQL", "Docker"],
        demoUrl: "#",
        repoUrl: "#",
    },
    {
        title: "E-Commerce Dashboard",
        category: "Data Viz",
        description: "売上分析や在庫管理を行う管理画面。データ可視化にこだわり、使いやすさを追求。",
        tags: ["Vue.js", "Node.js", "Chart.js"],
        demoUrl: "#",
        repoUrl: "#",
    },
];
