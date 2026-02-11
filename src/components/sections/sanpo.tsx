"use client";

import { motion } from "framer-motion";
import { useDog } from "@/context/dog-context";
import { Button } from "@/components/ui/button";
import { Footprints, Home } from "lucide-react";

export function SanpoSection() {
    const { isWalking, toggleWalk } = useDog();

    return (
        <section className="py-20 px-4 bg-secondary/20">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="max-w-xl mx-auto text-center space-y-8"
            >
                <h2 className="text-3xl font-bold text-primary tracking-widest">Sanpo</h2>
                <p className="text-muted-foreground">
                    マウスについてくる犬とお散歩しませんか？
                    <br />
                    (Toggle the dog cursor)
                </p>

                <div className="flex justify-center">
                    <Button
                        onClick={toggleWalk}
                        size="lg"
                        className={`rounded-full px-8 py-6 text-lg transition-all transform hover:scale-105 ${isWalking
                                ? "bg-primary text-primary-foreground shadow-lg hover:shadow-primary/25"
                                : "bg-muted text-muted-foreground hover:bg-muted/80"
                            }`}
                    >
                        {isWalking ? (
                            <>
                                <Home className="mr-2 w-6 h-6" /> おうちへ帰す
                            </>
                        ) : (
                            <>
                                <Footprints className="mr-2 w-6 h-6" /> お散歩する
                            </>
                        )}
                    </Button>
                </div>
            </motion.div>
        </section>
    );
}
