"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { useDog } from "@/context/dog-context";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Footprints, Home } from "lucide-react";

export function DogCursor() {
    const { isWalking, toggleWalk } = useDog();

    // Mouse position
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring animation for the dog to follow
    const springConfig = { damping: 20, stiffness: 100, mass: 1 };
    const dogX = useSpring(mouseX, springConfig);
    const dogY = useSpring(mouseY, springConfig);

    const [isFacingRight, setIsFacingRight] = useState(true);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX - 32); // Offset to center somewhat
            mouseY.set(e.clientY - 32);

            // Determine direction
            if (e.movementX > 0) setIsFacingRight(true);
            if (e.movementX < 0) setIsFacingRight(false);
        };

        if (isWalking) {
            window.addEventListener("mousemove", handleMouseMove);
        }

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [isWalking, mouseX, mouseY]);

    return (
        <>
            {/* The Dog */}
            {isWalking && (
                <motion.div
                    style={{
                        x: dogX,
                        y: dogY,
                        position: "fixed",
                        top: 0,
                        left: 0,
                        pointerEvents: "none",
                        zIndex: 50,
                        width: "64px",
                        height: "64px",
                    }}
                >
                    <motion.div
                        animate={{ scaleX: isFacingRight ? 1 : -1 }}
                        transition={{ type: "tween", duration: 0.1 }}
                    >
                        {/* Using the generated image */}
                        <Image
                            src="/dog-cursor.png"
                            alt="Dog Cursor"
                            width={64}
                            height={64}
                            className="drop-shadow-lg"
                        />
                    </motion.div>
                </motion.div>
            )}

            {/* Control Button */}
            <div className="fixed bottom-4 right-4 z-50">
                <Button
                    onClick={toggleWalk}
                    variant="secondary"
                    size="icon"
                    className="rounded-full shadow-lg hover:scale-110 transition-transform w-12 h-12 bg-white/80 backdrop-blur-sm border-2 border-primary/20"
                >
                    {isWalking ? (
                        <Home className="w-6 h-6 text-primary" />
                    ) : (
                        <Footprints className="w-6 h-6 text-muted-foreground" />
                    )}
                    <span className="sr-only">{isWalking ? "Stop Walking" : "Start Walking"}</span>
                </Button>
            </div>
        </>
    );
}
