"use client";

import { motion } from "framer-motion";
import { User, Calendar, MapPin, Gamepad2 } from "lucide-react";

const PROFILE_ITEMS = [
    { label: "Name", value: "八木 晴風 (Yagi Haruka)", icon: User },
    { label: "Birthday", value: "2001 / 11 / 27", icon: Calendar },
    { label: "From", value: "奈良県 (Nara, japan)", icon: MapPin },
    { label: "Hobby", value: "Gym, Game, Nighttime Wandering", icon: Gamepad2 },
];

export function ProfileSection() {
    return (
        <section className="py-20 px-4 max-w-3xl mx-auto">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-12"
            >
                <div className="text-center space-y-4">
                    <div className="w-32 h-32 mx-auto bg-secondary rounded-full flex items-center justify-center text-4xl shadow-inner">
                        {/* Placeholder for Icon */}
                        🐈
                    </div>
                    <div className="flex justify-center gap-4">
                        {/* Placeholder for QR Code interaction or visual */}
                        <div className="text-xs text-muted-foreground border px-2 py-1 rounded-md">
                            DogRunLink Stub
                        </div>
                    </div>
                    <p className="leading-relaxed text-muted-foreground">
                        親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。なぜそんな無闇をしたと聞く人があるかも知れぬ。
                    </p>
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
        </section>
    );
}
