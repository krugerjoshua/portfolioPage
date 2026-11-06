import React from "react";
import { projects } from "../data/projectsData";
import {
    SiReact,
    SiJavascript,
    SiTailwindcss,
    SiTypescript,
    SiNodedotjs,
    SiHtml5,
    SiCss,
    SiPython,
    SiElixir,
    SiPhoenixframework,
} from "react-icons/si";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

// Map tag names to icon components & branding colors
const tagIconMap = {
    React: { icon: SiReact, color: "text-[#61DAFB]" },
    JavaScript: { icon: SiJavascript, color: "text-[#F7DF1E]" },
    TailwindCSS: { icon: SiTailwindcss, color: "text-[#06B6D4]" },
    TypeScript: { icon: SiTypescript, color: "text-[#3178C6]" },
    "Node.js": { icon: SiNodedotjs, color: "text-[#5FA04E]" },
    HTML: { icon: SiHtml5, color: "text-[#E34F26]" },
    CSS: { icon: SiCss, color: "text-[#1572B6]" },
    Python: { icon: SiPython, color: "text-white" },
    Elixir: { icon: SiElixir, color: "text-[#A366FF]" },
    Phoenix: { icon: SiPhoenixframework, color: "text-[#FD4F00]" },
};

export default function Projects() {
    return (
        <section
            id="projects"
            className="relative w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-24 md:py-32 select-none"
        >
            {/* ── Section Header (Figma Node 109:619) ── */}
            <div className="flex flex-col items-center text-center mb-16 md:mb-24">
                <h2 className="font-marker text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-normal uppercase drop-shadow-lg leading-none">
                    PROJECTS
                </h2>
                <p className="font-sans font-medium text-neutral-200 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed mt-6">
                    Software developer with a passion for solving problems, building
                    useful applications, and continuously learning. I enjoy creating
                    software that&apos;s not only functional but thoughtfully built.
                </p>
            </div>

            {/* ── Project Cards (Figma Node 110:757) ── */}
            <div className="flex flex-col gap-20 md:gap-28 lg:gap-36">
                {projects.map((project, index) => {
                    // Alternating layout: odd indexes reverse order on desktop
                    const isEven = index % 2 === 1;

                    return (
                        <article
                            key={project.id}
                            className={`flex flex-col gap-8 md:gap-12 lg:gap-16 items-center ${
                                isEven ? "lg:flex-row-reverse" : "lg:flex-row"
                            }`}
                        >
                            {/* ── Project Content / Description ── */}
                            <div className="w-full lg:w-1/2 flex flex-col gap-5 md:gap-6 text-left">
                                <h3 className="font-marker text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-normal uppercase leading-tight drop-shadow-md">
                                    {project.number} {project.title}
                                </h3>

                                <p className="font-sans font-normal text-neutral-300 text-xs sm:text-sm md:text-base leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Tech Badge Pills */}
                                <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mt-1">
                                    {project.tags.map((tag) => {
                                        const tagMeta = tagIconMap[tag];
                                        const Icon = tagMeta?.icon;
                                        const iconColor = tagMeta?.color || "text-white";

                                        return (
                                            <div
                                                key={tag}
                                                className="flex items-center gap-2 bg-white/[0.06] backdrop-blur-[20px] text-white font-sans font-medium text-xs sm:text-sm px-4 py-2.5 rounded-[10px] shadow-sm border border-white/10 hover:bg-white/[0.12] transition-colors cursor-default"
                                            >
                                                {Icon && (
                                                    <Icon
                                                        className={`text-sm shrink-0 ${iconColor}`}
                                                        aria-hidden="true"
                                                    />
                                                )}
                                                <span>{tag}</span>
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* Optional Action Links (GitHub / Live Demo) */}
                                {(project.liveUrl !== "#" || project.githubUrl !== "#") && (
                                    <div className="flex items-center gap-4 mt-2">
                                        {project.liveUrl !== "#" && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-xs font-semibold text-white underline underline-offset-4 hover:text-neutral-300 transition-colors"
                                            >
                                                <span>Live Demo</span>
                                                <FaExternalLinkAlt className="text-[10px]" />
                                            </a>
                                        )}
                                        {project.githubUrl !== "#" && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-xs font-semibold text-white underline underline-offset-4 hover:text-neutral-300 transition-colors"
                                            >
                                                <span>Source Code</span>
                                                <FaGithub className="text-xs" />
                                            </a>
                                        )}
                                    </div>
                                )}
                            </div>

                            {/* ── Project Preview Image ── */}
                            <div className="w-full lg:w-1/2 flex justify-center">
                                <div className="relative w-full max-w-2xl rounded-[15px] overflow-hidden bg-black/30 border border-white/10 shadow-2xl group">
                                    <img
                                        src={project.image}
                                        alt={project.imageAlt || project.title}
                                        loading="lazy"
                                        className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                                    />
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}
