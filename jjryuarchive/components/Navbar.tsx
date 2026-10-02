"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "홈", desc: "Home" },
  { href: "/about", label: "아카이브 소개", desc: "About" },
  { href: "/genealogy", label: "가문 계보도", desc: "Genealogy" },
  { href: "/people", label: "주요 인물", desc: "Figures" },
  { href: "/archive", label: "사료 아카이브", desc: "Records" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-200/80 glass-header shadow-xs">
      <div className="container mx-auto flex h-18 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo / Brand */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-amber-500 font-serif font-black text-xl shadow-inner group-hover:bg-slate-800 transition-colors">
            柳
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-lg text-slate-900 tracking-tight group-hover:text-amber-800 transition-colors">
              전주류씨 디지털 아카이브
            </span>
            <span className="text-[11px] font-medium text-slate-500 tracking-wider uppercase">
              Jeonju Ryu Clan Digital Heritage
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3.5 py-2 text-sm font-semibold rounded-md transition-all duration-200 ${
                  isActive
                    ? "text-slate-950 bg-stone-100/90 shadow-2xs font-bold"
                    : "text-slate-600 hover:text-slate-900 hover:bg-stone-100/50"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-amber-700 rounded-full" />
                )}
              </Link>
            );
          })}

          {/* GitHub / External Contribution Badge */}
          <a
            href="https://github.com/yoonjonglyu/jjryuarchive"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 inline-flex items-center gap-1.5 rounded-full border border-stone-300 bg-white px-3 py-1 text-xs font-medium text-slate-700 hover:border-slate-400 hover:bg-slate-50 transition-colors shadow-2xs"
          >
            <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex md:hidden items-center justify-center p-2 rounded-md text-slate-700 hover:text-slate-900 hover:bg-stone-100 focus:outline-hidden"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden border-b border-stone-200 bg-white/95 px-4 pt-2 pb-4 space-y-1 shadow-md">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-semibold ${
                  isActive
                    ? "bg-stone-100 text-slate-950 font-bold"
                    : "text-slate-700 hover:bg-stone-50 hover:text-slate-900"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-2 border-t border-stone-100">
            <a
              href="https://github.com/yoonjonglyu/jjryuarchive"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900"
            >
              GitHub 아카이브 저장소 열기 →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
