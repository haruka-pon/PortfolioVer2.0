"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Server, Layout, Settings, Palette, CheckCircle2 } from "lucide-react";

const SKILL_CATEGORIES = [
    {
        title: "Backend",
        icon: Server,
        color: "text-blue-500",
        skills: [
            "PHP (Laravel)",
            "REST API 設計・実装",
            "業務システム開発",
            "既存機能改修・保守",
            "バッチ処理実装",
            "MySQL (テーブル・クエリ設計)",
        ],
    },
    {
        title: "Frontend",
        icon: Layout,
        color: "text-pink-500",
        skills: [
            "React (TypeScript)",
            "SPA開発",
            "API連携画面実装",
            "JavaScript (ES6+)",
            "HTML5 / CSS3",
        ],
    },
    {
        title: "Server / Tools",
        icon: Settings,
        color: "text-green-500",
        skills: [
            "Node.js (API開発)",
            "Java (基礎理解)",
            "Google Apps Script (業務自動化)",
            "VBA (Excel業務効率化)",
        ],
    },
    {
        title: "Design",
        icon: Palette,
        color: "text-purple-500",
        skills: ["Figma", "Adobe XD", "デザインデータからのコーディング"],
    },
];

export function SkillsSection() {
    return (
        <section className="py-20 px-4 bg-muted/30">
            <div className="container mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 space-y-4"
                >
                    <h2 className="text-3xl md:text-4xl font-bold tracking-widest text-primary">
                        Services & Skills
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Laravelを中心としたWebアプリケーション開発を本業としており、<br className="hidden md:block" />
                        API設計からフロントエンド実装まで一貫して対応可能です。<br />
                        小規模開発、既存システム改修、業務効率化案件など柔軟に対応いたします。
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {SKILL_CATEGORIES.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full border-none shadow-md bg-background/60 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300">
                                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                                    <div className={`p-3 rounded-full bg-background shadow-inner ${category.color}`}>
                                        <category.icon className="w-6 h-6" />
                                    </div>
                                    <CardTitle className="text-xl font-bold tracking-wide">
                                        {category.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-3">
                                        {category.skills.map((skill) => (
                                            <li key={skill} className="flex items-start gap-2 text-muted-foreground">
                                                <CheckCircle2 className={`w-5 h-5 mt-0.5 shrink-0 ${category.color} opacity-70`} />
                                                <span className="text-sm md:text-base font-medium">{skill}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-12 text-center"
                >
                    <div className="inline-block px-6 py-4 bg-white/50 rounded-2xl border border-dashed border-primary/30">
                        <p className="text-sm font-bold text-primary/80">
                            🧩 バックエンドAPI構築からフロント画面実装まで、「Webシステム × 業務自動化」も対応可能です
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
