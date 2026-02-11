"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, Moon, Clock } from "lucide-react"; // Imported some icons for vibe
import { SITE_CONFIG, NAVIGATION_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

function DateTimeDisplay() {
    const [mounted, setMounted] = useState(false);
    const [date, setDate] = useState<Date | null>(null);

    useEffect(() => {
        setMounted(true);
        setDate(new Date());
        const timer = setInterval(() => setDate(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    if (!mounted || !date) return <div className="text-sm font-mono opacity-0">Loading...</div>;

    const dateStr = date.toLocaleDateString("ja-JP", { year: "numeric", month: "2-digit", day: "2-digit" }).replace(/\//g, " / ");
    const timeStr = date.toLocaleTimeString("ja-JP", { hour: "2-digit", minute: "2-digit" });

    return (
        <div className="flex items-center gap-4 text-sm font-mono tracking-widest text-muted-foreground">
            <span className="hidden sm:inline-block">{dateStr}</span>
            <span className="font-bold text-foreground bg-secondary/50 px-2 py-1 rounded-md">{timeStr}</span>
        </div>
    );
}

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-background/90 backdrop-blur-md border-b border-border py-2 shadow-sm"
                    : "bg-transparent py-4"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <div className="flex-1">
                    <Link href="/" className="text-xl font-bold tracking-widest hover:opacity-80 transition-opacity font-sans">
                        {SITE_CONFIG.name}
                    </Link>
                </div>

                {/* Date/Time (Center) */}
                <div className="flex-1 flex justify-center">
                    <DateTimeDisplay />
                </div>

                {/* Menu (Right) */}
                <div className="flex-1 flex justify-end">
                    <button
                        className="p-2 text-foreground hover:bg-secondary rounded-full transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <div className="flex flex-col gap-1.5 items-end">
                            {/* Custom Hamburger Look from HTML desc */}
                            <span className={cn("block w-6 h-0.5 bg-current transition-all", isMobileMenuOpen && "rotate-45 translate-y-2")} />
                            <span className={cn("block w-4 h-0.5 bg-current transition-all", isMobileMenuOpen && "opacity-0")} />
                            <span className={cn("block w-6 h-0.5 bg-current transition-all", isMobileMenuOpen && "-rotate-45 -translate-y-2")} />
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border shadow-xl p-6"
                    >
                        <nav className="flex flex-col items-center gap-6">
                            {NAVIGATION_LINKS.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-xl font-bold tracking-widest hover:text-primary transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
