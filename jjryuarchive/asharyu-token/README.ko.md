# asharyu-design-token

<div align="center">

**음양오행(陰陽五行)과 수묵·담채화의 미학을 담은 디자인 토큰 시스템**  
*A Design Token System Inspired by Yin-Yang, Wu Xing, and Korean Traditional Ink & Wash Aesthetics.*

[English](README.md) | [한국어](README.ko.md) | [繁體中文](README.zh-TW.md) | [日本語](README.ja.md)

[![npm version](https://img.shields.io/npm/v/asharyu-design-token.svg?style=flat-square&color=7BA2BE)](https://www.npmjs.com/package/asharyu-design-token)
[![license](https://img.shields.io/npm/l/asharyu-design-token.svg?style=flat-square&color=3E6586)](https://github.com/yoonjonglyu/asharyu-design/blob/main/LICENSE)
[![WCAG 2.1 AAA](https://img.shields.io/badge/WCAG%202.1-AAA%20(18.5:1)-success?style=flat-square&color=ACC4A6)](https://www.w3.org/WAI/WCAG21/quickref/)
[![Figma DTCG](https://img.shields.io/badge/Figma-W3C%20DTCG%20%2F%20Tokens%20Studio-blue?style=flat-square&color=8AA1B2)](https://tokens.studio/)

</div>

---

## 📖 목차
1. [설치 (Installation)](#1-설치-installation)
2. [빠른 시작 (Quick Start)](#2-빠른-시작-quick-start)
3. [핵심 미학 및 설계 철학 (Design Philosophy)](#3-핵심-미학-및-설계-철학-design-philosophy)
4. [토큰 명세 및 CSS 변수 (Token Specifications)](#4-토큰-명세-및-css-변수-token-specifications)
5. [🎨 피그마 연동 가이드 (Figma Integration)](#5--피그마-연동-가이드-figma-integration)
6. [🤖 AI 에이전트 연동 (Agent & Skill Integration)](#6--ai-에이전트-연동-agent--skill-integration)
7. [접근성 및 품질 검증 (Accessibility)](#7-접근성-및-품질-검증-accessibility)
8. [라이선스 (License)](#8-라이선스-license)

---

## 1. 설치 (Installation)

```bash
# npm
npm install asharyu-design-token

# pnpm
pnpm add asharyu-design-token

# yarn
yarn add asharyu-design-token
```

---

## 2. 빠른 시작 (Quick Start)

### 1) CSS 전역 변수 로드
프로젝트 진입점(예: `index.tsx`, `App.tsx`, 또는 메인 CSS)에서 스타일시트를 임포트합니다:

```tsx
import 'asharyu-design-token/index.css';
```

### 2) CSS-in-JS (Emotion / Styled-Components)에서 사용
토큰 브릿지 객체(`tokens`)를 임포트하면 TypeScript 자동 완성을 지원받으며 CSS 변수를 안전하게 참조할 수 있습니다:

```tsx
import styled from '@emotion/styled';
import { tokens } from 'asharyu-design-token';

const AsharyuCard = styled.div`
  background-color: ${tokens.color.semantic.surface.primary};
  border: ${tokens.stroke.weight.sharp} solid ${tokens.color.semantic.stroke};
  border-radius: ${tokens.radius.gentle};
  padding: ${tokens.spacing.void};
  box-shadow: ${tokens.elevation.damMuk};
  transition: ${tokens.interaction.flow.sangSaeng};

  &:hover {
    border-width: ${tokens.stroke.weight.fine};
    box-shadow: ${tokens.elevation.jungMuk};
    transform: translateY(-2px);
  }
`;
```

### 3) 음양(다크/라이트) 테마 전환
`data-theme` 속성을 통해 즉각적으로 테마가 전환됩니다:

```html
<!-- 라이트 모드 (양 陽) : 기본값 -->
<html data-theme="light"> ... </html>

<!-- 다크 모드 (음 陰) -->
<html data-theme="dark"> ... </html>
```

---

## 3. 핵심 미학 및 설계 철학 (Design Philosophy)

**asharyu**는 주관적인 감각에만 의존하지 않고, 동양의 자연관인 **음양(陰陽)**과 **오행(五行)**, 그리고 수묵화의 **필치와 농담(濃淡)**을 현대 디지털 인터페이스로 정형화한 시스템입니다.

1. **예리함 (Sharpness / 묵선)**: 칼로 벤 듯 명확한 0.5px 묵선(`--asharyu-stroke-weight-sharp`)으로 정보의 경계를 정의합니다.
2. **여백 (Void / 한지의 숨구멍)**: 빽빽한 배치를 지양하고, 정보 사이의 숨구멍(`--asharyu-spacing-void`)을 확보합니다.
3. **농담의 깊이 (Nong-dam Elevation)**: 강한 인공 그림자 대신 수묵화의 엷고 짙음(담묵·중묵·농묵)으로 스며드는 깊이를 표현합니다.
4. **기운생동 (Ki-un Motion)**: 오행의 상생(相生, 부드러운 연결)과 상극(相剋, 예리한 결단 피드백) 논리에 따라 애니메이션을 제어합니다.

---

## 4. 토큰 명세 및 CSS 변수 (Token Specifications)

### ① 색상 (Color Tokens)

#### 오행 (五行) — Primary Action & Surface
| 기운 | 시맨틱 역할 | 주요 용도 | 대표 CSS 변수 |
|---|---|---|---|
| **양/음 (Theme)** | 배경 및 본문 텍스트 | 한지의 미색, 심연의 묵빛 | `--asharyu-color-semantic-background`, `-text` |
| **목 (木, Wood)** | `Action` | 실행, 주 버튼, 주요 링크 | `--asharyu-color-semantic-action-primary` |
| **화 (火, Fire)** | `Danger` | 경고, 오류, 파괴적 액션 | `--asharyu-color-semantic-danger-primary` |
| **토 (土, Earth)** | `Surface` | 카드, 컨테이너 배경, 머무르는 공간 | `--asharyu-color-semantic-surface-primary` |
| **금 (金, Metal)** | `Border` | 경계선, 구분선, 단단한 테두리 | `--asharyu-color-semantic-border-primary` |
| **수 (水, Water)** | `Info` | 안내, 보조 정보, 네비게이션 | `--asharyu-color-semantic-info-primary` |

#### 오간색 (五間色) — Secondary Status & Feedback
| 간색 | 시맨틱 역할 | 배합 | 대표 CSS 변수 |
|---|---|---|---|
| **녹 (綠, Nok)** | `Success` | 목(木) + 토(土) | `--asharyu-color-semantic-status-success-primary` |
| **홍 (紅, Hong)** | `Alert-Hover` | 화(火) + 금(金) | `--asharyu-color-semantic-status-alert-hover-primary` |
| **벽 (碧, Byeok)** | `Focus` | 목(木) + 금(金) | `--asharyu-color-semantic-status-action-focus-primary` |
| **유황 (硫黃, Yu)** | `Warning / Sub-Surface` | 토(土) + 수(水) | `--asharyu-color-semantic-status-sub-surface-primary` |
| **자 (紫, Ja)** | `Special / Active` | 화(火) + 수(水) | `--asharyu-color-semantic-status-info-active-primary` |

---

### ② 공간과 여백 (Spacing & Void)

| 키 | CSS 변수 | 값 (rem) | 값 (px) | 용도 및 의미 |
|---|---|---|---|---|
| `compact` | `--asharyu-spacing-compact` | `0.25rem` | 4px | 찰나: 아이콘 간격, 뱃지 패딩 |
| `fine` | `--asharyu-spacing-fine` | `0.5rem` | 8px | 세목: 인라인 요소 간격 |
| `moderate` | `--asharyu-spacing-moderate` | `0.75rem` | 12px | 근거리: 폼 컨트롤 및 리스트 |
| `base` | `--asharyu-spacing-base` | `1rem` | 16px | 평상: 표준 패딩 |
| `void` | `--asharyu-spacing-void` | `1.5rem` | 24px | **여백: 한지의 숨구멍 (표준 컴포넌트 여백)** |
| `wide` | `--asharyu-spacing-wide` | `2rem` | 32px | 심원: 섹션 내부 여백 |
| `spacious` | `--asharyu-spacing-spacious` | `3rem` | 48px | 대여백: 섹션 간 구분 여백 |
| `vast` | `--asharyu-spacing-vast` | `4rem` | 64px | 광막: 페이지 레벨 여백 |

---

### ③ 곡률 (Radius)

- `--asharyu-radius-sharp`: `0px` (검의 예리한 각)
- `--asharyu-radius-delicate`: `0.25rem` (4px, 절제된 모서리)
- `--asharyu-radius-gentle`: `0.5rem` (8px, 온화한 곡률)
- `--asharyu-radius-smooth`: `0.75rem` (12px, 유려한 곡률)
- `--asharyu-radius-prominent`: `1rem` (16px, 넉넉한 둥글림)
- `--asharyu-radius-full`: `9999px` (태극, 원형 아바타)

---

### ④ 농담(濃淡) 그림자 (Elevation & Depth)

수묵화의 먹빛 농도에 따라 다크/라이트 테마에 자동으로 감응하는 그림자 토큰입니다:
- `--asharyu-elevation-none`: 평면
- `--asharyu-elevation-dam-muk`: **담묵(淡墨)** — 카드 호버, 드롭다운 표면
- `--asharyu-elevation-jung-muk`: **중묵(中墨)** — 팝오버, 플로팅 보드
- `--asharyu-elevation-nong-muk`: **농묵(濃墨)** — 모달 다이얼로그
- `--asharyu-elevation-guk-muk`: **극묵(極墨)** — 최상위 토스트 및 플로팅 알림

---

### ⑤ 타이포그래피 (Typography)

- **서체 (Family)**:
  - `--asharyu-font-family-serif`: 한지의 결을 살린 서정적 바탕체 (`Gowun Batang`, `Noto Serif KR`)
  - `--asharyu-font-family-sans`: 현대적 본문 고딕체 (`Pretendard`, system-ui)
  - `--asharyu-font-family-mono`: 고정폭 코드 서체 (`JetBrains Mono`, monospace)
- **필압 (Weight)**:
  - `--asharyu-font-weight-light` (300/담), `--asharyu-font-weight-regular` (400/상), `--asharyu-font-weight-semibold` (600/농), `--asharyu-font-weight-bold` (700/필)
- **행간 (Line Height)**:
  - `--asharyu-font-line-height-tight` (1.25), `--asharyu-font-line-height-normal` (1.5), `--asharyu-font-line-height-relaxed` (1.75)

---

## 5. 🎨 피그마 연동 가이드 (Figma Integration)

`asharyu-design-token`은 빌드 시 Figma에서 즉시 사용할 수 있는 토큰 파일을 자동으로 생성 및 배포합니다.

### 방법 A: Tokens Studio for Figma 플러그인 연동 (권장)
1. Figma에서 **Tokens Studio for Figma** 플러그인을 실행합니다.
2. `Settings` > `Sync Providers`에서 **GitHub**를 연결하거나 `Load from local file`을 선택합니다.
3. 패키지 내 **`node_modules/asharyu-design-token/dist/tokens.json`** 파일을 지정합니다.
4. `global`, `light`, `dark` 토큰 세트가 자동으로 불러와지며, 컴포넌트에 색상/여백/곡률/그림자가 동기화됩니다.

### 방법 B: Figma Variables 직접 연동
1. **`node_modules/asharyu-design-token/dist/figma-variables.json`** 파일을 사용합니다.
2. Figma Variables Import 플러그인 또는 Figma REST API를 통해 `Color (Raw)`, `Color (Semantic)`, `Spacing & Radius` 컬렉션으로 한 번에 등록할 수 있습니다.

---

## 6. 🤖 AI 에이전트 연동 (Agent & Skill Integration)

**Antigravity**, **Cursor**, **Claude Code**, **GitHub Copilot** 등의 AI 에이전트와 페어 프로그래밍 시 Asharyu 디자인 시스템의 규칙을 자동으로 학습시킬 수 있습니다.

### 1) Antigravity 사용 시
프로젝트의 `.agents/skills/asharyu-design-system/` 또는 패키지의 [SKILL.md](file:///e:/withc/Documents/coding/asharyu-design/packages/design-token/SKILL.md)를 통해 에이전트가 오행 원칙과 토큰을 준수하여 코드를 생성합니다.

### 2) 프롬프트 가이드 파일 참조
패키지 내에 내장된 프롬프트 가이드를 직접 참조할 수 있습니다:
```
node_modules/asharyu-design-token/SKILL.md
```

---

## 7. 접근성 및 품질 검증 (Accessibility)

- **WCAG 2.1 AAA 등급 만족**:
  - 라이트 모드 (한지 미색 `#fdfaf4` 위 묵빛 `#0c0c0c`): **18.52 : 1** (AAA 기준 7:1 대폭 초과)
  - 다크 모드 (심연 묵빛 `#0c0c0c` 위 한지색 `#fdfaf4`): **18.52 : 1** (AAA 기준 7:1 대폭 초과)
- **UI 경계선 및 포커스 링**:
  - `action.sharp`, `danger.sharp` 등 모든 상태선이 WCAG 2.1 AA 기준(4.5:1 이상)을 충족합니다.
- **자동화 테스트 스위트**:
  - 패키지 빌드 시 `token-validation.test.mjs`를 통해 토큰 무결성, CSS 변수 일치, WCAG 대비율을 100% 자동 검증합니다.

---

## 8. 라이선스 (License)

This project is licensed under the [Apache 2.0 License](https://github.com/yoonjonglyu/asharyu-design/blob/main/LICENSE).
