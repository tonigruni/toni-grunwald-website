"use client";

import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Pitch",        href: "#pitch" },
  { label: "Work",         href: "#projects" },
  { label: "Track Record", href: "#track-record" },
  { label: "Contact",      href: "mailto:toni.grunwald@gmail.com" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop py-6 max-w-[1920px] mx-auto transition-all duration-300">
      <Link
        href="/"
        className="flex items-center gap-5 text-on-surface hover:text-primary transition-colors shrink-0"
      >
        <Image src="/TG favicon.png" alt="" width={44} height={44} className="rounded-sm shrink-0" />
        <span style={{ fontFamily: '"ThePlanet", sans-serif', fontSize: '2.5rem', letterSpacing: '0.02em', marginTop: '6px' }}>
          Toni Grunwald
        </span>
      </Link>
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="font-label-bold text-label-bold uppercase tracking-widest text-on-surface/60 hover:text-primary transition-colors text-[11px]"
          >
            {l.label}
          </a>
        ))}
      </div>
      <div className="flex md:hidden items-center gap-4">
        <a href="https://www.linkedin.com/in/toni-grunwald/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="inline-flex items-center text-primary hover:opacity-80 transition-opacity">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block" }}>
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
            <rect x="2" y="9" width="4" height="12"/>
            <circle cx="4" cy="4" r="2"/>
          </svg>
        </a>
      </div>
    </nav>
  );
}
