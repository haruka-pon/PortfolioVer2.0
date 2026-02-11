"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, Building2, Globe2 } from "lucide-react";

const CAREER_ITEMS = [
    {
        company: "株式会社ゲオネットワークス",
        period: "2024年4月 – 現在",
        role: "新卒入社 / エンジニア",
        description: [
            {
                title: "大規模ECサイトの保守・運用・開発",
                details: [
                    "月間流通規模の大きいECサイトの保守・改修業務を担当",
                    "既存機能の改善、バグ修正、パフォーマンス改善対応",
                    "新機能追加に伴う実装対応",
                    "API開発およびフロントエンド実装対応",
                    "SQLチューニング・データ整合性対応"
                ]
            },
            {
                title: "新規ECサイト開発プロジェクト",
                details: [
                    "新規ECサイトの立ち上げに参画",
                    "バックエンド・フロントエンド双方を対応"
                ]
            },
            {
                title: "大規模プロジェクト参画（約100億円規模）",
                details: [
                    "上流工程（要件整理・仕様検討）から下流工程（実装・テスト）まで一貫して担当",
                    "海外出張を実施し、現地調査を行いながらの開発対応",
                    "関係部署・現地担当者との調整業務",
                    "大規模案件における品質・スケジュール意識を持った開発"
                ]
            }
        ],
    },
];

export function CareerSection() {
    return (
        <section className="py-20 px-4">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold tracking-widest text-primary mb-4">
                        Career
                    </h2>
                    <p className="text-muted-foreground">
                        これまでの経歴と主な担当業務
                    </p>
                </motion.div>

                <div className="space-y-12">
                    {CAREER_ITEMS.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative pl-8 md:pl-0"
                        >
                            {/* Mobile Timeline Line */}
                            <div className="absolute left-0 top-0 bottom-0 w-px bg-primary/20 md:hidden" />

                            <div className="md:flex gap-8 items-start">
                                {/* Left: Date & Company */}
                                <div className="md:w-1/3 mb-6 md:mb-0 md:text-right relative">
                                    {/* Desktop Timeline Dot */}
                                    <div className="hidden md:block absolute top-2 -right-4 w-3 h-3 rounded-full bg-primary ring-4 ring-background" />

                                    <div className="sticky top-24">
                                        <h3 className="text-xl font-bold text-foreground flex items-center md:justify-end gap-2">
                                            <Building2 className="w-5 h-5 md:hidden" />
                                            {item.company}
                                        </h3>
                                        <div className="flex items-center md:justify-end gap-2 text-muted-foreground mt-1 mb-2">
                                            <Calendar className="w-4 h-4" />
                                            <span className="text-sm font-mono">{item.period}</span>
                                        </div>
                                        <Badge variant="outline" className="rounded-full px-3 py-1 border-primary/30 text-primary">
                                            {item.role}
                                        </Badge>
                                    </div>
                                </div>

                                {/* Right: Details */}
                                <div className="md:w-2/3 bg-background/50 backdrop-blur-sm rounded-2xl p-6 border border-border shadow-sm">
                                    <div className="space-y-8">
                                        {item.description.map((project, pIndex) => (
                                            <div key={pIndex} className="space-y-3">
                                                <h4 className="font-bold text-lg flex items-center gap-2 border-b border-dashed pb-2 border-primary/20">
                                                    <Briefcase className="w-4 h-4 text-primary" />
                                                    {project.title}
                                                </h4>
                                                <ul className="space-y-2">
                                                    {project.details.map((detail, dIndex) => (
                                                        <li key={dIndex} className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                                                            <span className="block w-1.5 h-1.5 mt-1.5 rounded-full bg-primary/40 shrink-0" />
                                                            {detail}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
