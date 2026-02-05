"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TiltCard } from "@/components/ui/tilt-card";
import { Github } from "lucide-react";

// Placeholder data since no specific projects were listed
const PROJECTS = [
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

import { Globe, Layout, Database } from "lucide-react"; // Additional icons

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
                        <motion.div key={index} variants={item} className="h-full">
                            <TiltCard>
                                <Card className="h-full flex flex-col hover:border-primary/50 transition-colors duration-300 overflow-hidden relative group">
                                    <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                                        {project.category === "Frontend" && <Layout className="w-24 h-24" />}
                                        {project.category === "Full Stack" && <Database className="w-24 h-24" />}
                                        {project.category === "Data Viz" && <Globe className="w-24 h-24" />}
                                    </div>

                                    <CardHeader>
                                        <div className="flex justify-between items-start mb-2">
                                            <Badge variant="outline" className="mb-2 bg-primary/5 text-primary border-primary/20">
                                                {project.category}
                                            </Badge>
                                        </div>
                                        <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
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
                                    <CardFooter className="flex flex-col sm:flex-row gap-2 pt-4 border-t bg-muted/20">
                                        <Button variant="outline" size="sm" className="w-full" asChild>
                                            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                                                <Github className="mr-2 h-4 w-4" />
                                                Code
                                            </a>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </TiltCard>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
