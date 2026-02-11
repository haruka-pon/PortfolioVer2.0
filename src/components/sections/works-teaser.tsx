"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function WorksTeaser() {
    return (
        <section className="py-32 px-4 text-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 tracking-widest">Works</h2>
                <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
                    View my latest projects and experiments.
                </p>
                <Button asChild size="lg" className="rounded-full px-10 py-6 text-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                    <Link href="/works">
                        See All Works <ArrowRight className="ml-2 w-6 h-6" />
                    </Link>
                </Button>
            </motion.div>
        </section>
    );
}
