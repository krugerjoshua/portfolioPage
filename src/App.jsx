import React from "react";
import Navbar from "./components/Navbar";
import HeroAbout from "./components/HeroAbout";
import Journey from "./components/Journey";
import Projects from "./components/Projects";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function App() {
    return (
        <div className="min-h-screen text-neutral-100 selection:bg-neutral-800 selection:text-white">
            {/* Fixed page-level background — persists on scroll */}
            <img
                src="/hero-bg.jpg"
                alt=""
                aria-hidden="true"
                fetchPriority="high"
                className="fixed inset-0 h-full w-full object-cover object-center pointer-events-none -z-10"
            />
            {/* Subtle darkening overlay */}
            <div className="fixed inset-0 bg-black/40 pointer-events-none -z-10" />
            <Navbar />
            <main className="flex flex-col">
                <HeroAbout />
                <Journey />
                <Projects />
                <FAQ />
            </main>
            <Footer />
        </div>
    );
}
