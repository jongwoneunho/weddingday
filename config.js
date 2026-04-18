/**
 * Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: false,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "이종원",
    nameEn: "Lee Jong Won",
    father: "이한배",
    mother: "어경하",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "이은호",
    nameEn: "Lee Eun Ho",
    father: "이재돈",
    mother: "김미정",
    fatherDeceased: false,
    motherDeceased: true
  },

  wedding: {
    date: "2026-10-03",
    time: "11:30",
    venue: "신도림 더 세인트",
    hall: "그랜드볼룸홀",
    address: "서울특별시 구로구 경인로 662 디큐브시티 6층",
    tel: "02-2211-2400",
    mapLinks: {
      kakao: "https://place.map.kakao.com/191537409",
      naver: "https://naver.me/xExWm05A"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "서로 다른 길을 걸어온 두 사람이\n이제 같은 길을 함께 걸어가려 합니다.\n\n저희의 새로운 시작을\n축복해 주시면 감사하겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "함께할수록 즐거운 종원이와 은호가 만나\n이제 평생의 여정을 함께하려 합니다.\n\n설레는 첫걸음에 함께해 주세요."
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "이종원", bank: "기업은행", number: "000-000-000000" },
      { role: "아버지", name: "이한배", bank: "신한은행", number: "000-000-000000" },
      { role: "어머니", name: "어경하", bank: "우리은행", number: "000-000-000000" }
    ],
    bride: [
      { role: "신부", name: "이은호", bank: "국민은행", number: "392801-04-151538" },
      { role: "아버지", name: "이재돈", bank: "국민은행", number: "000-000-000000" },
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "이종원 ♥ 이은호 결혼합니다",
    description: "2026년 10월 3일, 소중한 분들을 초대합니다.",
     image: "https://jongwoneunho.github.io/ourwedding/images/og/1.jpg"
  }
};
