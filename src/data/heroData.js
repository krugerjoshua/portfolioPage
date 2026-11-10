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

export const techBadgesRow1 = [
    { icon: SiJavascript, label: "JavaScript", color: "text-[#F7DF1E]" },
    { icon: SiPython, label: "Python", color: "text-white" },
    { icon: SiReact, label: "React", color: "text-[#61DAFB]" },
];

export const techBadgesRow2 = [
    { icon: SiHtml5, label: "HTML", color: "text-[#E34F26]" },
    { icon: SiCss, label: "CSS", color: "text-[#1572B6]" },
    { icon: SiTailwindcss, label: "TailwindCSS", color: "text-[#06B6D4]" },
];

export const traits = [
    { icon: FaLightbulb, label: "Problem Solver" },
    { icon: FaHandshake, label: "Team Player" },
    { icon: FaRocket, label: "Adaptable" },
    { icon: FaBook, label: "Continuous Learner" },
    { icon: FaUserCircle, label: "User Focused" },
    { icon: FaPuzzlePiece, label: "Detail-Oriented" },
];

export const contactLinks = [
    {
        href: "tel:+27677879978",
        icon: FaPhone,
        label: "Call Joshua",
        text: "067 787 9978",
    },
    {
        href: "mailto:joshuakruger66@live.com",
        icon: FaEnvelope,
        label: "Email Joshua",
        text: "joshuakruger66@live.com",
    },
    {
        href: "https://github.com/krugerjoshua",
        icon: FaGithub,
        label: "GitHub profile",
        text: "github.com/krugerjoshua",
    },
    {
        href: "https://www.linkedin.com/in/joshua-kruger-0990a9244/",
        icon: FaLinkedin,
        label: "LinkedIn profile",
        text: "LinkedIn Profile",
        underline: true,
    },
];
