"use client"; // 1. 브라우저에서 동작하는 기능(클릭, 터치)이므로 필수

import { useState } from "react";
import { X, Maximize2 } from "lucide-react";
// 2. Swiper 라이브러리 불러오기
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs, FreeMode } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// 3. Swiper 스타일시트 (이게 없으면 스타일이 깨집니다)
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

export default function RoomGallery({ images }: { images: string[] }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      {/* ★ 여기가 아까 지우라고 했던 HTML을 대체하는 부분입니다.
        화면에 처음 보이는 '히어로 이미지' 영역입니다.
      */}
      <div className="relative h-[50vh] md:h-[70vh] w-full bg-gray-100 group overflow-hidden">
        {/* 메인 이미지 */}
        <img 
          src={images[0]} // 첫 번째 사진 보여줌
          alt="Room Main" 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 cursor-pointer"
          onClick={() => setIsModalOpen(true)} // 클릭하면 모달 열림
        />
        
        {/* 우측 하단 '전체보기' 버튼 */}
        <button 
          onClick={() => setIsModalOpen(true)}
          className="absolute bottom-6 right-6 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white flex items-center gap-2 hover:bg-white hover:text-[#4A4036] transition border border-white/20"
        >
          <Maximize2 size={16} />
          <span className="text-xs font-bold tracking-widest">
            1 / {images.length}
          </span>
        </button>
      </div>


      {/* ★ 여기가 '진짜 Swiper'가 들어가는 모달 영역입니다. 
        isModalOpen이 true일 때만 화면에 나타납니다.
      */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[9999] bg-black/95 flex flex-col items-center justify-start pt-20 md:pt-24 animate-fade-in">
          
          {/* 닫기 버튼 */}
          <button 
            onClick={() => setIsModalOpen(false)}
            className="absolute top-6 right-6 text-white/70 hover:text-white p-2 z-50"
          >
            <X size={40} />
          </button>

          {/* [Swiper 1] 메인 슬라이더 (큰 사진)
            - thumbs={{ swiper: thumbsSwiper }} : 아래 작은 썸네일과 연결됨
            - navigation : PC용 좌우 화살표 자동 생성
            - pagination : 모바일용 페이지 번호 (1/5)
          */}
          <div className="w-full max-w-7xl h-[60vh] md:h-[75vh] px-0 md:px-10 mb-4">
            <Swiper
              modules={[Navigation, Pagination, Thumbs]}
              thumbs={{ swiper: thumbsSwiper }}
              initialSlide={0}
              loop={true}
              navigation={true}
              pagination={{ type: "fraction" }} 
              spaceBetween={20}
              className="w-full h-full"
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              } as any}
            >
              {images.map((img, idx) => (
                <SwiperSlide key={idx} className="flex items-center justify-center">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <img 
                      src={img} 
                      alt={`Gallery ${idx}`} 
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* [Swiper 2] 썸네일 리스트 (작은 사진들)
            - onSwiper={setThumbsSwiper} : 이 슬라이더의 정보를 상태에 저장해서 위쪽 슬라이더에 전달
          */}
          <div className="w-full max-w-4xl h-16 md:h-20 px-4">
            <Swiper
              onSwiper={setThumbsSwiper}
              modules={[FreeMode, Navigation, Thumbs]}
              spaceBetween={10}
              slidesPerView={5} // 한 번에 5개 보여줌
              freeMode={true}
              watchSlidesProgress={true}
              className="thumbs-swiper h-full"
            >
              {images.map((img, idx) => (
                <SwiperSlide key={idx} className="cursor-pointer opacity-40 hover:opacity-100 transition-opacity rounded-md overflow-hidden border-2 border-transparent ui-selected:border-white">
                  <img src={img} className="w-full h-full object-cover" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
}