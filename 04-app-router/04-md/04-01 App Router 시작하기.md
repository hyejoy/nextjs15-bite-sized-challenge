# section04-01 App Router 시작하기.

## ✅ App Router

- Next.js13 버전에 새롭게 추가된 라우터
- 기존의 Page Router를 완전히 대체

## App Router에서 변경되거나 추가되는 사항

- 페이지 라우팅 설정 방식 변경
- 레이아웃 설정 방식 변경
- 데이터 패칭 방식 변경
- React 18 버전부터 새롭게 추가된
  React Server Component나 스트리밍 등등의 최신 기능들도 사용

## 크게 변경되지 않는 사항

- 네비게이팅 (Navigation)
- 프리페칭 (Pre-Fetching)
- 사전 렌더링 (Pre-Rendering)

## App Router Next App 실습 방향

- 새로운 앱 라우터 버전의 넥스트 앱을 직접 생성
- 어떠한 방식으로 동작하게 되는지 학습

## 실습 진행 순서

```bash
npx create-next-app@15 section04 [강의버전]
npx create-next-app@latest section04 [최신버전]

Ok to proceed? (y) y

√ Would you like to use TypeScript? ... Yes
√ Which linter would you like to use? » ESLint
√ Would you like to use Tailwind CSS? ... No / Yes
√ Would you like your code inside a `src/` directory? ... Yes
√ Would you like to use App Router? (recommended) ... Yes
√ Would you like to use Turbopack? (recommended) ... No
√ Would you like to customize the import alias (`@/*` by default)? ... No
```
