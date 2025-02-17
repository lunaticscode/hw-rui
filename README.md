# hw-rui

## 📌 개요

이 프로젝트는 **Rollup**을 사용하여 React UI 컴포넌트를 개별 패키지로 빌드하는 설정을 포함하고 있습니다. 각 컴포넌트는 독립적인 패키지로 관리되며, **ESM(CommonJS 포함) 및 타입 정의 파일(.d.ts)을 출력**합니다.
https://triangular-nest-0f1.notion.site/_-_2025-1991baec04bd80c0970dc6ea3b0e817f#1991baec04bd804797cdc3b46171badc

---

## 파일 구조

```
├── src
│   ├── components
│   │   ├── ComponentA
│   │   │   ├── index.tsx
│   │   ├── ComponentB
│   │   │   ├── index.tsx
│   ├── ...
├── dist-ui (빌드 출력 디렉터리)
│   ├── ComponentA
│   │   ├── index.js (ESM)
│   │   ├── index.cjs (CommonJS)
│   │   ├── index.d.ts (TypeScript Definitions)
│   │   ├── package.json
│   ├── ComponentB
│   │   ├── index.js
│   │   ├── index.cjs
│   │   ├── index.d.ts
│   │   ├── package.json
```

---

## ⚙️ **Rollup 번들 포맷**

- **ESM 모듈** (`index.js`) - 최신 JavaScript 환경에서 사용 가능
- **CommonJS 모듈** (`index.cjs`) - 기존 Node.js 환경에서 사용 가능
- **타입 정의 파일** (`index.d.ts`) - TypeScript 지원

---

## 📦 개별 컴포넌트 패키징

각 컴포넌트는 개별적인 `package.json`을 가지며, 기본 구조는 다음과 같습니다.

```json
{
  "version": "1.0.4",
  "name": "@hw-rui/component-name",
  "main": "./index.cjs",
  "module": "./index.js",
  "types": "./types/index.d.ts"
}
```

이 구조를 통해 각 컴포넌트를 독립적인 패키지로 사용할 수 있습니다.
