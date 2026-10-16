import {
    SiJavascript,
    SiPython,
    SiReact,
    SiHtml5,
    SiTailwindcss,
} from "react-icons/si";
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const badges = [
    { icon: SiJavascript, label: "JavaScript" },
    { icon: SiPython, label: "Python" },
    { icon: SiReact, label: "React" },
    { icon: SiHtml5, label: "HTML" },
    { icon: SiTailwindcss, label: "TailwindCSS" },
];

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative flex min-h-[calc(100vh-5rem)] items-center justify-center overflow-hidden"
        >
            {/* Background Image */}
            <img
                src="/hero-bg.jpg"
                alt=""
                aria-hidden="true"
                fetchPriority="high"
                className="absolute inset-0 z-0 h-full w-full object-cover object-center"
            />

            {/* Contrast Overlay */}
            <div className="absolute inset-0 z-0 bg-black/50" />

            {/* Foreground Content */}
            <div className="relative z-20 mx-auto flex max-w-6xl flex-col items-center justify-center px-6 py-24 text-center">
                <h1 className="font-marker text-white text-[clamp(3.5rem,12vw,9rem)] leading-[0.85] tracking-tight">
                    Joshua
                </h1>
                <nav
                    aria-label="Hero navigation"
                    className="mt-2 flex items-center gap-3 text-white text-sm sm:text-base tracking-wide"
                >
                    <a href="#hero" className="hover:text-neutral-300">HOME</a>
                    <span className="text-neutral-500" aria-hidden="true">|</span>
                    <a href="#about" className="hover:text-neutral-300">ABOUT ME</a>
                    <span className="text-neutral-500" aria-hidden="true">|</span>
                    <a href="#projects" className="hover:text-neutral-300">PROJECTS</a>
                    <span className="text-neutral-500" aria-hidden="true">|</span>
                    <a href="#faq" className="hover:text-neutral-300">FAQ</a>
                </nav>
            </div>

            {/* Tech Badges */}
            <div className="absolute top-6 right-6 grid grid-cols-3 gap-2 z-30">
                {badges.map(({ icon: Icon, label }) => (
                    <span
                        key={label}
                        className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full"
                    >
                        <Icon className="shrink-0" aria-hidden="true" /> {label}
                    </span>
                ))}
            </div>

            {/* Cutout */}
            <img
                src="/hero-cutout.png"
                alt="Portrait of Joshua"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 sm:left-auto sm:right-[8%] sm:translate-x-0 w-[70%] sm:w-[36%] max-w-md z-10 pointer-events-none"
            />

            {/* Contact Footer */}
            <address className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-white text-sm z-30 not-italic">
                <a
                    href="tel:+27677879978"
                    className="flex items-center gap-2 hover:text-neutral-300"
                    aria-label="Call Joshua"
                >
                    <FaPhone aria-hidden="true" /> 067 787 9978
                </a>
                <a
                    href="mailto:joshuakruger66@live.com"
                    className="flex items-center gap-2 hover:text-neutral-300"
                    aria-label="Email Joshua"
                >
                    <FaEnvelope aria-hidden="true" /> joshuakruger66@live.com
                </a>
                <a
                    href="https://github.com/krugerjoshua"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-neutral-300"
                    aria-label="Joshua's GitHub profile"
                >
                    <FaGithub aria-hidden="true" /> github.com/krugerjoshua
                </a>
                <a
                    href="https://www.linkedin.com/in/joshua-kruger-0990a9244/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-neutral-300 underline"
                    aria-label="Joshua's LinkedIn profile"
                >
                    <FaLinkedin aria-hidden="true" /> LinkedIn Profile
                </a>
            </address>
        </section>
    );
}