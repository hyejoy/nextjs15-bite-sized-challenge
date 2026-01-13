## 📂 프로젝트 구조

```bash
section04/
├─ 📂src/
│  ├─ 📂app/
│  │  ├─ layout.tsx
│  │  ├─ page.tsx
│  │  └─ globals.css
│  └─ 📂components/
│     └─ ...
├─ 📂public/
│  └─ favicon.ico
├─ .eslintrc.json
├─ .gitignore
├─ next.config.js
├─ package.json
├─ README.md
└─ tsconfig.json

```

## 페이지 설명

1. Root 페이지

- 인덱스 경로(`/`)에 해당하는 페이지
- App Router의 기본 페이지로, `app/page.tsx`에서 렌더링된다
- 서버 컴포넌트 기반으로 초기 렌더링이 수행된다

2. Layout 구성

- `app/layout.tsx` 파일을 통해 전체 페이지의 공통 레이아웃을 관리한다
- 모든 하위 페이지는 해당 레이아웃을 공유한다
- 전역 스타일(`globals.css`)이 이 레이아웃에서 적용된다

3. 컴포넌트 구조

- 공통 UI 컴포넌트는 `src/components` 디렉토리에서 관리한다
- 페이지 컴포넌트와 UI 컴포넌트를 분리하여 구조를 명확히 한다
