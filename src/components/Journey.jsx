import React from "react";

const milestones = [
    {
        side: "right", // Milestone 1 (Top right)
        title: "Shelf Packer",
        subtitle: "Gansbaai Superspar",
        period: "December Holidays 2018 - 2020",
        description: null,
        topOffset: "0px",
    },
    {
        side: "left", // Milestone 2 (Upper left)
        title: "General Worker",
        subtitle: "Marine Growers",
        period: "Mar 2021 - Aug 2021",
        description: null,
        topOffset: "45px",
    },
    {
        side: "right", // Milestone 3 (Middle right)
        title: "Sales Agent",
        subtitle: "Telkom (Feathercom)",
        period: "Aug 2021 - Present",
        description:
            "Recreated multiple websites using Zoho, including minor front-end adjustments and structured content layouts. Designed custom visual elements and icons for web use. Developed a logo concept and client presentation for a prospective brand.",
        topOffset: "100px",
    },
    {
        side: "left", // Milestone 4 (Bottom left)
        title: "Software Development",
        subtitle: "Freelance",
        period: "Jan 2025 - Present",
        description:
            "Worked independently on software development projects, turning ideas and requirements into functional digital solutions. Developed and maintained applications while troubleshooting technical issues, improving functionality, and continuously learning new technologies and development practices. Worked directly with clients to understand their needs, communicate progress, and deliver solutions that are practical, reliable, and user-friendly. Managing projects independently has strengthened my problem-solving, time management, communication, and ability to take ownership from initial idea through to completion.",
        topOffset: "160px",
    },
];

export default function Journey() {
    return (
        <section
            id="journey"
            className="relative w-full max-w-6xl mx-auto px-6 py-20 flex flex-col items-center select-none"
        >
            {/* Title: MY JOURNEY */}
            <h2 className="font-marker text-white text-5xl md:text-6xl text-center uppercase tracking-normal mb-16 drop-shadow-lg">
                MY JOURNEY
            </h2>

            {/* Desktop / Tablet Timeline */}
            <div className="relative w-full hidden md:block" style={{ minHeight: "440px" }}>
                {/* SVG S-Curve Path connecting milestones */}
                <div
                    className="absolute left-1/2 -translate-x-1/2 top-4 pointer-events-none"
                    style={{ width: "207px", height: "166px" }}
                >
                    <img
                        src="/journey-line.svg"
                        alt=""
                        aria-hidden="true"
                        className="w-full h-full object-contain"
                    />
                </div>

                {/* Milestone 1: Top Right */}
                <div
                    className="absolute left-1/2 flex items-center gap-3"
                    style={{ top: "0px", transform: "translateX(103px)" }}
                >
                    <div className="w-[18px] h-[18px] rounded-full border-2 border-white bg-neutral-900 shrink-0" />
                    <div className="text-left font-sans text-sm leading-snug">
                        <span className="font-semibold text-white">Shelf Packer</span>{" "}
                        <span className="italic text-neutral-300">
                            Gansbaai Superspar December Holidays 2018 - 2020
                        </span>
                    </div>
                </div>

                {/* Milestone 2: Upper Left */}
                <div
                    className="absolute right-1/2 flex items-center gap-3"
                    style={{ top: "45px", transform: "translateX(-103px)" }}
                >
                    <div className="text-right font-sans text-sm leading-snug">
                        <span className="font-semibold text-white">General Worker</span>{" "}
                        <span className="italic text-neutral-300">
                            Marine Growers Mar 2021 - Aug 2021
                        </span>
                    </div>
                    <div className="w-3.5 h-3.5 rounded-full bg-neutral-400 shrink-0" />
                </div>

                {/* Milestone 3: Middle Right */}
                <div
                    className="absolute left-1/2 flex items-start gap-3 max-w-md"
                    style={{ top: "100px", transform: "translateX(103px)" }}
                >
                    <div className="w-3.5 h-3.5 rounded-full bg-neutral-400 shrink-0 mt-1" />
                    <div className="text-left font-sans">
                        <div className="text-sm leading-snug">
                            <span className="font-semibold text-white">Sales Agent</span>{" "}
                            <span className="italic text-neutral-300">
                                Telkom (Feathercom) Aug 2021 - Present
                            </span>
                        </div>
                        <p className="mt-2 text-xs text-neutral-300 leading-relaxed font-light">
                            Recreated multiple websites using Zoho, including minor front-end
                            adjustments and structured content layouts. Designed custom visual
                            elements and icons for web use. Developed a logo concept and client
                            presentation for a prospective brand.
                        </p>
                    </div>
                </div>

                {/* Milestone 4: Bottom Left */}
                <div
                    className="absolute right-1/2 flex items-start gap-3 max-w-lg"
                    style={{ top: "155px", transform: "translateX(-103px)" }}
                >
                    <div className="text-right font-sans">
                        <div className="text-sm leading-snug">
                            <span className="font-semibold text-white">Software Development</span>{" "}
                            <span className="italic text-neutral-300">
                                Freelance Jan 2025 - Present
                            </span>
                        </div>
                        <p className="mt-2 text-xs text-neutral-300 leading-relaxed font-light">
                            Worked independently on software development projects, turning ideas and
                            requirements into functional digital solutions. Developed and maintained
                            applications while troubleshooting technical issues, improving functionality,
                            and continuously learning new technologies and development practices.
                            Worked directly with clients to understand their needs, communicate
                            progress, and deliver solutions that are practical, reliable, and
                            user-friendly. Managing projects independently has strengthened my
                            problem-solving, time management, communication, and ability to take
                            ownership from initial idea through to completion.
                        </p>
                    </div>
                    <div className="w-3.5 h-3.5 rounded-full bg-neutral-400 shrink-0 mt-1" />
                </div>
            </div>

            {/* Mobile Vertical Fallback */}
            <div className="w-full flex flex-col gap-8 md:hidden relative pl-6 border-l border-white/20">
                {milestones.map((m, idx) => (
                    <div key={idx} className="relative flex flex-col gap-1">
                        <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-white border-2 border-neutral-900" />
                        <div className="text-sm font-sans">
                            <span className="font-semibold text-white">{m.title}</span>{" "}
                            <span className="italic text-neutral-300 text-xs block sm:inline">
                                {m.subtitle} {m.period}
                            </span>
                        </div>
                        {m.description && (
                            <p className="text-xs text-neutral-300 leading-relaxed font-light mt-1">
                                {m.description}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
