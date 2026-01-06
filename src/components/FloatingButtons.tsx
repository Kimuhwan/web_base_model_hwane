"use client";

import { MessageCircle, Instagram } from "lucide-react";

export default function FloatingButtons() {
  // 공통 스타일 변수 (유지보수를 위해)
  const baseButtonClass = "w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full shadow-xl hover:scale-110 transition-transform duration-200";

  return (
    // 컨테이너: 우측 하단 고정, 세로 정렬(flex-col), 간격 3(gap-3)
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-row gap-3 items-end">
      
      {/* 1. 인스타그램 버튼 (위) */}
      <a
        href="https://www.instagram.com/본인아이디" // 링크 수정 필수
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
        // 인스타 그라데이션 배경 + 공통 스타일
        className={`${baseButtonClass} bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white`}
      >
        <Instagram size={24} />
      </a>

      {/* 2. 카카오톡 버튼 (아래) - 이제 아이콘만! */}
      <a
        href="https://open.kakao.com/o/본인링크" // 링크 수정 필수
        target="_blank"
        rel="noreferrer"
        aria-label="KakaoTalk 상담"
        // 카카오 노란색 배경 + 테두리 + 공통 스타일
        className={`${baseButtonClass} bg-[#FAE100] text-[#3B1E1E] border border-black/5`}
      >
        <MessageCircle size={24} fill="#3B1E1E" /> {/* fill을 넣어서 좀 더 꽉 차 보이게 수정 */}
      </a>

    </div>
  );
}