"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "홈", desc: "首 (Home)" },
  { href: "/about", label: "아카이브 소개", desc: "誌 (About)" },
  { href: "/genealogy", label: "가문 계보도", desc: "譜 (Genealogy)" },
  { href: "/people", label: "주요 인물", desc: "賢 (Figures)" },
  { href: "/archive", label: "사료 아카이브", desc: "錄 (Records)" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-muk-sharp bg-white/90 backdrop-blur-md transition-colors">
      <div className="container mx-auto flex h-18 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand / Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1a1a1a] text-[#D9C58F] font-serif font-black text-xl shadow-xs border border-[#3E6586]/30 group-hover:border-[#7BA2BE] group-hover:bg-[#0c0c0c] transition-all">
            柳
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-lg text-[#0c0c0c] tracking-tight group-hover:text-[#3E6586] transition-colors">
              전주류씨 디지털 아카이브
            </span>
            <span className="text-[10px] font-medium text-[#666666] tracking-widest uppercase">
              asharyu design system · 陰陽五行
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3.5 py-2 text-sm font-semibold rounded-md transition-all duration-200 ${
                  isActive
                    ? "text-[#3E6586] bg-[#ECF2F6] font-bold shadow-2xs"
                    : "text-[#333333] hover:text-[#0c0c0c] hover:bg-[#F6F1E3]/60"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#3E6586] rounded-full" />
                )}
              </Link>
            );
          })}

          {/* GitHub Repository Badge */}
          <a
            href="https://github.com/yoonjonglyu/jjryuarchive"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 inline-flex items-center gap-1.5 rounded-full border border-muk-sharp bg-white px-3 py-1 text-xs font-semibold text-[#333333] hover:border-[#3E6586] hover:text-[#3E6586] hover:bg-[#ECF2F6] transition-all shadow-2xs"
          >
            <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex md:hidden items-center justify-center p-2 rounded-md text-[#333333] hover:text-[#0c0c0c] hover:bg-[#F6F1E3]"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden border-b border-muk-sharp bg-white/95 px-4 pt-2 pb-4 space-y-1 shadow-md">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-semibold ${
                  isActive
                    ? "bg-[#ECF2F6] text-[#3E6586] font-bold"
                    : "text-[#333333] hover:bg-[#F6F1E3]"
                }`}
              >
                {link.label} <span className="text-xs text-[#777777] ml-1">({link.desc})</span>
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
