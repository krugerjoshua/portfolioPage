import React, { useState } from "react";
import { traits } from "../data/heroData";
import { faqs } from "../data/faqData";
import { FaChevronDown } from "react-icons/fa";

export default function FAQ() {
    const [openId, setOpenId] = useState(null);

    const toggleFaq = (id) => {
        setOpenId((prev) => (prev === id ? null : id));
    };

    return (
        <section
            id="faq"
            className="relative w-full py-28 md:py-36 px-6 overflow-hidden select-none"
        >
            {/* ── Dark Wave Ribbon Background (Figma Node 110:839) ── */}
            <div
                className="absolute inset-0 -z-10 pointer-events-none flex items-center justify-center overflow-hidden"
                aria-hidden="true"
            >
                <img
                    src="/footer-wave.png"
                    alt=""
                    className="w-[140%] min-w-[1500px] max-w-none h-auto object-cover opacity-95"
                />
            </div>

            <div className="relative max-w-4xl mx-auto flex flex-col items-center text-center">
                {/* ── Title: FAQ (Figma Node 92:755) ── */}
                <h2 className="font-marker text-white text-5xl sm:text-6xl md:text-7xl uppercase tracking-normal drop-shadow-lg mb-6 leading-none">
                    FAQ
                </h2>

                {/* ── Subtitle Description (Figma Node 92:756) ── */}
                <p className="font-sans font-medium text-neutral-200 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-8 text-center">
                    Software developer with a passion for solving problems, building useful
                    applications, and continuously learning. I enjoy creating software
                    that&apos;s not only functional but thoughtfully built.
                </p>

                {/* ── Trait Pills (Figma Node 92:757) ── */}
                <div className="flex flex-wrap items-center justify-center gap-3 max-w-3xl mb-14">
                    {traits.map(({ icon: Icon, label }) => (
                        <div
                            key={label}
                            className="flex items-center gap-2.5 bg-white/[0.06] backdrop-blur-[20px] text-white font-sans font-medium text-xs sm:text-sm px-4 py-2.5 rounded-[10px] shadow-sm border border-white/10 hover:bg-white/[0.12] transition-colors cursor-default"
                        >
                            <Icon className="text-sm shrink-0 opacity-90" aria-hidden="true" />
                            <span>{label}</span>
                        </div>
                    ))}
                </div>

                {/* ── Interactive FAQ Accordion List ── */}
                <div className="w-full flex flex-col gap-3.5 text-left">
                    {faqs.map((faq) => {
                        const isOpen = openId === faq.id;
                        return (
                            <div
                                key={faq.id}
                                className="bg-white/[0.04] backdrop-blur-[20px] border border-white/10 rounded-[12px] overflow-hidden transition-colors hover:border-white/20"
                            >
                                <button
                                    type="button"
                                    onClick={() => toggleFaq(faq.id)}
                                    className="w-full flex items-center justify-between gap-4 p-5 text-left font-sans font-semibold text-white text-sm sm:text-base focus:outline-none"
                                    aria-expanded={isOpen}
                                >
                                    <span>{faq.question}</span>
                                    <FaChevronDown
                                        className={`text-xs shrink-0 text-white/70 transition-transform duration-300 ${
                                            isOpen ? "rotate-180 text-white" : ""
                                        }`}
                                        aria-hidden="true"
                                    />
                                </button>
                                {isOpen && (
                                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans border-t border-white/5">
                                        <p>{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
