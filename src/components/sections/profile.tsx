"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Calendar, MapPin, Gamepad2 } from "lucide-react";

const PROFILE_ITEMS = [
    { label: "Name", value: "八木 晴風 (Yagi Haruka)", icon: User },
    { label: "Birthday", value: "2001 / 11 / 27", icon: Calendar },
    { label: "From", value: "奈良県 (Nara, japan)", icon: MapPin },
    { label: "Hobby", value: "ジム, ゲーム, サウナ, イラスト(お粗末)", icon: Gamepad2 },
];

export function ProfileSection() {
    const [isWankoVisible, setIsWankoVisible] = useState(false);

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
                    <div className="flex justify-center gap-4">
                        <button
                            onClick={handleWankoClick}
                            className="text-sm font-bold text-primary border border-primary/30 px-4 py-1.5 rounded-full hover:bg-primary hover:text-white transition-all duration-300 shadow-sm"
                        >
                            Hello Wanko
                        </button>
                    </div>
                    {/* Old text removed as requested */}
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
                    </div>
                </div>
            </motion.div>

            {/* Wanko Animation */}
            <AnimatePresence>
                {isWankoVisible && (
                    <motion.div
                        initial={{ x: "100%", opacity: 0, rotate: 10 }}
                        animate={{ x: 0, opacity: 1, rotate: 0 }}
                        exit={{ x: "100%", opacity: 0, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 100, damping: 15 }}
                        className="absolute top-20 right-0 md:right-20 z-0 pointer-events-none"
                    >
                        <div className="relative">
                            <img src="/dog-cursor.png" alt="Wanko" className="w-32 h-32 object-contain drop-shadow-xl" />
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="absolute -top-4 -left-4 bg-white text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg border border-gray-200"
                            >
                                Wan! 🐕
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
