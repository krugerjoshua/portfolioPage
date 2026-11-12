import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 80) {
                setScrolled(true);
            } else {
                setScrolled(false);
                setMobileMenuOpen(false);
            }
        };

        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setMobileMenuOpen(false);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleResize, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <header
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "opacity-100 pointer-events-auto translate-y-0 bg-neutral-950/85 backdrop-blur-md border-b border-white/10 shadow-lg"
                    : "opacity-0 pointer-events-none -translate-y-4"
            }`}
        >
            <div className="flex items-center justify-between px-6 md:px-12 py-3.5 md:py-4">
                {/* Top-Left JOSHUA Title */}
                <a
                    href="#hero"
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-marker text-white text-2xl sm:text-3xl md:text-4xl tracking-normal uppercase hover:opacity-85 transition-opacity"
                >
                    JOSHUA
                </a>

                {/* Desktop Navbar Items (≥ md) */}
                <nav
                    aria-label="Sticky header navigation"
                    className="hidden md:flex items-center gap-3 lg:gap-5 text-white font-sans font-medium text-sm lg:text-base tracking-wide"
                >
                    <a
                        href="#hero"
                        className="hover:opacity-75 transition-opacity"
                    >
                        HOME
                    </a>
                    <span className="inline-block h-4 w-[1.5px] bg-white/70" aria-hidden="true" />
                    <a
                        href="#about"
                        className="hover:opacity-75 transition-opacity"
                    >
                        ABOUT ME
                    </a>
                    <span className="inline-block h-4 w-[1.5px] bg-white/70" aria-hidden="true" />
                    <a
                        href="#projects"
                        className="hover:opacity-75 transition-opacity"
                    >
                        PROJECTS
                    </a>
                    <span className="inline-block h-4 w-[1.5px] bg-white/70" aria-hidden="true" />
                    <a
                        href="#faq"
                        className="hover:opacity-75 transition-opacity"
                    >
                        FAQ
                    </a>
                </nav>

                {/* Mobile Hamburger Toggle Button (< md) */}
                <button
                    type="button"
                    onClick={() => setMobileMenuOpen((prev) => !prev)}
                    className="md:hidden text-white p-2 hover:opacity-80 transition-opacity focus:outline-none"
                    aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={mobileMenuOpen}
                >
                    {mobileMenuOpen ? (
                        <FaTimes className="text-xl" aria-hidden="true" />
                    ) : (
                        <FaBars className="text-lg" aria-hidden="true" />
                    )}
                </button>
            </div>

            {/* Mobile Collapsible Dropdown Panel */}
            {mobileMenuOpen && (
                <nav
                    aria-label="Mobile sticky menu"
                    className="md:hidden border-t border-white/10 bg-neutral-950/95 backdrop-blur-xl px-6 py-5 flex flex-col items-center gap-4 text-white font-sans font-medium text-sm tracking-widest shadow-2xl"
                >
                    <a
                        href="#hero"
                        onClick={() => setMobileMenuOpen(false)}
                        className="hover:opacity-75 transition-opacity py-1"
                    >
                        HOME
                    </a>
                    <span className="w-8 h-px bg-white/20" aria-hidden="true" />
                    <a
                        href="#about"
                        onClick={() => setMobileMenuOpen(false)}
                        className="hover:opacity-75 transition-opacity py-1"
                    >
                        ABOUT ME
                    </a>
                    <span className="w-8 h-px bg-white/20" aria-hidden="true" />
                    <a
                        href="#projects"
                        onClick={() => setMobileMenuOpen(false)}
                        className="hover:opacity-75 transition-opacity py-1"
                    >
                        PROJECTS
                    </a>
                    <span className="w-8 h-px bg-white/20" aria-hidden="true" />
                    <a
                        href="#faq"
                        onClick={() => setMobileMenuOpen(false)}
                        className="hover:opacity-75 transition-opacity py-1"
                    >
                        FAQ
                    </a>
                </nav>
            )}
        </header>
    );
}