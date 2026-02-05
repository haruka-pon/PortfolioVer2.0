import Link from "next/link";
import { PROFILE, SITE_CONFIG } from "@/lib/constants";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-muted/50 border-t border-border py-12">
            <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex flex-col gap-2 text-center md:text-left">
                    <h3 className="text-lg font-bold">{SITE_CONFIG.name}</h3>
                    <p className="text-sm text-muted-foreground">
                        Building reliable and innovative web experiences.
                    </p>
                </div>

                <div className="flex gap-6">
                    {PROFILE.socials.map((social) => (
                        <Link
                            key={social.name}
                            href={social.href}
                            target="_blank"
                            rel="noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            <social.icon className="w-5 h-5" />
                            <span className="sr-only">{social.name}</span>
                        </Link>
                    ))}
                </div>

                <div className="text-sm text-muted-foreground">
                    © {currentYear} {SITE_CONFIG.name}. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
