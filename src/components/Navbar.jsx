import React from 'react';
import { Rocket, Github, Linkedin } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#home" className="group inline-flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white shadow-lg shadow-indigo-500/20">
                <Rocket size={18} />
              </span>
              <span className="font-semibold tracking-tight">Your Name</span>
            </a>

            <nav className="hidden items-center gap-6 md:flex">
              <a href="#projects" className="text-sm text-white/80 hover:text-white transition">Projects</a>
              <a href="#contact" className="text-sm text-white/80 hover:text-white transition">Contact</a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white text-black text-sm px-4 py-2 font-medium hover:opacity-90 transition"
              >
                Download CV
              </a>
            </nav>

            <div className="flex items-center gap-2">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="rounded-full p-2 hover:bg-white/10 transition"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="rounded-full p-2 hover:bg-white/10 transition"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
