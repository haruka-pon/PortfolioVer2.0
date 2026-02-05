"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PROFILE, SKILLS, CERTIFICATIONS } from "@/lib/constants";

export function About() {
    return (
        <section id="about" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col gap-8"
                >
                    <div className="text-center max-w-2xl mx-auto space-y-4">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About Me</h2>
                        <p className="text-muted-foreground">{PROFILE.short_bio}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                        {/* Experience / Profile */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Background</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                                <p>
                                    フロントエンドからバックエンドまで幅広い技術領域をカバーするエンジニアとして活動しています。
                                    信頼性の高いシステム構築と、ユーザーの心を動かす革新的なUIデザインの両立を目指しています。
                                </p>
                                <p>
                                    新しい技術へのキャッチアップを欠かさず、常に最適なソリューションを提案できるよう心がけています。
                                </p>
                            </CardContent>
                        </Card>

                        {/* Certifications */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Certifications</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    {CERTIFICATIONS.map((cert, index) => (
                                        <li key={index} className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                            <span className="text-sm">{cert}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="mt-12">
                        <h3 className="text-xl font-bold mb-6 text-center">Technical Skills</h3>
                        <div className="flex flex-wrap justify-center gap-2">
                            {SKILLS.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <Badge variant="secondary" className="text-sm py-1 px-3">
                                        {skill.name}
                                    </Badge>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
