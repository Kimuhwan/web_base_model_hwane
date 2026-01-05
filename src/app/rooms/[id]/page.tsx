import { rooms } from "../../data";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReservationBox from "@/components/ReservationBox";
import RoomGallery from "@/components/RoomGallery"; // ★ 갤러리 컴포넌트 불러오기

// 아이콘 불러오기
import { 
  Users, BedDouble, Bath, Waves, Wifi, Sparkles, 
  Utensils, Tv, MountainSnow 
} from "lucide-react";

type Props = {
  params: Promise<{ id: string }>;
};

// 텍스트에 맞는 아이콘을 매핑해주는 함수
const getIcon = (text: string) => {
  if (text.includes("인")) return <Users size={20} />;
  if (text.includes("침대")) return <BedDouble size={20} />;
  if (text.includes("자쿠지") || text.includes("욕조")) return <Bath size={20} />;
  if (text.includes("오션") || text.includes("바다")) return <Waves size={20} />;
  if (text.includes("와이파이")) return <Wifi size={20} />;
  if (text.includes("바비큐") || text.includes("주방")) return <Utensils size={20} />;
  if (text.includes("넷플릭스") || text.includes("TV")) return <Tv size={20} />;
  if (text.includes("가든") || text.includes("숲")) return <MountainSnow size={20} />;
  return <Sparkles size={20} />; // 기본 아이콘
};

export default async function RoomDetail({ params }: Props) {
  const { id } = await params;
  const room = rooms.find((r) => r.id === id);
  if (!room) return notFound();

  return (
    <div className="min-h-screen bg-[#F9F7F2] font-sans animate-fade-in pb-24 md:pb-0"> 
      
      {/* 1. 상단 갤러리 영역 (이미지 배열 전달) */}
      <div className="relative">
        <RoomGallery images={room.images} />
        
        {/* 뒤로가기 버튼 (갤러리 위에 띄움) */}
        <div className="absolute top-6 left-6 z-20">
          <Link href="/" className="px-5 py-2 bg-black/20 backdrop-blur-md text-white border border-white/20 rounded-full text-xs md:text-sm hover:bg-white hover:text-[#4A4036] transition">
            ← Home
          </Link>
        </div>
      </div>

      <main className="max-w-6xl mx-auto py-12 px-6 md:py-20 md:px-12 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* 좌측: 설명 섹션 */}
          <div className="lg:col-span-2">
            <span className="text-[#8C7B6C] text-xs font-bold tracking-widest uppercase mb-2 block">Private Stay</s학만의 감성으로 채워진 공간에서 오롯이 당신만을 위한 시간을 가져보세요. 
              창밖으로 흐르는 풍경과 따스한 햇살이 머무는 이곳에서 진정한 쉼을 제안합니다.
            </p>
            
            {/* 2. 편의시설 섹션 (아이콘 + 그리드 디자인) */}
            <h3 className="text-xl font-serif mb-6 text-[#4A4036]">Amenities</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {room.details.map((detail, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 p-4 bg-white border border-[#EAE5DD] rounded-sm shadow-sm hover:border-[#D4C5B5] transition duration-300"
                >
                  <span className="text-[#8C7B6C]">
                    {getIcon(detail)}
                  </span>
                  <span className="text-[#595048] font-light text-sm md:text-base">
                    {detail}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 우측: PC용 예약 박스 */}
          <div className="hidden lg:block lg:col-span-1">
             <ReservationBox prices={room.price} />
          </div>

        </div>
      </main>

      {/* 모바일 하단 고정바 (이전 코드 유지) */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-[#EAE5DD] p-4 z-50 lg:hidden flex justify-between items-center shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
        <div>
          <span className="text-xs text-[#8C7B6C] block mb-1">Starts From</span>
          <span className="text-xl font-serif font-bold text-[#4A4036]">
            ₩ {typeof room.price === 'object' ? room.price.low.toLocaleString() : room.price}~
          </span>
        </div>
        <a 
          href="https://booking.naver.com/" 
          target="_blank"
          className="bg-[#4A4036] text-[#F9F7F2] px-8 py-3 rounded-sm text-sm font-bold tracking-wider hover:bg-[#3E3A36] transition"
        >
          예약하기
        </a>
      </div>

    </div>
  );
}
