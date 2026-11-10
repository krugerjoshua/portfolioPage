import React from "react";
import { contactLinks } from "../data/heroData";

export default function Footer() {
    return (
        <footer className="relative w-full py-10 px-6 border-t border-white/5 select-none text-center font-sans">
            <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
                {/* Contact links */}
                <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
                    {contactLinks.map(({ href, icon: Icon, label, text }) => (
                        <a
                            key={label}
                            href={href}
                            target={href.startsWith("http") ? "_blank" : undefined}
                            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="flex items-center gap-2 bg-white/[0.04] backdrop-blur-[20px] text-white/80 hover:text-white text-xs px-3.5 py-2 rounded-[8px] border border-white/5 hover:border-white/20 transition-all"
                            aria-label={label}
                        >
                            <Icon className="text-xs shrink-0" aria-hidden="true" />
                            <span>{text}</span>
                        </a>
                    ))}
                </div>

                <p className="text-xs text-neutral-400">
                    © {new Date().getFullYear()} Joshua Kruger. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
