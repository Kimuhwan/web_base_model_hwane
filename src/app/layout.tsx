import type { Metadata } from "next";
import { Noto_Serif_KR } from "next/font/google";
import "./globals.css";

const serif = Noto_Serif_KR({
  subsets: ["latin"],
  weight: ["300", "400", "600", "900"],
  variable: "--font-serif",
  display: "swap",
});

// ★ 여기를 수정합니다! (사장님 설득용 멘트 + 썸네일)
export const metadata: Metadata = {
  // 1. 브라우저 탭 이름
  title: "자연의 미학 | 감성 스테이",
  
  // 2. 검색 엔진 설명
  description: "화순의 산맥과 자연 속에 위치한 감성 스테이. 진정한 휴식과 영감을 선사합니다.",

  // 3. SNS 공유용 (카톡, 인스타 DM)
  openGraph: {
    title: "자연의 미학 - Stay Hwasun",
    description: "화순의 산맥과 자연 속에 위치한 감성 스테이. 진정한 휴식과 영감을 선사합니다.",
    url: "https://webbasemodelhwane.vercel.app/", // 배포된 실제 주소 (나중에 나오면 수정)
    siteName: "자연의 미학",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        // 썸네일로 띄울 '가장 예쁜 사진' 주소 (Unsplash 주소 그대로 써도 됨)
        url: "https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyNDA5MTZfMTEg%2FMDAxNzI2NDk3NDgyMjYw.9rFr6FwASrf7xOCWO1b4IQOvmssLJFlrvPF11pMpUUcg.LrHbDXCZSopsQCiVCmd5juHDRIGryGo3wPG2NmqKTR4g.JPEG%2FBAA9FBB4-9C2B-4FC5-AF60-814EBA395336.jpeg%3Ftype%3Dw1500_60_sharpen", 
        width: 1200,
        height: 630,
        alt: "자연의 미학 전경",
      },
    ],
  },

  // 4. 트위터/X 카드 설정
  twitter: {
    card: "summary_large_image",
    title: "자연의 미학 | 감성 스테이",
    description: "화순의 산맥과 자연 속에 위치한 감성 스테이. 진정한 휴식과 영감을 선사합니다.",
    images: ["https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyNDA5MTZfMTEg%2FMDAxNzI2NDk3NDgyMjYw.9rFr6FwASrf7xOCWO1b4IQOvmssLJFlrvPF11pMpUUcg.LrHbDXCZSopsQCiVCmd5juHDRIGryGo3wPG2NmqKTR4g.JPEG%2FBAA9FBB4-9C2B-4FC5-AF60-814EBA395336.jpeg%3Ftype%3Dw1500_60_sharpen"],
  },
  
  // 5. 아이콘 (선택사항)
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${serif.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}