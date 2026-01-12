# section03-01 Page Router를 소개합니다.

## ✅ Page Router란?

- pages 폴더의 구조를 기반으로 페이지를 라우팅
- pages 폴더에 들어있는 파일들의 이름을 기반으로 페이지 라우팅을 자동으로 제공
- 폴더의 이름을 기준으로도 페이지 라우팅을 설정할 수가 있음

## 기본 파일 기반 라우팅

```text
pages/
├─ index.js
├─ about.js
└─ contact.js
```

| 파일               | URL        |
| ------------------ | ---------- |
| `pages/index.js`   | `/`        |
| `pages/about.js`   | `/about`   |
| `pages/contact.js` | `/contact` |

### 디렉토리 구조

```text
pages/
└─ blog/
   └─ index.js
```

| 파일                  | URL     |
| --------------------- | ------- |
| `pages/blog/index.js` | `/blog` |

### 중첩 폴더 + 파일 라우팅

```text
pages/
└─ blog/
   ├─ index.js
   └─ post.js

```

| 파일                  | URL          |
| --------------------- | ------------ |
| `pages/blog/index.js` | `/blog`      |
| `pages/blog/post.js`  | `/blog/post` |

### 중첩 폴더 라우팅

```text
pages/
└─ products/
   └─ electronics/
      └─ index.js

```

| 파일                                  | URL                     |
| ------------------------------------- | ----------------------- |
| `pages/products/electronics/index.js` | `/products/electronics` |

### 동적 경로

: Next.js Page Router에서는 파일 또는 폴더 이름에 대괄호([])를 사용하여
동적인 URL 경로를 처리할 수 있다.

```text
pages/
└─ posts/
   └─ [id].js

```

| URL 요청       | 매칭되는 파일         |
| -------------- | --------------------- |
| `/posts/1`     | `pages/posts/[id].js` |
| `/posts/abc`   | `pages/posts/[id].js` |
| `/posts/12345` | `pages/posts/[id].js` |

## Page Router 버전의 Next App 생성하기

### 개요

`npx`를 사용하여 **Next.js Page Router 기반 프로젝트**를 생성한다.

---

### 현재 작업 디렉토리

```text
nextjs15-bite-sized-challenge/03-page-router/onebite-next
```

---

### 실행 명령어

```bash
npx create-next-app@14 section03
```

### next.js 실행

```bash
npm run dev
```

### 참고사항

: 페이지라우터는 14v ,앱 라우터는 15v으로 진행 예정

## Page Router 기본 폴더 구조

Next.js Page Router 프로젝트를 생성하면 다음과 같은 기본 디렉토리 구조가 생성된다.

```text
section03/
├─ pages/
│  ├─ api/
│  │  └─ hello.js
│  ├─ _app.js
│  └─ index.js
├─ public/
│  └─ favicon.ico
├─ styles/
│  ├─ globals.css
│  └─ Home.module.css
├─ .eslintrc.json
├─ .gitignore
├─ next.config.js
├─ package.json
└─ README.md

```

## 주요 폴더 및 파일 설명

### pages/

- Page Router의 핵심 디렉토리
- 파일 및 폴더 구조를 기준으로 자동 라우팅이 생성됨

### pages/index.js

- `/` 경로에 해당하는 메인 페이지

### pages/\_app.js

- 모든 페이지의 부모 컴포넌트
- 모든 페이지의 공통 레이아웃 및 설정을 담당
- 전역 CSS 적용 위치

### pages/\_document.tsx

- HTML 문서의 기본 구조를 커스터마이징하는 파일
- `<html>`, `<head>`, `<body>` 태그를 직접 수정할 수 있음
- 서버에서만 실행되며, 클라이언트에서는 실행되지 않음
- 전역 메타 태그, 폰트 로딩, lang 속성 설정 등에 사용

> `_document.tsx`는 페이지별 컴포넌트가 아니라  
> **전체 문서 구조(HTML Shell)를 제어하기 위한 용도**이다.

### pages/api/

- API Routes 디렉토리
- 서버에서 실행되는 API 엔드포인트 정의

---

### public/

- 정적 파일 저장 디렉토리
- 이미지, 아이콘 등 브라우저에서 직접 접근 가능

---

### styles/

- 전역 스타일 및 CSS Module 관리
- `globals.css`는 전체 앱에 적용되는 스타일

---

## 설정 파일 설명

- `.eslintrc.json`  
  : ESLint 설정 파일

- `next.config.js`  
  : Next.js 프로젝트 설정 파일

- `package.json`  
  : 프로젝트 의존성 및 스크립트 관리

- `.gitignore`  
  : Git 추적 제외 파일 목록

- `README.md`  
  : 프로젝트 설명 문서
