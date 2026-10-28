import {
    SiJavascript,
    SiPython,
    SiReact,
    SiHtml5,
    SiCss,
    SiTailwindcss,
} from "react-icons/si";
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const techBadgesRow1 = [
    { icon: SiJavascript, label: "JavaScript", color: "text-[#F7DF1E]" },
    { icon: SiPython, label: "Python", color: "text-white" },
    { icon: SiReact, label: "React", color: "text-[#61DAFB]" },
];

const techBadgesRow2 = [
    { icon: SiHtml5, label: "HTML", color: "text-[#E34F26]" },
    { icon: SiCss, label: "CSS", color: "text-[#1572B6]" },
    { icon: SiTailwindcss, label: "TailwindCSS", color: "text-[#06B6D4]" },
];

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative h-screen w-full min-h-175 overflow-hidden bg-transparent select-none"
        >

            {/* 2. Subtle Lighting / Vignette Overlay */}
            <div className="absolute inset-0 bg-white/2 pointer-events-none" />

            {/* 3. Huge Display Typography "JOSHUA" (Figma Node 64:86) */}
            <div className="absolute top-[3%] md:top-[2%] inset-x-0 flex justify-center z-10 pointer-events-none">
                <h1 className="font-marker text-white text-[clamp(5rem,20vw,24rem)] leading-[0.88] tracking-normal text-center uppercase drop-shadow-lg">
                    JOSHUA
                </h1>
            </div>

            {/* 4. Center Cutout of Joshua (Figma Node 64:100) */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 pointer-events-none flex items-end justify-center h-[72vh] md:h-[78vh] lg:h-[82vh] w-auto max-w-full">
                <img
                    src="/joshua-cutout.png"
                    alt="Joshua"
                    className="h-full w-auto max-w-none object-contain object-bottom"
                />
            </div>

            {/* 5. Left Navigation (Figma Frame 19) */}
            <nav
                aria-label="Hero navigation"
                className="absolute left-6 lg:left-12 top-[44%] -translate-y-1/2 z-30 hidden md:flex items-center gap-5 text-white font-sans font-medium text-xl lg:text-2xl tracking-wide"
            >
                <a
                    href="#hero"
                    className="hover:opacity-75 transition-opacity"
                >
                    HOME
                </a>
                <span className="inline-block h-6 w-[1.5px] bg-white/70" aria-hidden="true" />
                <a
                    href="#about"
                    className="hover:opacity-75 transition-opacity"
                >
                    ABOUT ME
                </a>
                <span className="inline-block h-6 w-[1.5px] bg-white/70" aria-hidden="true" />
                <a
                    href="#projects"
                    className="hover:opacity-75 transition-opacity"
                >
                    PROJECTS
                </a>
                <span className="inline-block h-6 w-[1.5px] bg-white/70" aria-hidden="true" />
                <a
                    href="#faq"
                    className="hover:opacity-75 transition-opacity"
                >
                    FAQ
                </a>
            </nav>

            {/* Mobile Navigation (visible only on small screens) */}
            <nav
                aria-label="Mobile navigation"
                className="md:hidden absolute top-4 inset-x-0 z-30 flex items-center justify-center gap-3 text-white font-sans font-medium text-sm tracking-wide bg-black/40 backdrop-blur-md py-2 px-4"
            >
                <a href="#hero" className="hover:opacity-75">HOME</a>
                <span className="h-3.5 w-px bg-white/50" />
                <a href="#about" className="hover:opacity-75">ABOUT ME</a>
                <span className="h-3.5 w-px bg-white/50" />
                <a href="#projects" className="hover:opacity-75">PROJECTS</a>
                <span className="h-3.5 w-px bg-white/50" />
                <a href="#faq" className="hover:opacity-75">FAQ</a>
            </nav>

            {/* 6. Right Tech Stack Badges (Figma Frame 20) */}
            <div className="absolute right-6 lg:right-12 top-[44%] -translate-y-1/2 z-30 hidden md:flex flex-col gap-2.5">
                {/* Row 1 */}
                <div className="flex items-center gap-2.5 justify-end">
                    {techBadgesRow1.map(({ icon: Icon, label, color }) => (
                        <div
                            key={label}
                            className="flex items-center gap-2.5 bg-white/6 backdrop-blur-2xl border border-white text-white font-sans font-medium text-xs px-3.75 py-2.5 rounded-[10px] shadow-sm hover:bg-white/12 transition-colors cursor-default"
                        >
                            <Icon className={`text-base shrink-0 ${color}`} aria-hidden="true" />
                            <span>{label}</span>
                        </div>
                    ))}
                </div>
                {/* Row 2 */}
                <div className="flex items-center gap-2.5 justify-end">
                    {techBadgesRow2.map(({ icon: Icon, label, color }) => (
                        <div
                            key={label}
                            className="flex items-center gap-2.5 bg-white/6 backdrop-blur-2xl border border-white text-white font-sans font-medium text-xs px-3.75 py-2.5 rounded-[10px] shadow-sm hover:bg-white/12 transition-colors cursor-default"
                        >
                            <Icon className={`text-base shrink-0 ${color}`} aria-hidden="true" />
                            <span>{label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* 7. Bottom Contact Dock (Figma Frame 26) */}
            <address className="absolute bottom-8 lg:bottom-10 inset-x-0 z-30 flex flex-wrap items-center justify-center gap-2.5 px-4 not-italic">
                <a
                    href="tel:+27677879978"
                    className="flex items-center gap-2.5 bg-white/6 backdrop-blur-2xl text-white font-sans font-medium text-xs px-3.7 py-2.5 rounded-[10px] hover:bg-white/12 hover:-translate-y-0.5 transition-all shadow-sm"
                    aria-label="Call Joshua"
                >
                    <FaPhone className="text-xs shrink-0" aria-hidden="true" />
                    <span>067 787 9978</span>
                </a>
                <a
                    href="mailto:joshuakruger66@live.com"
                    className="flex items-center gap-2.5 bg-white/6 backdrop-blur-2xl text-white font-sans font-medium text-xs px-3.75 py-2.5 rounded-[10px] hover:bg-white/12 hover:-translate-y-0.5 transition-all shadow-sm"
                    aria-label="Email Joshua"
                >
                    <FaEnvelope className="text-xs shrink-0" aria-hidden="true" />
                    <span>joshuakruger66@live.com</span>
                </a>
                <a
                    href="https://github.com/krugerjoshua"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 bg-white/6 backdrop-blur-2xl text-white font-sans font-medium text-xs px-3.75 py-2.5 rounded-[10px] hover:bg-white/12 hover:-translate-y-0.5 transition-all shadow-sm"
                    aria-label="Joshua's GitHub profile"
                >
                    <FaGithub className="text-sm shrink-0" aria-hidden="true" />
                    <span>github.com/krugerjoshua</span>
                </a>
                <a
                    href="https://www.linkedin.com/in/joshua-kruger-0990a9244/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 bg-white/6 backdrop-blur-2xl text-white font-sans font-medium text-xs px-3.75 py-2.5 rounded-[10px] hover:bg-white/12 hover:-translate-y-0.5 transition-all shadow-sm"
                    aria-label="Joshua's LinkedIn profile"
                >
                    <FaLinkedin className="text-sm shrink-0" aria-hidden="true" />
                    <span className="underline">LinkedIn Profile</span>
                </a>
            </address>
        </section>
    );
}