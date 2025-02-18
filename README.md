# hw-rui

## 📌 개요

이 프로젝트는 **Rollup**을 사용하여 React UI 컴포넌트를 개별 패키지로 빌드하는 설정을 포함하고 있습니다. 각 컴포넌트는 독립적인 패키지로 관리되며, **ESM(CommonJS 포함) 및 타입 정의 파일(.d.ts)을 출력**합니다.

https://triangular-nest-0f1.notion.site/_-_2025-1991baec04bd80c0970dc6ea3b0e817f?pvs=25#1991baec04bd804797cdc3b46171badc

또한, **File-based Routing** 기능을 포함하여 `src/guides` 디렉터리 내의 가이드 문서를 자동으로 라우팅할 수 있도록 구현되었습니다.

---

## 파일 구조

```
├── src
│   ├── components
│   │   ├── ComponentA
│   │   │   ├── index.tsx
│   │   ├── ComponentB
│   │   │   ├── index.tsx
│   ├── guides (가이드 문서 디렉터리)
│   │   ├── foundations
│   │   │   ├── Color
│   │   │   │   ├── index.tsx
│   │   │   ├── FontSize
│   │   │   │   ├── index.tsx
│   │   │   ├── Spacing
│   │   │   │   ├── index.tsx
│   │   ├── components
│   │   │   ├── Accordion
│   │   │   │   ├── index.tsx
│   │   │   ├── Button
│   │   │   │   ├── index.tsx
│   │   │   ├── Popover
│   │   │   │   ├── index.tsx
│   │   │   ├── Select
│   │   │   │   ├── index.tsx
│   │   │   ├── Toast
│   │   │   │   ├── index.tsx
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

---

## 📌 **File-based Routing**

이 프로젝트는 `src/guides` 디렉터리에 있는 가이드 문서를 자동으로 라우팅하는 기능을 포함하고 있습니다.

### 📁 **가이드 문서 디렉터리 구조**

```
└── src/guides
    ├── foundations
    │   ├── Color
    │   │   ├── index.tsx
    │   ├── FontSize
    │   │   ├── index.tsx
    │   ├── Spacing
    │   │   ├── index.tsx
    ├── components
    │   ├── Accordion
    │   │   ├── index.tsx
    │   ├── Button
    │   │   ├── index.tsx
    │   ├── Popover
    │   │   ├── index.tsx
    │   ├── Select
    │   │   ├── index.tsx
    │   ├── Toast
    │   │   ├── index.tsx
```

### 📌 **라우팅 방식**

- `/src/guides/foundations/` 경로 내의 문서는 `/foundations/{문서명}` 으로 매핑됩니다.
- `/src/guides/components/` 경로 내의 문서는 `/components/{문서명}` 으로 매핑됩니다.

### 🚀 **자동 라우팅 예시**

예를 들어, `src/guides/foundations/Color/index.tsx` 파일이 존재할 경우:

- 해당 문서는 `/foundations/color` 경로에서 접근할 수 있습니다.

### 📜 **라우팅 코드 개요**

```ts
const guideFoundationFiles = import.meta.glob(
  "../../guides/foundations/**/index.tsx",
  { eager: true }
);
const guideComponentsFiles = import.meta.glob(
  "../../guides/components/**/index.tsx",
  {
    eager: true,
  }
);

// ........

type CustomElementType = () => JSX.Element;
type CustomRouteModule = {
  default: CustomElementType;
};
type CustomRoutes = {
  path: string;
  Element: CustomElementType;
};
const routes: CustomRoutes[] = [];
routes.push({
  path: `/${guideType}/${componentName.toLowerCase()}`,
  Element: (guideAllFiles[filePath] as CustomRouteModule).default,
});

// ........
```
