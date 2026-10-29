# web — 봄날심리상담센터 홈페이지 (프론트엔드)

Next.js 같은 프레임워크 없이, 순수 HTML/CSS/JS 한 파일(`public/index.html`)로 되어 있는
정적 사이트입니다. Vercel은 이런 정적 파일도 별도 설정 없이 그대로 배포할 수 있습니다.

## 로컬에서 확인하기

브라우저로 `public/index.html` 파일을 그냥 열어도 되고, 아래처럼 간단히 로컬 서버를 띄워도 됩니다.

```bash
cd web
npx serve public
```

## Vercel 배포하기

1. 이 `web` 폴더를 GitHub 저장소에 올립니다 (또는 저장소 안의 하위 폴더로 둡니다).
2. [vercel.com](https://vercel.com)에서 "Add New Project" → 해당 저장소 선택.
3. **Root Directory**를 `web`으로 지정합니다 (저장소 루트에 `api` 폴더도 함께 있는 경우 꼭 필요합니다).
4. Framework Preset은 "Other"로 두면 됩니다. Build Command/Output Directory는 비워 두어도
   Vercel이 `public/` 폴더를 정적 파일로 자동 서빙합니다.
5. Deploy를 누르면 `https://프로젝트명.vercel.app` 주소가 생기고, 이 주소는 로그인 여부와
   상관없이 누구나 열 수 있습니다.

## 예약 폼 연결

`public/index.html` 맨 아래 `<script>`에 있는 다음 줄을 실제 배포된 API 주소로 바꿔주세요.

```js
const API_BASE_URL = 'https://YOUR-API-DOMAIN';
```

`api` 폴더(NestJS)를 배포한 뒤 그 주소를 넣으면, 예약 폼 제출 시 Supabase의
`reservations` 테이블에 데이터가 저장됩니다. API 연결에 실패하면 기존처럼 메일 앱이
열리는 방식으로 자동 대체됩니다.
