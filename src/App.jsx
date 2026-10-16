import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-neutral-800 selection:text-white">
      <Navbar />
      <main className="flex flex-col gap-12">
        <Hero />
        <About />
        <Projects />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

