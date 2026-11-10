import React from "react";
import { highSchoolSubjects, codespaceSkills } from "../data/educationData";

export default function Education() {
    return (
        <section
            id="education"
            className="relative w-full py-28 md:py-36 px-6 overflow-hidden select-none"
        >
            {/* ── Dark Wave Ribbon Background (Figma Node 109:237) ── */}
            <div
                className="absolute inset-0 -z-10 pointer-events-none flex items-center justify-center overflow-hidden"
                aria-hidden="true"
            >
                <img
                    src="/education-wave.svg"
                    alt=""
                    className="w-[140%] min-w-[1500px] max-w-none h-auto object-cover opacity-95"
                />
            </div>

            <div className="relative max-w-4xl mx-auto flex flex-col items-center text-center">
                {/* ── Title: EDUCATION ── */}
                <h2 className="font-marker text-white text-5xl sm:text-6xl md:text-7xl uppercase tracking-normal drop-shadow-lg mb-10 leading-none">
                    EDUCATION
                </h2>

                {/* ── Block 1: High School Overberg ── */}
                <div className="w-full flex flex-col items-center mb-16 md:mb-20">
                    <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6">
                        <span className="font-sans font-semibold text-white text-base sm:text-lg">
                            High School Overberg
                        </span>
                        <span className="font-sans font-medium italic text-neutral-300 text-sm sm:text-base">
                            2020
                        </span>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-3 max-w-3xl">
                        {highSchoolSubjects.map(({ icon: Icon, label }) => (
                            <div
                                key={label}
                                className="flex items-center gap-2.5 bg-white/[0.06] backdrop-blur-[20px] text-white font-sans font-medium text-xs sm:text-sm px-4 py-2.5 rounded-[10px] shadow-sm border border-white/10 hover:bg-white/[0.12] transition-colors cursor-default"
                            >
                                <Icon className="text-sm shrink-0 opacity-90" aria-hidden="true" />
                                <span>{label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Block 2: CodeSpace ── */}
                <div className="w-full flex flex-col items-center">
                    <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
                        <span className="font-sans font-semibold text-white text-base sm:text-lg">
                            CodeSpace
                        </span>
                        <span className="font-sans font-normal text-neutral-300 text-sm sm:text-base">
                            Software Development Certificate · 2024
                        </span>
                    </div>

                    <p className="font-sans font-normal text-neutral-300 text-xs sm:text-sm leading-relaxed max-w-3xl mx-auto mb-8 text-center">
                        Completed a software development programme covering web development
                        fundamentals, JavaScript, and modern frontend development. Built a
                        foundation in HTML, CSS and JavaScript, while gaining experience with
                        Git, GitHub, VS Code, wireframing and Figma. Progressed into advanced
                        JavaScript concepts including functional programming, error handling,
                        object-oriented programming and state management, with hands-on
                        experience using React.js and exposure to TypeScript, Vue.js, Svelte.js
                        and other modern frameworks. Developed problem-solving and
                        critical-thinking skills while learning to use AI tools effectively
                        throughout the development process.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-3 max-w-2xl">
                        {codespaceSkills.map(({ icon: Icon, label }) => (
                            <div
                                key={label}
                                className="flex items-center gap-2.5 bg-white/[0.06] backdrop-blur-[20px] text-white font-sans font-medium text-xs sm:text-sm px-4 py-2.5 rounded-[10px] shadow-sm border border-white/10 hover:bg-white/[0.12] transition-colors cursor-default"
                            >
                                <Icon className="text-sm shrink-0 opacity-90" aria-hidden="true" />
                                <span>{label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
