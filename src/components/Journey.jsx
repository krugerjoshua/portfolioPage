import { milestones } from "../data/journeyData";

export default function Journey() {
    return (
        <section
            id="journey"
            className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center select-none overflow-x-clip"
        >
            {/* Title: MY JOURNEY */}
            <h2 className="font-marker text-white text-5xl md:text-6xl text-center uppercase tracking-normal mb-16 drop-shadow-lg">
                MY JOURNEY
            </h2>

            {/* Desktop Timeline (Large screens) */}
            <div className="relative w-full hidden lg:block" style={{ minHeight: "560px" }}>
                {/* SVG S-Curve Path connecting milestones */}
                <div
                    className="absolute left-1/2 -translate-x-1/2 top-4 pointer-events-none"
                    style={{ width: "207px", height: "222px" }}
                >
                    <img
                        src="/journey-line.svg"
                        alt=""
                        aria-hidden="true"
                        className="w-full h-full object-contain"
                    />
                </div>

                {/* Milestones mapped dynamically from journeyData */}
                {milestones.map((m, idx) => {
                    const isRight = m.side === "right";
                    const isStart = idx === 0;

                    return (
                        <div
                            key={m.title + idx}
                            className={`absolute flex ${
                                m.description
                                    ? "items-start max-w-sm xl:max-w-md"
                                    : "items-center max-w-xs xl:max-w-sm"
                            } gap-3 ${isRight ? "left-1/2" : "right-1/2"}`}
                            style={{
                                top: m.topOffset,
                                transform: `translateX(${isRight ? "103px" : "-103px"})`,
                            }}
                        >
                            {/* Left-side milestone: text first, dot second */}
                            {!isRight && (
                                <div className="text-right font-sans">
                                    <div className="text-sm leading-snug">
                                        <span className="font-semibold text-white">
                                            {m.title}
                                        </span>{" "}
                                        <span className="italic text-neutral-300">
                                            {m.subtitle} {m.period}
                                        </span>
                                    </div>
                                    {m.description && (
                                        <p className="mt-2 text-xs text-neutral-300 leading-relaxed font-light">
                                            {m.description}
                                        </p>
                                    )}
                                </div>
                            )}

                            {/* Milestone Dot */}
                            <div
                                className={`${
                                    isStart
                                        ? "w-[18px] h-[18px] rounded-full border-2 border-white bg-neutral-900"
                                        : "w-3.5 h-3.5 rounded-full bg-neutral-400"
                                } shrink-0 ${m.description ? "mt-1" : ""}`}
                            />

                            {/* Right-side milestone: dot first, text second */}
                            {isRight && (
                                <div className="text-left font-sans">
                                    <div className="text-sm leading-snug">
                                        <span className="font-semibold text-white">
                                            {m.title}
                                        </span>{" "}
                                        <span className="italic text-neutral-300">
                                            {m.subtitle} {m.period}
                                        </span>
                                    </div>
                                    {m.description && (
                                        <p className="mt-2 text-xs text-neutral-300 leading-relaxed font-light">
                                            {m.description}
                                        </p>
                                    )}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Mobile / Tablet Vertical Fallback */}
            <div className="w-full max-w-xl mx-auto flex flex-col lg:hidden">
                {milestones.map((m, idx) => (
                    <div key={idx} className="flex gap-4">
                        {/* Left column: dot + connecting line */}
                        <div className="flex flex-col items-center pt-1 shrink-0">
                            <div className="w-3.5 h-3.5 rounded-full bg-white border-2 border-neutral-900 shrink-0" />
                            {idx < milestones.length - 1 && (
                                <div className="w-px flex-1 bg-white/20 mt-1 mb-0 min-h-[2rem]" />
                            )}
                        </div>
                        {/* Right column: text content */}
                        <div className={`flex-1 font-sans ${idx < milestones.length - 1 ? "pb-8" : ""}`}>
                            <div className="text-sm leading-snug">
                                <span className="font-semibold text-white">{m.title}</span>{" "}
                                <span className="italic text-neutral-300 text-xs block sm:inline">
                                    {m.subtitle} {m.period}
                                </span>
                            </div>
                            {m.description && (
                                <p className="text-xs text-neutral-300 leading-relaxed font-light mt-1.5">
                                    {m.description}
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
