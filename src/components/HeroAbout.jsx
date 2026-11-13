import { useEffect, useRef } from "react";
import {
    techBadgesRow1,
    techBadgesRow2,
    traits,
    contactLinks,
} from "../data/heroData";

// ─── Helpers ─────────────────────────────────────────────────────────────────

const clamp = (v, lo = 0, hi = 1) => Math.min(hi, Math.max(lo, v));
const mapRange = (val, inLo, inHi, outLo, outHi) => {
    const t = clamp((val - inLo) / (inHi - inLo));
    return outLo + (outHi - outLo) * t;
};

// ─── Shared style strings ─────────────────────────────────────────────────────

const pill =
    "flex items-center gap-2.5 bg-white/[0.06] backdrop-blur-[40px] text-white font-sans font-medium text-xs px-[15px] py-[10px] rounded-[10px] shadow-sm";

const iconBtn =
    "flex items-center justify-center w-10 h-10 rounded-full bg-white/[0.08] backdrop-blur-md text-white hover:bg-white/[0.18] transition-colors";

// ─── Component ───────────────────────────────────────────────────────────────

export default function HeroAbout() {
    // Desktop animation refs
    const containerRef = useRef(null);
    const cutoutRef = useRef(null);
    const titleLargeRef = useRef(null);
    const heroLeftNavRef = useRef(null);
    const badgesRef = useRef(null);
    const dockRef = useRef(null);
    const aboutHeadingRef = useRef(null);
    const aboutContentRef = useRef(null);

    // ── Scroll animation (desktop only, rAF-throttled) ────────────────────────
    useEffect(() => {
        let rafId = null;

        const performAnimation = () => {
            // Skip animation on portrait or small screens — static layout handles it
            if (
                window.innerWidth < 1024 ||
                window.innerHeight > window.innerWidth
            )
                return;
            if (
                !containerRef.current ||
                containerRef.current.offsetParent === null
            )
                return;

            const rect = containerRef.current.getBoundingClientRect();
            const scrollable =
                containerRef.current.offsetHeight - window.innerHeight;
            if (scrollable <= 0) return;
            const p = clamp(-rect.top / scrollable);

            // Cutout: scale down + lift upward + slight horizontal shift
            if (cutoutRef.current) {
                const scale = mapRange(p, 0, 1, 1, 0.65);
                const tx = mapRange(p, 0, 1, -50, -47);
                const bottomPct = mapRange(p, 0, 1, 0, 29);
                cutoutRef.current.style.bottom = `${bottomPct}%`;
                cutoutRef.current.style.transform = `translateX(${tx}%) scale(${scale})`;
            }

            // Large JOSHUA: fade out early
            if (titleLargeRef.current) {
                titleLargeRef.current.style.opacity = `${mapRange(p, 0, 0.35, 1, 0)}`;
            }

            // Left nav + badges + contact dock: fade out early
            const heroControlsOpacity = `${mapRange(p, 0, 0.35, 1, 0)}`;
            if (heroLeftNavRef.current)
                heroLeftNavRef.current.style.opacity = heroControlsOpacity;
            if (badgesRef.current)
                badgesRef.current.style.opacity = heroControlsOpacity;
            if (dockRef.current)
                dockRef.current.style.opacity = heroControlsOpacity;

            // "ABOUT ME" heading: fade in + slide up
            if (aboutHeadingRef.current) {
                aboutHeadingRef.current.style.opacity = `${mapRange(p, 0.35, 0.7, 0, 1)}`;
                aboutHeadingRef.current.style.transform = `translateY(${mapRange(p, 0.35, 0.7, 28, 0)}px)`;
            }

            // Bio + traits: fade in last
            if (aboutContentRef.current) {
                aboutContentRef.current.style.opacity = `${mapRange(p, 0.6, 0.9, 0, 1)}`;
            }
        };

        const handleTick = () => {
            if (rafId) return;
            rafId = requestAnimationFrame(() => {
                rafId = null;
                performAnimation();
            });
        };

        window.addEventListener("scroll", handleTick, { passive: true });
        window.addEventListener("resize", handleTick, { passive: true });
        performAnimation();

        return () => {
            if (rafId) cancelAnimationFrame(rafId);
            window.removeEventListener("scroll", handleTick);
            window.removeEventListener("resize", handleTick);
        };
    }, []);

    // ── Render ────────────────────────────────────────────────────────────────
    return (
        <>
            {/* ═══════════════════════════════════════════════════════════════
                STATIC LAYOUT (Mobile & All Portrait Displays)
                Standard document flow — no scroll animation cavern or overlap.
            ═══════════════════════════════════════════════════════════════ */}
            <div className="lg:landscape:hidden flex flex-col w-full overflow-x-hidden">
                {/* ── Static Hero ── */}
                <section
                    id="hero"
                    className="relative h-screen min-h-[600px] w-full select-none overflow-hidden flex flex-col justify-between"
                >
                    {/* Top nav bar */}
                    <nav
                        aria-label="Portrait navigation"
                        className="relative z-30 flex items-center justify-center gap-3 sm:gap-5
                                   text-white font-sans font-medium text-xs sm:text-sm tracking-wide
                                   bg-black/40 backdrop-blur-md py-3.5 px-6"
                    >
                        <a
                            href="#hero"
                            className="hover:opacity-75 transition-opacity"
                        >
                            HOME
                        </a>
                        <span className="h-3 w-px bg-white/50" />
                        <a
                            href="#about"
                            className="hover:opacity-75 transition-opacity"
                        >
                            ABOUT ME
                        </a>
                        <span className="h-3 w-px bg-white/50" />
                        <a
                            href="#projects"
                            className="hover:opacity-75 transition-opacity"
                        >
                            PROJECTS
                        </a>
                        <span className="h-3 w-px bg-white/50" />
                        <a
                            href="#faq"
                            className="hover:opacity-75 transition-opacity"
                        >
                            FAQ
                        </a>
                    </nav>

                    {/* JOSHUA title */}
                    <div className="absolute top-[8%] sm:top-[6%] inset-x-0 flex justify-center z-10 pointer-events-none">
                        <h1
                            className="font-marker text-white text-[clamp(5rem,min(25.8vw,40vh),40rem)]
               leading-[0.88] tracking-normal text-center uppercase drop-shadow-lg"
                        >
                            JOSHUA
                        </h1>
                    </div>

                    {/* Cutout */}
                    <div
                        className="absolute bottom-16 sm:bottom-20 left-1/2 -translate-x-1/2 z-20 pointer-events-none
                                    flex items-end justify-center h-[65vh] sm:h-[70vh] w-auto"
                    >
                        <img
                            src="/joshua-cutout.png"
                            alt="Joshua"
                            className="h-full w-auto max-w-none object-contain object-bottom"
                        />
                    </div>

                    {/* Contact dock */}
                    <address className="relative bottom-4 sm:bottom-6 z-30 flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-4 not-italic">
                        {contactLinks.map(
                            ({ href, icon: Icon, label, text }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target={
                                        href.startsWith("http")
                                            ? "_blank"
                                            : undefined
                                    }
                                    rel={
                                        href.startsWith("http")
                                            ? "noopener noreferrer"
                                            : undefined
                                    }
                                    className={`${pill} hover:bg-white/[0.12] hover:-translate-y-0.5 transition-all text-xs sm:text-sm`}
                                    aria-label={label}
                                >
                                    <Icon
                                        className="text-xs sm:text-sm shrink-0"
                                        aria-hidden="true"
                                    />
                                    <span className="hidden sm:inline">
                                        {text}
                                    </span>
                                </a>
                            ),
                        )}
                    </address>
                </section>

                {/* ── Static About ── */}
                <section
                    id="about"
                    className="relative w-full px-6 py-20 sm:py-28 flex flex-col items-center text-center gap-8 select-none"
                >
                    <h2 className="font-marker text-white text-5xl sm:text-6xl md:text-7xl uppercase drop-shadow-lg leading-none">
                        ABOUT ME
                    </h2>
                    <p className="font-sans font-medium text-neutral-200 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl">
                        Software developer with a passion for solving problems,
                        building useful applications, and continuously learning.
                        I enjoy creating software that&apos;s not only
                        functional but thoughtfully built.
                    </p>

                    {/* Tech-stack badges */}
                    <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-2xl">
                        {techBadgesRow1.map(({ icon: Icon, label, color }) => (
                            <div
                                key={label}
                                className={`${pill} border border-white/20 cursor-default text-xs sm:text-sm`}
                            >
                                <Icon
                                    className={`text-sm shrink-0 ${color}`}
                                    aria-hidden="true"
                                />
                                <span>{label}</span>
                            </div>
                        ))}
                        {techBadgesRow2.map(({ icon: Icon, label, color }) => (
                            <div
                                key={label}
                                className={`${pill} border border-white/20 cursor-default text-xs sm:text-sm`}
                            >
                                <Icon
                                    className={`text-sm shrink-0 ${color}`}
                                    aria-hidden="true"
                                />
                                <span>{label}</span>
                            </div>
                        ))}
                    </div>

                    {/* Trait pills */}
                    <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 max-w-2xl">
                        {traits.map(({ icon: Icon, label }) => (
                            <div
                                key={label}
                                className={`${pill} hover:bg-white/[0.12] transition-colors cursor-default text-xs sm:text-sm`}
                            >
                                <Icon
                                    className="text-sm shrink-0 opacity-90"
                                    aria-hidden="true"
                                />
                                <span>{label}</span>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {/* ═══════════════════════════════════════════════════════════════
                WIDESCREEN LANDSCAPE DESKTOP (≥ lg & landscape)
                200 vh sticky scroll-scrubbed animation.
            ═══════════════════════════════════════════════════════════════ */}
            <div
                ref={containerRef}
                className="hidden lg:landscape:block w-full"
                style={{ height: "200vh" }}
            >
                {/* Sticky viewport — stays pinned while user burns through 100vh */}
                <div
                    id="hero"
                    className="sticky top-0 h-screen relative w-full select-none overflow-x-clip"
                >
                    {/* Scroll anchor for #about links */}
                    <div
                        id="about"
                        className="absolute"
                        style={{ top: "100vh" }}
                    />

                    {/* ── Large JOSHUA (hero state) ── */}
                    <div
                        ref={titleLargeRef}
                        className="absolute top-[3%] lg:top-[2%] inset-x-0 flex justify-center z-10 pointer-events-none"
                    >
                        <h1
                            className="font-marker text-white text-[clamp(5rem,19vw,22rem)]
                                       leading-[0.88] tracking-normal text-center uppercase drop-shadow-lg"
                        >
                            JOSHUA
                        </h1>
                    </div>

                    {/* ── Cutout (animates hero → about) ── */}
                    <div
                        ref={cutoutRef}
                        className="absolute bottom-0 left-1/2 z-20 pointer-events-none
                                   flex items-end justify-center w-auto"
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

                    {/* ── "ABOUT ME" heading ── */}
                    <div
                        ref={aboutHeadingRef}
                        className="absolute inset-x-0 z-30 flex justify-center pointer-events-none"
                        style={{ top: "58%", opacity: 0 }}
                    >
                        <h2
                            className="font-marker text-white text-6xl sm:text-7xl md:text-8xl lg:text-9xl
                                       tracking-normal uppercase drop-shadow-lg"
                        >
                            ABOUT ME
                        </h2>
                    </div>

                    {/* ── Bio + traits (fades in last) ── */}
                    <div
                        ref={aboutContentRef}
                        className="absolute inset-x-0 z-20 flex flex-col items-center gap-4 px-6"
                        style={{ top: "74%", opacity: 0 }}
                    >
                        <p
                            className="font-sans font-medium text-neutral-200 text-lg md:text-xl lg:text-2xl
                                      max-w-4xl text-center leading-relaxed"
                        >
                            Software developer with a passion for solving
                            problems, building useful applications, and
                            continuously learning. I enjoy creating software
                            that&apos;s not only functional but thoughtfully
                            built.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-3 max-w-5xl">
                            {traits.map(({ icon: Icon, label }) => (
                                <div
                                    key={label}
                                    className={`${pill} hover:bg-white/[0.12] hover:-translate-y-0.5 transition-all cursor-default`}
                                >
                                    <Icon
                                        className="text-sm shrink-0 opacity-90"
                                        aria-hidden="true"
                                    />
                                    <span>{label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ── Desktop left-side nav (hero state) ── */}
                    <nav
                        ref={heroLeftNavRef}
                        aria-label="Hero navigation"
                        className="absolute left-4 lg:left-12 top-[44%] -translate-y-1/2 z-30
                                   flex items-center gap-3 lg:gap-5 text-white font-sans font-medium text-lg lg:text-2xl tracking-wide"
                    >
                        <a
                            href="#hero"
                            className="hover:opacity-75 transition-opacity"
                        >
                            HOME
                        </a>
                        <span
                            className="inline-block h-6 w-[1.5px] bg-white/70"
                            aria-hidden="true"
                        />
                        <a
                            href="#about"
                            className="hover:opacity-75 transition-opacity"
                        >
                            ABOUT ME
                        </a>
                        <span
                            className="inline-block h-6 w-[1.5px] bg-white/70"
                            aria-hidden="true"
                        />
                        <a
                            href="#projects"
                            className="hover:opacity-75 transition-opacity"
                        >
                            PROJECTS
                        </a>
                        <span
                            className="inline-block h-6 w-[1.5px] bg-white/70"
                            aria-hidden="true"
                        />
                        <a
                            href="#faq"
                            className="hover:opacity-75 transition-opacity"
                        >
                            FAQ
                        </a>
                    </nav>

                    {/* ── Tech-stack badges (hero state) ── */}
                    <div
                        ref={badgesRef}
                        className="absolute right-4 lg:right-12 top-[44%] -translate-y-1/2 z-30 flex flex-col gap-2 lg:gap-2.5"
                    >
                        <div className="flex items-center gap-2.5 justify-end">
                            {techBadgesRow1.map(
                                ({ icon: Icon, label, color }) => (
                                    <div
                                        key={label}
                                        className={`${pill} border border-white cursor-default`}
                                    >
                                        <Icon
                                            className={`text-base shrink-0 ${color}`}
                                            aria-hidden="true"
                                        />
                                        <span>{label}</span>
                                    </div>
                                ),
                            )}
                        </div>
                        <div className="flex items-center gap-2.5 justify-end">
                            {techBadgesRow2.map(
                                ({ icon: Icon, label, color }) => (
                                    <div
                                        key={label}
                                        className={`${pill} border border-white cursor-default`}
                                    >
                                        <Icon
                                            className={`text-base shrink-0 ${color}`}
                                            aria-hidden="true"
                                        />
                                        <span>{label}</span>
                                    </div>
                                ),
                            )}
                        </div>
                    </div>

                    {/* ── Contact dock (hero state) ── */}
                    <address
                        ref={dockRef}
                        className="absolute bottom-8 lg:bottom-10 inset-x-0 z-30
                                   flex flex-wrap items-center justify-center gap-2.5 px-4 not-italic"
                    >
                        {contactLinks.map(
                            ({ href, icon: Icon, label, text, underline }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target={
                                        href.startsWith("http")
                                            ? "_blank"
                                            : undefined
                                    }
                                    rel={
                                        href.startsWith("http")
                                            ? "noopener noreferrer"
                                            : undefined
                                    }
                                    className={`${pill} hover:bg-white/[0.12] hover:-translate-y-0.5 transition-all`}
                                    aria-label={label}
                                >
                                    <Icon
                                        className="text-xs shrink-0"
                                        aria-hidden="true"
                                    />
                                    <span
                                        className={underline ? "underline" : ""}
                                    >
                                        {text}
                                    </span>
                                </a>
                            ),
                        )}
                    </address>
                </div>
            </div>
        </>
    );
}
