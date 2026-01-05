// components/SmoothScroll.tsx
"use client"; // 클라이언트 컴포넌트 선언

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // 스크롤 감속 시간
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // 가속도 곡선
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return null; // 화면엔 안 보이고 기능만 실행
}