import {
    FaLightbulb,
    FaHandshake,
    FaRocket,
    FaBook,
    FaUserCircle,
    FaPuzzlePiece,
} from "react-icons/fa";

const traits = [
    { icon: FaLightbulb, label: "Problem Solver" },
    { icon: FaHandshake, label: "Team Player" },
    { icon: FaRocket, label: "Adaptable" },
    { icon: FaBook, label: "Continuous Learner" },
    { icon: FaUserCircle, label: "User Focused" },
    { icon: FaPuzzlePiece, label: "Detail-Oriented" },
];

export default function About() {
    return (
        <section
            id="about"
            className="relative w-full max-w-6xl mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center"
        >
            {/* Title: ABOUT ME (Figma Node 77:23036) */}
            <h2 className="font-marker text-white text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-normal uppercase mb-6 leading-none select-none">
                ABOUT ME
            </h2>

            {/* Subtitle / Bio (Figma Node 77:23037) */}
            <p className="font-sans font-medium text-neutral-200 text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-10 text-center">
                Software developer with a passion for solving problems, building
                useful applications, and continuously learning. I enjoy creating
                software that's not only functional but thoughtfully built.
            </p>

            {/* Trait Pills (Figma Frame 30) */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-5xl">
                {traits.map(({ icon: Icon, label }) => (
                    <div
                        key={label}
                        className="flex items-center gap-2.5 bg-white/[0.06] backdrop-blur-[40px] text-white font-sans font-medium text-xs sm:text-sm px-4 py-2.5 rounded-[10px] shadow-sm hover:bg-white/[0.12] hover:-translate-y-0.5 transition-all cursor-default"
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
    );
}
