# 봄날심리상담센터 — 프로젝트 구조

Vercel(프론트엔드 배포) + NestJS(백엔드 API) + Supabase(데이터베이스) 조합으로
구성된 프로젝트입니다.

```
bomnal-platform/
├── web/          프론트엔드 — 지금까지 만든 홈페이지 (정적 HTML), Vercel에 배포
├── api/          백엔드 — NestJS, 예약 문의를 Supabase에 저장
└── supabase/     Supabase 테이블 스키마 (SQL)
```

## 왜 이렇게 나뉘어 있나요?

- **web** (프론트엔드): 사람들이 보는 실제 홈페이지. 지금까지 만들던 디자인/문구가
  그대로 들어 있습니다. Vercel은 정적 사이트 배포에 최적화되어 있어서 이 폴더를
  그대로 올립니다.
- **api** (백엔드): 예약 문의 폼이 제출되면 이 서버가 받아서 Supabase에 저장합니다.
  Vercel이 아닌 Render/Railway 같은 곳에 따로 올립니다 (자세한 이유는
  `api/README.md` 참고).
- **supabase**: 실제 데이터(예약 문의 내역)가 저장되는 데이터베이스. 가입만 하면
  무료로 바로 쓸 수 있습니다.

## 처음 설정하는 순서

1. **Supabase 프로젝트 만들기** — [supabase.com](https://supabase.com)에서 새
   프로젝트 생성 → SQL Editor에서 `supabase/schema.sql` 실행 → `reservations`
   테이블 생성 확인.
2. **API 배포** — `api/README.md` 안내대로 Render 또는 Railway에 `api` 폴더를
   배포하고, Supabase URL/키를 환경변수로 등록.
3. **프론트엔드 배포** — `web/README.md` 안내대로 Vercel에 `web` 폴더를 배포.
4. **연결** — `web/public/index.html`의 `API_BASE_URL`을 2번에서 받은 API 주소로
   바꾸고 다시 배포.
5. 홈페이지에서 예약 폼을 실제로 제출해보고, Supabase 테이블에 데이터가 들어오는지
   확인.

## GitHub에 올리기

이 폴더 전체를 하나의 GitHub 저장소로 올리면, Vercel에서는 Root Directory를
`web`으로, Render/Railway에서는 Root Directory를 `api`로 각각 지정해서 같은
저장소에서 두 곳을 배포할 수 있습니다.

```bash
cd bomnal-platform
git init
git add .
git commit -m "init: 봄날심리상담센터 프로젝트 구조"
git remote add origin <본인 깃허브 저장소 주소>
git push -u origin main
```
