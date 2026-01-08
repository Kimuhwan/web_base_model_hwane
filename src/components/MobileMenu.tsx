"use client";

import { useState } from "react";
import Link from "next/link";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* 1. 햄버거 버튼 (열기) */}
      <button 
        onClick={() => setIsOpen(true)} 
        className="text-[#4A4036] p-2 focus:outline-none z-50 relative"
      >
        {/* SVG 아이콘: 3단 줄 */}
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* 2. 전체 화면 오버레이 메뉴 */}
      <div className={`fixed inset-0 bg-[#4A4036] z-50 transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* 닫기 버튼 (X) */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-8 right-8 text-[#F9F7F2] p-2"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* 메뉴 링크들 */}
        <div className="flex flex-col items-center justify-center h-full space-y-10 text-[#F9F7F2]">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-3xl font-serif tracking-[0.2em]">HOME</Link>
          <Link href="#rooms" onClick={() => setIsOpen(false)} className="text-3xl font-serif tracking-[0.2em]">ROOMS</Link>
          <Link href="#about" onClick={() => setIsOpen(false)} className="text-3xl font-serif tracking-[0.2em]">ABOUT</Link>
          <Link href="#location" onClick={() => setIsOpen(false)} className="text-3xl font-serif tracking-[0.2em]">LOCATION</Link>
        </div>
      </div>
    </div>
  );
}