"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Calendar, MapPin, Gamepad2 } from "lucide-react";

const PROFILE_ITEMS = [
    { label: "Name", value: "八木 晴風 (Yagi Haruka)", icon: User },
    { label: "Birthday", value: "2001 / 11 / 27", icon: Calendar },
    { label: "From", value: "奈良県 (Nara, japan)", icon: MapPin },
    { label: "Hobby", value: "ジム, ゲーム, サウナ, イラスト(お粗末)", icon: Gamepad2 },
];

const TERMINAL_TEXT = '> hello_wanko --run';

export function ProfileSection() {
    const [isWankoVisible, setIsWankoVisible] = useState(false);
    const [displayedText, setDisplayedText] = useState("");
    const [isTypingDone, setIsTypingDone] = useState(false);

    useEffect(() => {
        let i = 0;
        setDisplayedText("");
        setIsTypingDone(false);
        const interval = setInterval(() => {
            if (i < TERMINAL_TEXT.length) {
                setDisplayedText(TERMINAL_TEXT.slice(0, i + 1));
                i++;
            } else {
                setIsTypingDone(true);
                clearInterval(interval);
            }
        }, 80);
        return () => clearInterval(interval);
    }, []);

    const handleWankoClick = () => {
        if (isWankoVisible) return;
        setIsWankoVisible(true);
        setTimeout(() => setIsWankoVisible(false), 2000);
    };

    return (
        <section id="about" className="py-20 px-4 max-w-3xl mx-auto overflow-hidden relative">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-12 relative z-10"
            >
                <div className="text-center space-y-4">
                    <div className="flex items-center justify-center gap-4">
                        <button
                            onClick={handleWankoClick}
                            className="group relative font-mono text-sm px-5 py-2.5 rounded-lg transition-all duration-300 shadow-lg hover:shadow-green-500/20 hover:scale-105 active:scale-95"
                            style={{
                                background: 'linear-gradient(145deg, #0d1117, #161b22)',
                                border: '1px solid #30363d',
                                color: '#3fb950',
                            }}
                        >
                            {/* Scanline overlay */}
                            <span
                                className="absolute inset-0 rounded-lg pointer-events-none opacity-10"
                                style={{
                                    background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(63,185,80,0.05) 2px, rgba(63,185,80,0.05) 4px)',
                                }}
                            />
                            {/* Terminal content */}
                            <span className="relative flex items-center gap-1">
                                <span style={{ color: '#8b949e' }}>$</span>
                                <span>{displayedText}</span>
                                <span
                                    className={isTypingDone ? 'animate-pulse' : ''}
                                    style={{
                                        display: 'inline-block',
                                        width: '8px',
                                        height: '16px',
                                        backgroundColor: '#3fb950',
                                        marginLeft: '2px',
                                        animation: isTypingDone ? undefined : 'none',
                                        opacity: isTypingDone ? undefined : 1,
                                    }}
                                />
                            </span>
                            {/* Glow on hover */}
                            <span
                                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                style={{
                                    boxShadow: '0 0 15px rgba(63,185,80,0.15), inset 0 0 15px rgba(63,185,80,0.05)',
                                }}
                            />
                        </button>

                        {/* Wanko Animation - inline next to button */}
                        <AnimatePresence>
                            {isWankoVisible && (
                                <motion.div
                                    initial={{ x: 40, opacity: 0, scale: 0.5 }}
                                    animate={{ x: 0, opacity: 1, scale: 1 }}
                                    exit={{ x: 40, opacity: 0, scale: 0.5 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                    className="pointer-events-none"
                                >
                                    <div className="relative">
                                        <img src="/dog-cursor.png" alt="Wanko" className="w-20 h-20 object-contain drop-shadow-xl" />
                                        <motion.div
                                            initial={{ scale: 0, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            transition={{ delay: 0.3 }}
                                            className="absolute -top-3 -left-3 bg-white text-black text-xs font-bold px-2 py-0.5 rounded-full shadow-lg border border-gray-200"
                                        >
                                            ワンワン
                                        </motion.div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                <div className="bg-white/50 dark:bg-black/20 backdrop-blur-sm rounded-3xl p-8 shadow-sm border border-white/50">
                    <h2 className="text-2xl font-bold mb-8 text-center text-primary tracking-widest">Profile</h2>
                    <div className="space-y-6">
                        {PROFILE_ITEMS.map((item, index) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center gap-4 border-b border-dashed border-primary/20 pb-2 last:border-0"
                            >
                                <div className="w-24 font-bold text-muted-foreground flex items-center gap-2">
                                    <item.icon className="w-4 h-4" />
                                    {item.label}
                                </div>
                                <div className="flex-1 font-medium">{item.value}</div>
                            </motion.div>
                        ))}

                        <div className="pt-4 border-t border-dashed border-primary/20">
                            <p className="leading-relaxed text-muted-foreground">
                                年を重ねるにつれて衰えを感じ始めたので、ジムに通い始めました。
                                <br />
                                最近はバイブコーディングの進化がすごすぎて色々勉強中です。
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
