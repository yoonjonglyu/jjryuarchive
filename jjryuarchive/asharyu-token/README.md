# asharyu-design-token

<div align="center">

**A Design Token System Inspired by Yin-Yang, Wu Xing, and Korean Traditional Ink & Wash Aesthetics.**  
*음양오행(陰陽五行)과 수묵·담채화의 미학을 담은 디자인 토큰 시스템*

[English](README.md) | [한국어](README.ko.md) | [繁體中文](README.zh-TW.md) | [日本語](README.ja.md)

[![npm version](https://img.shields.io/npm/v/asharyu-design-token.svg?style=flat-square&color=7BA2BE)](https://www.npmjs.com/package/asharyu-design-token)
[![license](https://img.shields.io/npm/l/asharyu-design-token.svg?style=flat-square&color=3E6586)](https://github.com/yoonjonglyu/asharyu-design/blob/main/LICENSE)
[![WCAG 2.1 AAA](https://img.shields.io/badge/WCAG%202.1-AAA%20(18.5:1)-success?style=flat-square&color=ACC4A6)](https://www.w3.org/WAI/WCAG21/quickref/)
[![Figma DTCG](https://img.shields.io/badge/Figma-W3C%20DTCG%20%2F%20Tokens%20Studio-blue?style=flat-square&color=8AA1B2)](https://tokens.studio/)

</div>

---

## 📖 Table of Contents
1. [Installation](#1-installation)
2. [Quick Start](#2-quick-start)
3. [Design Philosophy](#3-design-philosophy)
4. [Token Specifications & CSS Variables](#4-token-specifications--css-variables)
5. [🎨 Figma Integration](#5--figma-integration)
6. [🤖 AI Agent Integration](#6--ai-agent-integration)
7. [Accessibility & Testing](#7-accessibility--testing)
8. [License](#8-license)

---

## 1. Installation

```bash
# npm
npm install asharyu-design-token

# pnpm
pnpm add asharyu-design-token

# yarn
yarn add asharyu-design-token
```

---

## 2. Quick Start

### 1) Load Global CSS Variables
Import the compiled stylesheet at your application's entry point (`index.tsx`, `App.tsx`, or main CSS):

```tsx
import 'asharyu-design-token/index.css';
```

### 2) Use with CSS-in-JS (Emotion / Styled-Components)
Import the typed `tokens` bridge object for full TypeScript autocompletion and CSS variable references:

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

### 3) Yin-Yang (Light / Dark) Theme Switching
Switch themes instantaneously via the `data-theme` attribute:

```html
<!-- Light Mode (Yang 陽) : Default -->
<html data-theme="light"> ... </html>

<!-- Dark Mode (Yin 陰) -->
<html data-theme="dark"> ... </html>
```

---

## 3. Design Philosophy

**asharyu** translates Eastern cosmological principles—**Yin-Yang (陰陽)**, **Wu Xing (五行, Five Elements)**, and the ink gradation of **Sumuk-damchae (수묵·담채화)**—into a rigorous, logic-driven digital design system.

1. **Sharpness (예리함 / 묵선)**: Precise, razor-sharp 0.5px ink strokes (`--asharyu-stroke-weight-sharp`) define clear information boundaries.
2. **Void (여백 / 한지의 숨구멍)**: Breathing room (`--asharyu-spacing-void`) reflects the aesthetic of Hanji paper, avoiding cramped layouts.
3. **Nong-dam Elevation (농담의 깊이)**: Replaces artificial shadows with the natural depth of ink diffusion (Dam-muk, Jung-muk, Nong-muk).
4. **Ki-un Motion (기운생동)**: Animations are choreographed according to Sang-saeng (相生, harmonic flow) and Sang-geuk (相剋, decisive feedback).

---

## 4. Token Specifications & CSS Variables

### ① Color Tokens

#### Wu Xing (五行) — Primary Action & Surface
| Element | Semantic Role | Usage | CSS Variable |
|---|---|---|---|
| **Yang / Yin (Theme)** | Background & Text | Hanji white / Deep abyssal ink | `--asharyu-color-semantic-background`, `-text` |
| **Wood (木, 목)** | `Action` | Primary action, buttons, links | `--asharyu-color-semantic-action-primary` |
| **Fire (火, 화)** | `Danger` | Danger, alert, destructive actions | `--asharyu-color-semantic-danger-primary` |
| **Earth (土, 토)** | `Surface` | Cards, container surfaces, resting areas | `--asharyu-color-semantic-surface-primary` |
| **Metal (金, 금)** | `Border` | Borders, dividers, structured edges | `--asharyu-color-semantic-border-primary` |
| **Water (水, 수)** | `Info` | Navigation, auxiliary information, flow | `--asharyu-color-semantic-info-primary` |

#### Five Intermediate Colors (五間色, 오간색) — Secondary Status & Feedback
| Color | Semantic Role | Formulation | CSS Variable |
|---|---|---|---|
| **Nok (綠, 녹)** | `Success` | Wood + Earth | `--asharyu-color-semantic-status-success-primary` |
| **Hong (紅, 홍)** | `Alert-Hover` | Fire + Metal | `--asharyu-color-semantic-status-alert-hover-primary` |
| **Byeok (碧, 벽)** | `Focus` | Wood + Metal | `--asharyu-color-semantic-status-action-focus-primary` |
| **Yu (硫黃, 유황)** | `Warning / Sub-Surface` | Earth + Water | `--asharyu-color-semantic-status-sub-surface-primary` |
| **Ja (紫, 자)** | `Special / Active` | Fire + Water | `--asharyu-color-semantic-status-info-active-primary` |

---

### ② Spacing & Void

| Key | CSS Variable | Rem | Px | Concept & Usage |
|---|---|---|---|---|
| `compact` | `--asharyu-spacing-compact` | `0.25rem` | 4px | Instant: icon spacing, tag padding |
| `fine` | `--asharyu-spacing-fine` | `0.5rem` | 8px | Fine: inline element spacing |
| `moderate` | `--asharyu-spacing-moderate` | `0.75rem` | 12px | Near: form controls & list items |
| `base` | `--asharyu-spacing-base` | `1rem` | 16px | Regular: standard card padding |
| `void` | `--asharyu-spacing-void` | `1.5rem` | 24px | **Void: breathing space (standard component margin)** |
| `wide` | `--asharyu-spacing-wide` | `2rem` | 32px | Distant: section inner grouping |
| `spacious` | `--asharyu-spacing-spacious` | `3rem` | 48px | Spacious: inter-section gap |
| `vast` | `--asharyu-spacing-vast` | `4rem` | 64px | Vast: page-level margins |

---

### ③ Radius (Curvature)

- `--asharyu-radius-sharp`: `0px` (Sword's edge, crisp orthogonal corners)
- `--asharyu-radius-delicate`: `0.25rem` (4px, understated curves for tags)
- `--asharyu-radius-gentle`: `0.5rem` (8px, warm organic curvature for cards)
- `--asharyu-radius-smooth`: `0.75rem` (12px, flowing curves for dialogs)
- `--asharyu-radius-prominent`: `1rem` (16px, large surface rounding)
- `--asharyu-radius-full`: `9999px` (Taegeuk, circular avatars & pills)

---

### ④ Nong-dam Elevation & Shadows

Depth tokens that dynamically respond to Yin-Yang (Light/Dark) themes via ink diffusion:
- `--asharyu-elevation-none`: Flat surface
- `--asharyu-elevation-dam-muk`: **Dam-muk (淡墨, Light Ink)** — card hover, dropdowns
- `--asharyu-elevation-jung-muk`: **Jung-muk (中墨, Medium Ink)** — popovers, floating boards
- `--asharyu-elevation-nong-muk`: **Nong-muk (濃墨, Dark Ink)** — modal dialogs
- `--asharyu-elevation-guk-muk`: **Guk-muk (極墨, Deepest Ink)** — floating toasts & critical alerts

---

### ⑤ Typography

- **Families**:
  - `--asharyu-font-family-serif`: Lyrical Hanji 바탕/명조 (`Gowun Batang`, `Noto Serif KR`)
  - `--asharyu-font-family-sans`: Modern readable sans-serif (`Pretendard`, system-ui)
  - `--asharyu-font-family-mono`: Monospace for code & numbers (`JetBrains Mono`, monospace)
- **Weights**:
  - `--asharyu-font-weight-light` (300 / Dam), `--asharyu-font-weight-regular` (400 / Sang), `--asharyu-font-weight-semibold` (600 / Nong), `--asharyu-font-weight-bold` (700 / Pil)
- **Line Heights**:
  - `--asharyu-font-line-height-tight` (1.25), `--asharyu-font-line-height-normal` (1.5), `--asharyu-font-line-height-relaxed` (1.75)

---

## 5. 🎨 Figma Integration

`asharyu-design-token` automatically generates and exports design token files ready for Figma:

### Method A: Tokens Studio for Figma (Recommended)
1. Open the **Tokens Studio for Figma** plugin in Figma.
2. Under `Settings` > `Sync Providers`, select **GitHub** or choose **Load from local file**.
3. Select **`node_modules/asharyu-design-token/dist/tokens.json`**.
4. The `global`, `light`, and `dark` token sets will be loaded with colors, spacing, radius, typography, and shadows fully synchronized.

### Method B: Native Figma Variables
1. Use **`node_modules/asharyu-design-token/dist/figma-variables.json`**.
2. Import via Figma Variables REST API or a variable import plugin to create `Color (Raw)`, `Color (Semantic)` (with Light/Dark modes), and `Spacing & Radius` collections.

---

## 6. 🤖 AI Agent Integration

When pair-programming with AI agents (**Google Antigravity**, **Cursor**, **Claude Code**, **GitHub Copilot**), you can guide the model to follow the Asharyu design system:

### 1) Antigravity Workspace Integration
The package provides a built-in skill at `.agents/skills/asharyu-design-system/` and a workspace rule at `.agents/rules/asharyu-design-system.md` to ensure zero token drift.

### 2) Direct Prompt Guide Reference
You can inject the included prompt guide directly into your AI prompt:
```
node_modules/asharyu-design-token/SKILL.md
```

---

## 7. Accessibility & Testing

- **WCAG 2.1 AAA Compliant**:
  - Light mode text-on-background contrast: **18.52 : 1** (far exceeds the 7.0:1 AAA standard)
  - Dark mode text-on-background contrast: **18.52 : 1** (far exceeds the 7.0:1 AAA standard)
- **Interactive Boundaries & Focus**:
  - State lines (`action.sharp`, `danger.sharp`) meet WCAG 2.1 AA (≥ 4.5:1).
- **Automated Validation Suite**:
  - `pnpm test` verifies token integrity, CSS variable parity, and WCAG contrast ratios with 100% test coverage.

---

## 8. License

This project is licensed under the [Apache 2.0 License](https://github.com/yoonjonglyu/asharyu-design/blob/main/LICENSE).
