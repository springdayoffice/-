# api — 봄날심리상담센터 예약 API (NestJS + Supabase)

예약 문의 폼에서 전송된 내용을 Supabase의 `reservations` 테이블에 저장하는
간단한 API 서버입니다.

## 로컬 개발

```bash
cd api
npm install
cp .env.example .env   # 값 채워 넣기
npm run start:dev
```

`http://localhost:3000/reservations` 로 POST 요청이 들어오면 Supabase에 저장됩니다.

## 환경변수

`.env.example` 참고. Supabase 프로젝트의 **Settings → API** 메뉴에서
`Project URL`과 `service_role` 키를 복사해 넣으세요. (anon 키 아님 — service_role은
서버에서만 쓰는 비밀 키입니다.)

## Supabase 테이블 만들기

`../supabase/schema.sql` 내용을 Supabase 대시보드의 **SQL Editor**에 붙여넣고
실행하면 `reservations` 테이블이 생성됩니다.

## 배포

Vercel은 NestJS처럼 계속 켜져 있는(long-running) 서버를 그대로 올리기엔 적합하지
않아서(서버리스 함수 방식이라 추가 설정이 필요합니다), 아래 중 하나를 추천합니다.

- **Render** (`render.com`) — Node 서비스로 이 `api` 폴더를 연결, Build Command
  `npm install && npm run build`, Start Command `npm run start:prod`.
- **Railway** (`railway.app`) — 위와 동일한 방식, GitHub 저장소 연결만 하면 자동 감지.

배포 후 생긴 주소(예: `https://bomnal-api.onrender.com`)를 `web/public/index.html`의
`API_BASE_URL`에 넣어주면 프론트엔드와 연결됩니다. 배포 환경에도 `.env.example`과
같은 환경변수를 꼭 설정해 주세요.
