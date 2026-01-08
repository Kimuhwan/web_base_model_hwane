"use client";
import { rooms } from "@/app/data";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import Link from "next/link";

export function MainPopup() {
  const [isOpen, setIsOpen] = useState(false);

  // 컴포넌트 마운트 시, '오늘 하루 보지 않기' 체크 여부 확인
  useEffect(() => {
    const doNotShowDate = localStorage.getItem("popup_hidden_date");
    const today = new Date().toDateString();

    // 저장된 날짜가 오늘과 다르면 팝업 띄움
    if (doNotShowDate !== today) {
      setIsOpen(true);
    }
  }, []);

  // '오늘 하루 보지 않기' 클릭 핸들러
  const handleDoNotShowToday = () => {
    // 로컬 스토리지에 '오늘 날짜' 저장
    localStorage.setItem("popup_hidden_date", new Date().toDateString());
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* 1. 뒷배경 (검은색 반투명) */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-fade-in" />

      {/* 2. 팝업 컨텐츠 박스 */}
      <div className="relative bg-[#F9F7F2] w-full max-w-md rounded-sm shadow-2xl overflow-hidden animate-slide-up">
        
        {/* 상단 이미지 영역 (이벤트 사진) */}
        <div className="relative h-64 bg-gray-200">
            {/* 실제 사용 시엔 <img> 태그나 next/image를 쓰세요 */}
            <img 
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop" 
              alt="Event" 
              className="w-full h-full object-cover"
            />
            
            {/* 닫기 버튼 (우측 상단) */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full text-white hover:bg-white hover:text-[#4A4036] transition"
            >
              <X size={20} />
            </button>
        </div>

        {/* 텍스트 내용 */}
        <div className="p-8 text-center">
          <span className="text-[#8C7B6C] text-xs font-bold tracking-widest uppercase mb-2 block">
            Grand Opening
          </span>
          <h2 className="text-2xl font-serif text-[#4A4036] mb-4">
            오픈 기념 20% 할인
          </h2>
          <p className="text-[#595048] text-sm leading-relaxed mb-8 break-keep">
            자연의미학 펜션 오픈을 기념하여<br/>
            3월 한 달간 전 객실 20% 할인 이벤트를 진행합니다.<br/>
            따스한 봄날, 특별한 휴식을 선물하세요.
          </p>

          <div className="flex flex-col gap-3">
            {/* 예약하러 가기 버튼 */}
            <Link 
              href={rooms[0] ? `/rooms/${rooms[0].id}` : "/"}
              onClick={() => setIsOpen(false)}
              className="w-full bg-[#4A4036] text-white py-3 font-bold hover:bg-[#3E3A36] transition"
            >
              할인받고 예약하기
            </Link>
          </div>
        </div>

        {/* 하단 '오늘 하루 보지 않기' 바 */}
        <div className="bg-[#EAE5DD] px-6 py-3 flex justify-between items-center text-xs text-[#595048]">
          <button 
            onClick={handleDoNotShowToday}
            className="flex items-center gap-2 hover:text-black transition"
          >
            <div className="w-4 h-4 border border-[#8C7B6C] rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-[#8C7B6C] rounded-full opacity-0 hover:opacity-100" />
            </div>
            오늘 하루 보지 않기
          </button>

          <button 
            onClick={() => setIsOpen(false)}
            className="font-bold underline underline-offset-2 hover:text-black"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}