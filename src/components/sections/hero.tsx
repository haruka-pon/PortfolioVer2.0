"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { PROFILE, SKILLS } from "@/lib/constants";

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section
            ref={containerRef}
            className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background"
        >
            {/* Background Physics Elements - Floating Skills */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                {SKILLS.map((skill, index) => (
                    <PhysicsElement key={skill.name} delay={index * 0.2}>
                        <div className="px-4 py-2 rounded-full bg-secondary/80 border border-primary/20 backdrop-blur-sm text-sm font-semibold pointer-events-auto cursor-grab active:cursor-grabbing shadow-lg hover:border-primary transition-colors hover:bg-secondary">
                            {skill.name}
                        </div>
                    </PhysicsElement>
                ))}
                {/* Decorative Circles */}
                <PhysicsElement delay={0} initialX={-20} initialY={-20}>
                    <div className="w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
                </PhysicsElement>
                <PhysicsElement delay={1} initialX={20} initialY={40}>
                    <div className="w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
                </PhysicsElement>
            </div>

            <motion.div
                style={{ y, opacity }}
                className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center gap-6"
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-4"
                >
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium tracking-wide">
                        {PROFILE.role}
                    </span>
                    <h1 className="text-4xl md:text-7xl font-bold tracking-tight leading-tight">
                        Reliability & <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                            Innovation
                        </span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
                        {PROFILE.short_bio} 构建された信頼と、物理的な美しさを持つデジタル体験を提供します。
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="flex flex-col sm:flex-row gap-4 mt-8"
                >
                    <Button size="lg" className="group rounded-full px-8">
                        View Projects
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button size="lg" variant="outline" className="rounded-full px-8">
                        Contact Me
                    </Button>
                </motion.div>
            </motion.div>
        </section>
    );
}

function PhysicsElement({
    children,
    delay = 0,
    initialX = 0,
    initialY = 0,
}: {
    children: React.ReactNode;
    delay?: number;
    initialX?: number;
    initialY?: number;
}) {
    return (
        <motion.div
            drag
            dragConstraints={{ left: -300, right: 300, top: -300, bottom: 300 }}
            whileHover={{ scale: 1.1, cursor: "grab" }}
            whileTap={{ scale: 0.9, cursor: "grabbing" }}
            initial={{ opacity: 0, x: initialX, y: initialY }}
            animate={{
                opacity: 1,
                y: [0, -20, 0],
                x: [0, 10, 0],
            }}
            transition={{
                y: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: delay,
                    repeatType: "reverse",
                },
                x: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: delay + 1,
                    repeatType: "reverse",
                },
                opacity: { duration: 1 },
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{
                zIndex: 1,
                // Randomize initial position slightly
                marginLeft: Math.random() * 600 - 300,
                marginTop: Math.random() * 400 - 200,
            }}
        >
            {children}
        </motion.div>
    );
}
