"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

// Placeholder data since no specific projects were listed
const PROJECTS = [
    {
        title: "Portfolio Ver 2.0",
        description: "Next.jsとTailwind CSSを用いた、信頼性と革新性を融合させたポートフォリオサイト。",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
        demoUrl: "#",
        repoUrl: "https://github.com/haruka-pon/PortfolioVer2.0",
    },
    {
        title: "Task Management System",
        description: "ReactとLaravelを使用したタスク管理アプリケーション。リアルタイム更新機能も実装。",
        tags: ["Laravel", "React", "MySQL", "Docker"],
        demoUrl: "#",
        repoUrl: "#",
    },
    {
        title: "E-Commerce Dashboard",
        description: "売上分析や在庫管理を行う管理画面。データ可視化にこだわり、使いやすさを追求。",
        tags: ["Vue.js", "Node.js", "Chart.js"],
        demoUrl: "#",
        repoUrl: "#",
    },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

export function Projects() {
    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center gap-4 text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Projects</h2>
                    <p className="text-muted-foreground max-w-2xl">
                        これまでに開発したプロジェクトの一部をご紹介します。
                    </p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {PROJECTS.map((project, index) => (
                        <motion.div key={index} variants={item}>
                            <Card className="h-full flex flex-col hover:border-primary/50 transition-colors duration-300">
                                <CardHeader>
                                    <CardTitle>{project.title}</CardTitle>
                                    <CardDescription>{project.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter className="flex gap-2">
                                    <Button variant="outline" size="sm" className="w-full" asChild>
                                        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                                            <Github className="mr-2 h-4 w-4" />
                                            Code
                                        </a>
                                    </Button>
                                    <Button size="sm" className="w-full" asChild>
                                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                            <ExternalLink className="mr-2 h-4 w-4" />
                                            Demo
                                        </a>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
