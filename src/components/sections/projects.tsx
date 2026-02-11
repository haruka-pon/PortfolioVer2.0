"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Projects() {
    return (
        <section id="projects" className="py-20 bg-secondary/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center gap-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-sans text-primary mb-4">Works</h2>
                        <p className="text-muted-foreground max-w-2xl mb-8">
                            これまでに制作したプロジェクトはこちらからご覧いただけます。
                        </p>

                        <Button asChild size="lg" className="rounded-full px-8 text-lg hover:scale-105 transition-transform">
                            <Link href="/works">
                                View All Works <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
