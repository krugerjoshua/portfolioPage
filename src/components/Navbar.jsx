import { useState, useEffect } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 80) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 md:py-5 transition-all duration-300 ${
                scrolled
                    ? "opacity-100 pointer-events-auto translate-y-0"
                    : "opacity-0 pointer-events-none -translate-y-4"
            }`}
        >
            {/* Top-Left JOSHUA Title */}
            <a
                href="#hero"
                className="font-marker text-white text-3xl md:text-4xl tracking-normal uppercase hover:opacity-85 transition-opacity"
            >
                JOSHUA
            </a>

            {/* Top-Right Navbar Items */}
            <nav
                aria-label="Sticky header navigation"
                className="flex items-center gap-3 sm:gap-5 text-white font-sans font-medium text-base sm:text-lg lg:text-xl tracking-wide"
            >
                <a
                    href="#hero"
                    className="hover:opacity-75 transition-opacity"
                >
                    HOME
                </a>
                <span className="inline-block h-5 w-[1.5px] bg-white/70" aria-hidden="true" />
                <a
                    href="#about"
                    className="hover:opacity-75 transition-opacity"
                >
                    ABOUT ME
                </a>
                <span className="inline-block h-5 w-[1.5px] bg-white/70" aria-hidden="true" />
                <a
                    href="#projects"
                    className="hover:opacity-75 transition-opacity"
                >
                    PROJECTS
                </a>
                <span className="inline-block h-5 w-[1.5px] bg-white/70" aria-hidden="true" />
                <a
                    href="#faq"
                    className="hover:opacity-75 transition-opacity"
                >
                    FAQ
                </a>
            </nav>
        </header>
    );
}