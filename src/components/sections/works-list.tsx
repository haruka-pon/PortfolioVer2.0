"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TiltCard } from "@/components/ui/tilt-card";
import { Github, Globe, Layout, Database } from "lucide-react";
import { PROJECTS } from "@/lib/works";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

export function ProjectsList() {
    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show" // Use animate here since it's a page transition or main content
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
            {PROJECTS.map((project, index) => (
                <motion.div key={index} variants={item} className="h-full">
                    <TiltCard>
                        <Card className="h-full flex flex-col hover:border-primary/50 transition-colors duration-300 overflow-hidden relative group bg-card/80 backdrop-blur-sm min-h-[350px]">
                            {/* Image Section */}
                            <div className="relative w-full h-48 overflow-hidden bg-muted">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                            </div>

                            <CardHeader>
                                <div className="flex justify-between items-start mb-2">
                                    <Badge variant="secondary" className="mb-2 text-primary border-primary/20">
                                        {project.category}
                                    </Badge>
                                </div>
                                <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors font-sans mb-2">{project.title}</CardTitle>
                                <CardDescription className="text-base line-clamp-3">{project.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-1">
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary/50 text-secondary-foreground hover:bg-secondary/80"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </CardContent>
                            {/* Removed Code Link Footer */}
                        </Card>
                    </TiltCard>
                </motion.div>
            ))}
        </motion.div>
    );
}
