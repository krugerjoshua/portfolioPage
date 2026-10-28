import { useEffect, useRef } from "react";
import {
    SiJavascript,
    SiPython,
    SiReact,
    SiHtml5,
    SiCss,
    SiTailwindcss,
} from "react-icons/si";
import {
    FaPhone,
    FaEnvelope,
    FaGithub,
    FaLinkedin,
    FaLightbulb,
    FaHandshake,
    FaRocket,
    FaBook,
    FaUserCircle,
    FaPuzzlePiece,
} from "react-icons/fa";

// ─── Data ────────────────────────────────────────────────────────────────────

const techBadgesRow1 = [
    { icon: SiJavascript, label: "JavaScript", color: "text-[#F7DF1E]" },
    { icon: SiPython,     label: "Python",     color: "text-white"    },
    { icon: SiReact,      label: "React",      color: "text-[#61DAFB]"},
];
const techBadgesRow2 = [
    { icon: SiHtml5,      label: "HTML",        color: "text-[#E34F26]"},
    { icon: SiCss,        label: "CSS",         color: "text-[#1572B6]"},
    { icon: SiTailwindcss,label: "TailwindCSS", color: "text-[#06B6D4]"},
];
const traits = [
    { icon: FaLightbulb,   label: "Problem Solver"      },
    { icon: FaHandshake,   label: "Team Player"         },
    { icon: FaRocket,      label: "Adaptable"           },
    { icon: FaBook,        label: "Continuous Learner"  },
    { icon: FaUserCircle,  label: "User Focused"        },
    { icon: FaPuzzlePiece, label: "Detail-Oriented"     },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

/** Clamp value between lo and hi */
const clamp = (v, lo = 0, hi = 1) => Math.min(hi, Math.max(lo, v));

/**
 * Map `val` from input range [inLo, inHi] to output range [outLo, outHi].
 * Automatically clamped so it never overshoots.
 */
const mapRange = (val, inLo, inHi, outLo, outHi) => {
    const t = clamp((val - inLo) / (inHi - inLo));
    return outLo + (outHi - outLo) * t;
};

// ─── Component ───────────────────────────────────────────────────────────────

/**
 * HeroAbout
 *
 * A 200vh scroll zone. The inner content is `position: sticky`, so it stays
 * pinned to the viewport while the user scrolls through the extra 100vh.
 * That 100vh of scroll budget is used to drive a smooth transition from the
 * hero layout to the "About Me" layout — all via direct DOM style mutations
 * (no React re-renders on scroll, so it stays smooth at 60fps).
 */
export default function HeroAbout() {
    // ── Scroll-zone wrapper ref ──────────────────────────────────────────────
    const containerRef = useRef(null);

    // ── Animated element refs ────────────────────────────────────────────────
    const cutoutRef       = useRef(null); // the main cutout image wrapper
    const titleLargeRef   = useRef(null); // big "JOSHUA" (hero state)
    const heroLeftNavRef  = useRef(null); // side nav (hero state)
    const heroMobileRef   = useRef(null); // mobile nav bar (hero state)
    const badgesRef       = useRef(null); // tech-stack badges
    const dockRef         = useRef(null); // contact dock
    const aboutHeadingRef = useRef(null); // "ABOUT ME" heading
    const aboutContentRef = useRef(null); // bio + traits

    // ── Scroll listener ──────────────────────────────────────────────────────
    useEffect(() => {
        const animate = () => {
            if (!containerRef.current) return;

            const rect       = containerRef.current.getBoundingClientRect();
            const scrollable = containerRef.current.offsetHeight - window.innerHeight;
            // p = 0 at top of zone, p = 1 when user has scrolled to bottom of zone
            const p = clamp(-rect.top / scrollable);

            // ── Cutout: scale + shift left + lift upward ──────────────────
            if (cutoutRef.current) {
                const scale    = mapRange(p, 0, 1, 1, 0.65);
                const tx       = mapRange(p, 0, 1, -50, -47); // % horizontal
                const bottomPct = mapRange(p, 0, 1, 0, 29);   // % from bottom
                cutoutRef.current.style.bottom    = `${bottomPct}%`;
                cutoutRef.current.style.transform = `translateX(${tx}%) scale(${scale})`;
            }

            // ── Large title: fade out early ────────────────────────────────
            if (titleLargeRef.current)
                titleLargeRef.current.style.opacity =
                    `${mapRange(p, 0, 0.35, 1, 0)}`;

            // ── Hero side-nav: fade out early ──────────────────────────────
            if (heroLeftNavRef.current)
                heroLeftNavRef.current.style.opacity =
                    `${mapRange(p, 0, 0.35, 1, 0)}`;

            if (heroMobileRef.current)
                heroMobileRef.current.style.opacity =
                    `${mapRange(p, 0, 0.35, 1, 0)}`;

            // ── Tech badges: fade out early ────────────────────────────────
            if (badgesRef.current)
                badgesRef.current.style.opacity =
                    `${mapRange(p, 0, 0.35, 1, 0)}`;

            // ── Contact dock: fade out early ───────────────────────────────
            if (dockRef.current)
                dockRef.current.style.opacity =
                    `${mapRange(p, 0, 0.35, 1, 0)}`;

            // ── "ABOUT ME" heading: fade + slide up ────────────────────────
            if (aboutHeadingRef.current) {
                const op = mapRange(p, 0.35, 0.7, 0, 1);
                const ty = mapRange(p, 0.35, 0.7, 28, 0);
                aboutHeadingRef.current.style.opacity   = `${op}`;
                aboutHeadingRef.current.style.transform = `translateY(${ty}px)`;
            }

            // ── Bio + traits: fade in last ─────────────────────────────────
            if (aboutContentRef.current)
                aboutContentRef.current.style.opacity =
                    `${mapRange(p, 0.6, 0.9, 0, 1)}`;
        };

        window.addEventListener("scroll", animate, { passive: true });
        animate(); // run once on mount in case page is pre-scrolled
        return () => window.removeEventListener("scroll", animate);
    }, []);

    // ── Shared pill class ────────────────────────────────────────────────────
    const pill =
        "flex items-center gap-2.5 bg-white/[0.06] backdrop-blur-[40px] text-white font-sans font-medium text-xs px-[15px] py-[10px] rounded-[10px] shadow-sm";

    // ── Render ───────────────────────────────────────────────────────────────
    return (
        /*
         * Outer scroll zone — 200vh means the user has to scroll 100vh of
         * "extra" space before the sticky frame releases and the next section
         * scrolls into view. That 100vh is our animation budget.
         */
        <div ref={containerRef} style={{ height: "200vh" }}>
            {/* ── Sticky viewport ─────────────────────────────────────────── */}
            <div
                id="hero"
                className="sticky top-0 h-screen relative w-full select-none"
            >
                {/* Scroll anchor for #about links */}
                <div id="about" className="absolute" style={{ top: "100vh" }} />

                {/* ── Large "JOSHUA" title (hero state) ─────────────────── */}
                <div
                    ref={titleLargeRef}
                    className="absolute top-[3%] md:top-[2%] inset-x-0 flex justify-center z-10 pointer-events-none"
                >
                    <h1 className="font-marker text-white text-[clamp(5rem,20vw,24rem)] leading-[0.88] tracking-normal text-center uppercase drop-shadow-lg">
                        JOSHUA
                    </h1>
                </div>

                {/* ── Cutout image (transitions hero → about) ───────────── */}
                <div
                    ref={cutoutRef}
                    className="absolute bottom-0 left-1/2 z-20 pointer-events-none flex items-end justify-center w-auto max-w-full"
                    style={{
                        height: "82vh",
                        transformOrigin: "bottom center",
                        transform: "translateX(-50%) scale(1)",
                    }}
                >
                    <img
                        src="/joshua-cutout.png"
                        alt="Joshua"
                        className="h-full w-auto max-w-none object-contain object-bottom"
                    />
                </div>

                {/* ── "ABOUT ME" heading (fades in over the shrunk cutout) ─ */}
                <div
                    ref={aboutHeadingRef}
                    className="absolute inset-x-0 z-30 flex justify-center pointer-events-none"
                    style={{ top: "58%", opacity: 0 }}
                >
                    <h2 className="font-marker text-white text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-normal uppercase drop-shadow-lg">
                        ABOUT ME
                    </h2>
                </div>

                {/* ── About content: bio + traits (fades in last) ────────── */}
                <div
                    ref={aboutContentRef}
                    className="absolute inset-x-0 z-20 flex flex-col items-center gap-4 px-6"
                    style={{ top: "74%", opacity: 0 }}
                >
                    <p className="font-sans font-medium text-neutral-200 text-lg sm:text-xl md:text-2xl max-w-4xl text-center leading-relaxed">
                        Software developer with a passion for solving problems, building
                        useful applications, and continuously learning. I enjoy creating
                        software that&apos;s not only functional but thoughtfully built.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-3 max-w-5xl">
                        {traits.map(({ icon: Icon, label }) => (
                            <div
                                key={label}
                                className={`${pill} text-xs sm:text-sm hover:bg-white/[0.12] hover:-translate-y-0.5 transition-all cursor-default`}
                            >
                                <Icon className="text-sm shrink-0 opacity-90" aria-hidden="true" />
                                <span>{label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Hero left-side nav (desktop) ───────────────────────── */}
                <nav
                    ref={heroLeftNavRef}
                    aria-label="Hero navigation"
                    className="absolute left-6 lg:left-12 top-[44%] -translate-y-1/2 z-30 hidden md:flex items-center gap-5 text-white font-sans font-medium text-xl lg:text-2xl tracking-wide"
                >
                    <a href="#hero"     className="hover:opacity-75 transition-opacity">HOME</a>
                    <span className="inline-block h-6 w-[1.5px] bg-white/70" aria-hidden="true" />
                    <a href="#about"    className="hover:opacity-75 transition-opacity">ABOUT ME</a>
                    <span className="inline-block h-6 w-[1.5px] bg-white/70" aria-hidden="true" />
                    <a href="#projects" className="hover:opacity-75 transition-opacity">PROJECTS</a>
                    <span className="inline-block h-6 w-[1.5px] bg-white/70" aria-hidden="true" />
                    <a href="#faq"      className="hover:opacity-75 transition-opacity">FAQ</a>
                </nav>

                {/* ── Hero mobile nav ────────────────────────────────────── */}
                <nav
                    ref={heroMobileRef}
                    aria-label="Mobile navigation"
                    className="md:hidden absolute top-4 inset-x-0 z-30 flex items-center justify-center gap-3 text-white font-sans font-medium text-sm tracking-wide bg-black/40 backdrop-blur-md py-2 px-4"
                >
                    <a href="#hero"     className="hover:opacity-75">HOME</a>
                    <span className="h-3.5 w-px bg-white/50" />
                    <a href="#about"    className="hover:opacity-75">ABOUT ME</a>
                    <span className="h-3.5 w-px bg-white/50" />
                    <a href="#projects" className="hover:opacity-75">PROJECTS</a>
                    <span className="h-3.5 w-px bg-white/50" />
                    <a href="#faq"      className="hover:opacity-75">FAQ</a>
                </nav>

                {/* ── Tech-stack badges (hero state) ─────────────────────── */}
                <div
                    ref={badgesRef}
                    className="absolute right-6 lg:right-12 top-[44%] -translate-y-1/2 z-30 hidden md:flex flex-col gap-2.5"
                >
                    <div className="flex items-center gap-2.5 justify-end">
                        {techBadgesRow1.map(({ icon: Icon, label, color }) => (
                            <div key={label} className={`${pill} border border-white cursor-default`}>
                                <Icon className={`text-base shrink-0 ${color}`} aria-hidden="true" />
                                <span>{label}</span>
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center gap-2.5 justify-end">
                        {techBadgesRow2.map(({ icon: Icon, label, color }) => (
                            <div key={label} className={`${pill} border border-white cursor-default`}>
                                <Icon className={`text-base shrink-0 ${color}`} aria-hidden="true" />
                                <span>{label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Contact dock (hero state) ───────────────────────────── */}
                <address
                    ref={dockRef}
                    className="absolute bottom-8 lg:bottom-10 inset-x-0 z-30 flex flex-wrap items-center justify-center gap-2.5 px-4 not-italic"
                >
                    <a
                        href="tel:+27677879978"
                        className={`${pill} hover:bg-white/[0.12] hover:-translate-y-0.5 transition-all`}
                        aria-label="Call Joshua"
                    >
                        <FaPhone className="text-xs shrink-0" aria-hidden="true" />
                        <span>067 787 9978</span>
                    </a>
                    <a
                        href="mailto:joshuakruger66@live.com"
                        className={`${pill} hover:bg-white/[0.12] hover:-translate-y-0.5 transition-all`}
                        aria-label="Email Joshua"
                    >
                        <FaEnvelope className="text-xs shrink-0" aria-hidden="true" />
                        <span>joshuakruger66@live.com</span>
                    </a>
                    <a
                        href="https://github.com/krugerjoshua"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${pill} hover:bg-white/[0.12] hover:-translate-y-0.5 transition-all`}
                        aria-label="Joshua's GitHub profile"
                    >
                        <FaGithub className="text-sm shrink-0" aria-hidden="true" />
                        <span>github.com/krugerjoshua</span>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/joshua-kruger-0990a9244/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${pill} hover:bg-white/[0.12] hover:-translate-y-0.5 transition-all`}
                        aria-label="Joshua's LinkedIn profile"
                    >
                        <FaLinkedin className="text-sm shrink-0" aria-hidden="true" />
                        <span className="underline">LinkedIn Profile</span>
                    </a>
                </address>
            </div>
        </div>
    );
}

