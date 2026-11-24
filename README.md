# 자연의 미학

화순의 숙소를 소개하는 Next.js 웹 데모입니다. 메인에서 객실을 고르면 사진 갤러리와 객실별 이용 안내를 볼 수 있습니다. 예약 버튼은 네이버 예약으로 연결됩니다.

[객실 둘러보기](https://webbasemodelhwane.vercel.app/)

## 프로젝트 구성

- [객실 데이터](src/app/data.ts)에 객실 이름과 사진, 요금 등 화면에 표시할 정보를 모았습니다.
- [객실 상세 페이지](src/app/rooms)에서 [사진 갤러리](src/components/RoomGallery.tsx)와 [예약 안내](src/components/ReservationBox.tsx)를 함께 보여줍니다.

## 로컬에서 실행

```sh
npm ci
npm run dev
```

브라우저에서 [로컬 사이트](http://localhost:3000)를 엽니다. 배포용으로 빌드할 때는 `npm run build`를 실행합니다.
