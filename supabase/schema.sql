-- 봄날심리상담센터 예약 문의 테이블
-- Supabase 대시보드의 SQL Editor에 붙여넣고 실행하세요.

create table if not exists public.reservations (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  phone text not null,
  field text not null,
  method text not null,
  preferred_date text,
  message text
);

-- NestJS 서버는 service_role 키로 접속하므로 RLS를 켜 두어도 안전하게 동작합니다.
-- 혹시 모를 사고(프론트에서 anon 키로 직접 접근하는 실수 등)를 막기 위해 RLS를 켜 둡니다.
alter table public.reservations enable row level security;

-- service_role 키는 RLS를 우회하므로 별도 정책이 없어도 서버(API)에서는 정상 동작합니다.
-- anon/authenticated 권한으로는 기본적으로 아무 접근도 허용하지 않습니다(정책 없음 = 거부).
