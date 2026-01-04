import Link from "next/link";
import { rooms } from "./data";
import MobileMenu from "@/components/MobileMenu";
import NaverMap from "@/components/NaverMap";
export default function Home() {
  return (
    <div className="min-h-screen text-[#4A4036] font-sans selection:bg-[#8C7B6C]">
      
      {/* 네비게이션 */}
      <nav className="fixed top-0 w-full z-40 px-6 py-6 md:px-12 md:py-10 flex justify-between items-center text-[#F9F7F2]">
        <h1 className="text-2xl md:text-3xl font-serif font-bold tracking-widest cursor-pointer z-50 text-[#3E3A36] mix-blend-difference">
          <Link href="/">자연의 미학</Link>
        </h1>
        
        {/* PC 메뉴: 폰트 크기 적절히 조절 (text-base) */}
        <div className="hidden md:flex space-x-12 text-base font-normal tracking-[0.2em]">
          <Link href="#rooms" className="hover:opacity-70 transition pb-1 border-b border-transparent hover:border-white/50">객실</Link>
          <Link href="#about" className="hover:opacity-70 transition pb-1 border-b border-transparent hover:border-white/50">소개</Link>
          <Link href="#location" className="hover:opacity-70 transition pb-1 border-b border-transparent hover:border-white/50">위치</Link>
        </div>

        {/* 모바일 메뉴 */}
        <MobileMenu />
      </nav>

      {/* 히어로 섹션 */}
      <header className="relative h-[100dvh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://mblogthumb-phinf.pstatic.net/MjAyMDA0MjBfNjIg/MDAxNTg3MzA5MTcyMjI1.Xbw3_WzwmwImrwq4O_IkIeew63R0XQ2FeAp5PaDsgEEg.X3x_wmbvzlLrtv2ACicuhmD8M-vxnoLP8pg36vLlPcwg.JPEG.nimo126/IMG_0544.jpg?type=w800" 
            alt="Main Background" 
            className="w-full h-full object-cover filter brightness-[0.85] sepia-[15%] grayscale-[10%]" 
          />
        </div>
        <div className="relative z-10 text-center text-[#F9F7F2] space-y-8 animate-fade-in px-4">
          <div className="w-[1px] h-16 md:h-24 bg-[#F9F7F2]/60 mx-auto mb-8"></div>
          
          <p className="text-lg md:text-xl font-serif tracking-[0.5em] opacity-90 font-light">
            자연속 감성 스테이
          </p>
          
          {/* 폰트 크기 안정화: 모바일 5xl, PC 8xl (9xl은 너무 커서 깨질 수 있음) */}
          <h2 className="text-5xl md:text-8xl font-serif font-medium leading-tight tracking-wide break-keep">
            자연의<br />미학
          </h2>
          
          <p className="text-sm md:text-base font-light tracking-[0.3em] opacity-80 pt-4">
            Hwasun, KOREA
          </p>
        </div>
      </header>

      {/* 객실 소개 */}
      <section id="rooms" className="max-w-7xl mx-auto py-24 md:py-40 px-6 md:px-12">
        <div className="text-center mb-20 md:mb-32">
          <h3 className="text-3xl md:text-4xl font-serif mb-4 text-[#3E3A36]">공간을 잇다</h3>
          <p className="text-xs md:text-sm text-[#8C7B6C] tracking-[0.3em] uppercase">Our Private Rooms</p>
        </div>

        <div className="space-y-24 md:space-y-32">
          {rooms.map((room, index) => (
            <Link key={room.id} href={`/rooms/${room.id}`} className="group block">
              <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-20 items-center`}>
                
                {/* 이미지 */}
                <div className="w-full md:w-3/5 overflow-hidden rounded-sm shadow-xl">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={room.images[0]} 
                      alt={room.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-[1.5s] ease-out filter brightness-[0.95]"
                    />
                  </div>
                </div>

                {/* 텍스트: PC에서 너무 크지 않게 조절 */}
                <div className="w-full md:w-2/5 text-center md:text-left space-y-4 md:space-y-6 px-2">
                  <h4 className="text-3xl md:text-5xl font-serif text-[#3E3A36] group-hover:text-[#8C7B6C] transition">
                    {room.name}
                  </h4>
                  
                  <div className="w-8 h-[1px] bg-[#D4C5B5] mx-auto md:mx-0"></div>
                  
                  <p className="text-base md:text-lg text-[#595048] leading-loose font-light break-keep line-clamp-3 md:line-clamp-none">
                    {room.description}
                  </p>
                  
                  <p className="text-xl md:text-2xl font-serif pt-2 text-[#4A4036]">
                    ₩ {typeof room.price === 'object' ? room.price.low.toLocaleString() : room.price} ~
                  </p>
                  
                  <div className="pt-2 hidden md:block">
                     <span className="text-sm border-b border-[#8C7B6C] pb-1 text-[#8C7B6C]">자세히 보기</span>
                  </div>
                </div>

              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 md:py-40 px-6 md:px-12 bg-[#F9F7F2]/50">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h3 className="text-3xl md:text-4xl font-serif tracking-[0.2em] text-[#3E3A36]">ABOUT</h3>
          <div className="w-[1px] h-12 bg-[#D4C5B5] mx-auto"></div>
          <p className="text-lg md:text-3xl leading-relaxed font-light break-keep text-[#595048]">
            자연의 미학은 단순한 휴식 그 이상을 의미합니다.
            자연과 조화를 이루는 공간에서 진정한 쉼과 영감을 제공합니다.
            계절의 변화와 함께하는 풍경, 그리고 세심하게 준비된 편의시설이 어우러져 머무는 이들에게 특별한 경험을 선사합니다.
            자연의 미학에서 당신만의 이야기를 만들어보세요.
          </p>
        </div>
      </section>

{/* LOCATION 섹션
      <section id="location" className="py-24 md:py-40 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <h3 className="text-3xl md:text-4xl font-serif tracking-[0.2em] text-[#3E3A36]">LOCATION</h3>
          <p className="text-lg font-light text-[#595048]">
            강원도 강릉시 해안로 1234 (안목해변 차량 5분)
          </p>
          
        
          <div className="w-full aspect-video rounded-sm overflow-hidden shadow-lg border border-[#4A4036]/10 relative z-0">
             <NaverMap/>
          </div>

        </div>
      </section> */}

{/* LOCATION */}
      <section id="location" className="py-24 md:py-40 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <h3 className="text-3xl md:text-4xl font-serif tracking-[0.2em] text-[#3E3A36]">LOCATION</h3>
          <p className="text-lg font-light text-[#595048]">
            전라남도 화순군 이서면 천태로 755-15 (화순읍 차량 10분)
          </p>
          
          {/* 네이버 지도 이미지 링크 */}
          <a 
            href="https://naver.me/5Nm9pP2M" // 실제 펜션의 네이버 지도 URL로 교체
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full aspect-video bg-gray-100 rounded-sm overflow-hidden shadow-lg border border-[#4A4036]/10 group relative"
          >
            {/* 정적 지도 이미지 (강릉 지도 캡처본 예시) */}
            <img 
              src="https://navermaps.github.io/android-map-sdk/assets/2-3-basic.png" 
              alt="Map Location" 
              className="w-full h-full object-cover group-hover:scale-105 transition duration-700 filter grayscale-[20%]"
            />
          
          </a>
        </div>
      </section>
      <footer className="py-20 text-center border-t border-[#EAE5DD] bg-[#F9F7F2]">
        <h2 className="font-serif text-2xl mb-6 text-[#3E3A36] opacity-60">자연의 미학</h2>
        <p className="text-xs text-[#8C7B6C] font-light tracking-widest">
          &copy; 2026 nature stay.
        </p>
      </footer>
    </div>
  );
}