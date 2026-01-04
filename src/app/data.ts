export const rooms = [
  {
    id: "forest-401",
    name: "Forest 401",
    price: { low: 180000, semi: 240000, peak: 350000 },
    description: "개인 바베큐와 함께 자연의 품에 안긴 듯한 편안함을 제공하는 고급스러운 객실입니다.",
    // ★ 핵심 수정: image(문자열) -> images(배열)
    images: [
      "https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyNDA5MTZfMTEg%2FMDAxNzI2NDk3NDgyMjYw.9rFr6FwASrf7xOCWO1b4IQOvmssLJFlrvPF11pMpUUcg.LrHbDXCZSopsQCiVCmd5juHDRIGryGo3wPG2NmqKTR4g.JPEG%2FBAA9FBB4-9C2B-4FC5-AF60-814EBA395336.jpeg%3Ftype%3Dw1500_60_sharpen", // 메인
      "https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyNDExMDJfMTM0%2FMDAxNzMwNTE2ODQ1ODQz.-5tdOv6ag8jpN_4tNQOAf2bnG3rJpuZt2dJ50BMoJ2Qg.J2nEgWQV8DfhyIJgXy_DZag7bO6eN_NvpxOw1ANU160g.JPEG%2FF8D76E2A-3A82-49E1-85DC-9EF1CAD704DB.jpeg%3Ftype%3Dw1500_60_sharpen", // 침실
      "https://search.pstatic.net/common/?src=https%3A%2F%2Fnaverbooking-phinf.pstatic.net%2F20230908_19%2F1694161105920W6IjE_JPEG%2FKakaoTalk_20230903_190422528_02.jpg", // 욕실
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTA5MDNfMjQg%2FMDAxNzU2ODYzMTQ1NzAw.iAbOTLEMDU_YcmNJlniaWb95SrhskQ_e-XbqFP1SkNUg.myWoL2GvZmlTbs_v7VLF0IrFQg6ejMrTrKme82n0SCYg.JPEG%2FIMG%25A3%25DF3721.JPG"  // 뷰
    ],
    // ★ 편의시설 키워드 정리 (아이콘 매핑용)
    details: ["최대 3인", "퀸사이즈 침대", "개별 바비큐", "숲뷰", "주방시설", "넷플릭스"]
  },
  {
    id: "garden-terrace",
    name: "Garden Terrace",
    price: { low: 150000, semi: 200000, peak: 280000 },
    description: "숲 내음 가득한 개별 정원과 야외 바비큐 시설이 완비된 아늑한 힐링 공간입니다.",
    images: [
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2070",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1740",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1740",
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=1740"
    ],
    details: ["최대 4인", "퀸사이즈 침대 2개", "개별 바비큐", "가든뷰", "주방시설", "넷플릭스"]
  },
{
    id: "zakuji-villa",
    name: "Zakuji Villa",
    price: {
    low: 150000,
    semi: 200000,
    peak: 280000
    },
    description: "개인 자쿠지와 전용 수영장이 있는 고급 빌라로, 프라이빗한 휴식을 제공합니다.",
    images: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070",
    "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1740",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1740",
    "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=1740"
    ],
    details: ["최대 4인", "킹사이즈 침대", "개인 자쿠지", "전용 수영장"]
  },
  {
    id: "sunset-loft",
    name: "Sunset Loft",
    price: {
        low: 130000,
        semi: 180000,
        peak: 250000
    },
    description: "넓은 공간과 대형 창문으로 일몰을 감상할 수 있는 로프트 스타일의 객실입니다.",
    images: ["https://images.unsplash.com/photo-1674758979141-4e3521ba7321?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&q=80&w=2070",
    "https://images.unsplash.com/photo-1501183638714-8d36e0dc4a7d?q=80&w=1740",
    "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1740",
    "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1740"
    ],
    details: ["최대 3인", "더블 침대", "일몰 전망", "로프트 스타일"]
  }
];