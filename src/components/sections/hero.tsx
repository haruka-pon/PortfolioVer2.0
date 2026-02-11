"use client";

import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="min-h-[60vh] flex flex-col justify-center items-center text-center px-4 pt-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-4xl md:text-6xl font-bold tracking-wider mb-4 text-primary">
                    Haruka Yagi
                </h1>
                <p className="text-lg md:text-2xl text-muted-foreground font-light tracking-widest">
                    ultimate goal of becoming a <span className="text-foreground font-medium">full stack engineer!</span>
                </p>
            </motion.div>
        </section>
    );
}
