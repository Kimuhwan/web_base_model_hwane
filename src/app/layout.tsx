// app/layout.tsx
import type { Metadata } from "next";
import { Noto_Serif_KR } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll"; // 방금 만든 거 가져오기

// 폰트 설정
const serif = Noto_Serif_KR({
  subsets: ["latin"],
  weight: ["300", "400", "600", "900"],
  variable: "--font-serif",
  display: "swap",
});

// 메타데이터 (서버 컴포넌트라 여기서만 작동함)
export const metadata: Metadata = {
  title: "자연의 미학 | 감성 스테이",
  description: "화순의 산맥과 자연 속에 위치한 감성 스테이. 진정한 휴식과 영감을 선사합니다.",
  
  openGraph: {
    title: "자연의 미학 - Stay Hwasun",
    description: "화순의 산맥과 자연 속에 위치한 감성 스테이. 진정한 휴식과 영감을 선사합니다.",
    url: "https://webbasemodelhwane.vercel.app/",
    siteName: "자연의 미학",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyNDA5MTZfMTEg%2FMDAxNzI2NDk3NDgyMjYw.9rFr6FwASrf7xOCWO1b4IQOvmssLJFlrvPF11pMpUUcg.LrHbDXCZSopsQCiVCmd5juHDRIGryGo3wPG2NmqKTR4g.JPEG%2FBAA9FBB4-9C2B-4FC5-AF60-814EBA395336.jpeg%3Ftype%3Dw1500_60_sharpen", 
        width: 1200,
        height: 630,
        alt: "자연의 미학 전경",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "자연의 미학 | 감성 스테이",
    description: "화순의 산맥과 자연 속에 위치한 감성 스테이. 진정한 휴식과 영감을 선사합니다.",
    images: ["https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyNDA5MTZfMTEg%2FMDAxNzI2NDk3NDgyMjYw.9rFr6FwASrf7xOCWO1b4IQOvmssLJFlrvPF11pMpUUcg.LrHbDXCZSopsQCiVCmd5juHDRIGryGo3wPG2NmqKTR4g.JPEG%2FBAA9FBB4-9C2B-4FC5-AF60-814EBA395336.jpeg%3Ftype%3Dw1500_60_sharpen"],
  },
  
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
        {/* 여기서 스크롤 기능을 실행시킵니다 */}
        <SmoothScroll /> 
        {children}
      </body>
    </html>
  );
}