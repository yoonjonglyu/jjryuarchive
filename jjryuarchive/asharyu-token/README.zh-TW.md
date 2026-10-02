# asharyu-design-token

<div align="center">

**融合陰陽五行與水墨·淡彩畫美學的設計權杖（Design Token）系統**  
*A Design Token System Inspired by Yin-Yang, Wu Xing, and Korean Traditional Ink & Wash Aesthetics.*

[English](README.md) | [한국어](README.ko.md) | [繁體中文](README.zh-TW.md) | [日本語](README.ja.md)

[![npm version](https://img.shields.io/npm/v/asharyu-design-token.svg?style=flat-square&color=7BA2BE)](https://www.npmjs.com/package/asharyu-design-token)
[![license](https://img.shields.io/npm/l/asharyu-design-token.svg?style=flat-square&color=3E6586)](https://github.com/yoonjonglyu/asharyu-design/blob/main/LICENSE)
[![WCAG 2.1 AAA](https://img.shields.io/badge/WCAG%202.1-AAA%20(18.5:1)-success?style=flat-square&color=ACC4A6)](https://www.w3.org/WAI/WCAG21/quickref/)
[![Figma DTCG](https://img.shields.io/badge/Figma-W3C%20DTCG%20%2F%20Tokens%20Studio-blue?style=flat-square&color=8AA1B2)](https://tokens.studio/)

</div>

---

## 📖 目錄
1. [安裝 (Installation)](#1-安裝-installation)
2. [快速入門 (Quick Start)](#2-快速入門-quick-start)
3. [核心美學與設計哲學 (Design Philosophy)](#3-核心美學與設計哲學-design-philosophy)
4. [Token 規範與 CSS 變數 (Token Specifications)](#4-token-規範與-css-變數-token-specifications)
5. [🎨 Figma 設計權杖整合 (Figma Integration)](#5--figma-設計權杖整合-figma-integration)
6. [🤖 AI Agent 整合 (Agent & Skill Integration)](#6--ai-agent-整合-agent--skill-integration)
7. [無障礙與品質驗證 (Accessibility)](#7-無障礙與品質驗證-accessibility)
8. [授權條款 (License)](#8-授權條款-license)

---

## 1. 安裝 (Installation)

```bash
# npm
npm install asharyu-design-token

# pnpm
pnpm add asharyu-design-token

# yarn
yarn add asharyu-design-token
```

---

## 2. 快速入門 (Quick Start)

### 1) 載入全域 CSS 變數
在專案的入口檔案（如 `index.tsx`, `App.tsx` 或全域 CSS）中引入樣式表：

```tsx
import 'asharyu-design-token/index.css';
```

### 2) 在 CSS-in-JS (Emotion / Styled-Components) 中使用
匯入具備完整 TypeScript 型別提示的 `tokens` 物件，安全引用 CSS 變數：

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

### 3) 陰陽（深色 / 淺色）主題切換
透過 `data-theme` 屬性即可瞬間切換全域主題：

```html
<!-- 陽（淺色模式）: 預設值 -->
<html data-theme="light"> ... </html>

<!-- 陰（深色模式） -->
<html data-theme="dark"> ... </html>
```

---

## 3. 核心美學與設計哲學 (Design Philosophy)

**asharyu** 並非單憑主觀感官，而是將東方傳統的**陰陽（Yin-Yang）**、**五行（Wu Xing）**以及水墨淡彩畫的**筆觸與濃淡（Nong-dam）**轉化為嚴謹、邏輯化的數位介面規範。

1. **銳利之墨線 (Sharpness)**：以如刀裁般鮮明的 0.5px 墨線（`--asharyu-stroke-weight-sharp`）定義清晰的資訊界線。
2. **宣紙之留白 (Void)**：注重呼吸空間（`--asharyu-spacing-void`），展現傳統紙張的留白意境，避免擁擠堆砌。
3. **濃淡層次 (Nong-dam Elevation)**：捨棄生硬的人工投影，以水墨暈染的濃淡（淡墨、中墨、濃墨、極墨）呈現溫潤而深邃的空間感。
4. **氣韻生動動效 (Ki-un Motion)**：動畫遵循五行之相生（順暢柔和之流動）與相剋（銳利決斷之回饋）邏輯。

---

## 4. Token 規範與 CSS 變數 (Token Specifications)

### ① 色彩 (Color Tokens)

#### 五行 (五行) — 主要操作與容器表面 (Primary Semantic)
| 元素 | 語意功能 | 主要用途 | 代表 CSS 變數 |
|---|---|---|---|
| **陽 / 陰 (Theme)** | 背景與正文文字 | 宣紙米白、深淵墨黑 | `--asharyu-color-semantic-background`, `-text` |
| **木 (Wood)** | `Action` | 主要操作、按鈕、重要連結 | `--asharyu-color-semantic-action-primary` |
| **火 (Fire)** | `Danger` | 警告、錯誤、破壞性操作 | `--asharyu-color-semantic-danger-primary` |
| **土 (Earth)** | `Surface` | 卡片底色、面板容器、休憩空間 | `--asharyu-color-semantic-surface-primary` |
| **金 (Metal)** | `Border` | 邊界線、分隔線、堅固輪廓 | `--asharyu-color-semantic-border-primary` |
| **水 (Water)** | `Info` | 導覽、輔助資訊、流動指引 | `--asharyu-color-semantic-info-primary` |

#### 五間色 (五間色) — 次要狀態與互動回饋 (Secondary Status)
| 間色 | 語意功能 | 配方關係 | 代表 CSS 變數 |
|---|---|---|---|
| **綠 (Nok)** | `Success` | 木 + 土 | `--asharyu-color-semantic-status-success-primary` |
| **紅 (Hong)** | `Alert-Hover` | 火 + 金 | `--asharyu-color-semantic-status-alert-hover-primary` |
| **碧 (Byeok)** | `Focus` | 木 + 金 | `--asharyu-color-semantic-status-action-focus-primary` |
| **硫黃 (Yu)** | `Warning / Sub-Surface` | 土 + 水 | `--asharyu-color-semantic-status-sub-surface-primary` |
| **紫 (Ja)** | `Special / Active` | 火 + 水 | `--asharyu-color-semantic-status-info-active-primary` |

---

### ② 留白與間距 (Spacing & Void)

| 鍵名 | CSS 變數 | 單位 (rem) | 單位 (px) | 用途與意境 |
|---|---|---|---|---|
| `compact` | `--asharyu-spacing-compact` | `0.25rem` | 4px | 剎那：圖示間隔、標籤內距 |
| `fine` | `--asharyu-spacing-fine` | `0.5rem` | 8px | 細目：行內元件間距 |
| `moderate` | `--asharyu-spacing-moderate` | `0.75rem` | 12px | 近距：表單控制項與清單 |
| `base` | `--asharyu-spacing-base` | `1rem` | 16px | 平常：標準卡片內距 |
| `void` | `--asharyu-spacing-void` | `1.5rem` | 24px | **留白：宣紙之呼吸（標準元件留白）** |
| `wide` | `--asharyu-spacing-wide` | `2rem` | 32px | 深遠：區塊群組間距 |
| `spacious` | `--asharyu-spacing-spacious` | `3rem` | 48px | 大留白：大區塊間隔 |
| `vast` | `--asharyu-spacing-vast` | `4rem` | 64px | 廣漠：頁面層級留白 |

---

### ③ 圓角曲率 (Radius)

- `--asharyu-radius-sharp`: `0px`（劍鋒銳角，俐落直角）
- `--asharyu-radius-delicate`: `0.25rem`（4px，微斂圓角）
- `--asharyu-radius-gentle`: `0.5rem`（8px，溫和自然曲率）
- `--asharyu-radius-smooth`: `0.75rem`（12px，流暢圓弧）
- `--asharyu-radius-prominent`: `1rem`（16px，大容器圓角）
- `--asharyu-radius-full`: `9999px`（太極，圓形頭像與膠囊按鈕）

---

### ④ 濃淡陰影 (Elevation & Depth)

依據水墨暈染濃淡，在深淺模式中自動感應的立體深淺 Token：
- `--asharyu-elevation-none`: 平面無陰影
- `--asharyu-elevation-dam-muk`: **淡墨 (Dam-muk)** — 卡片懸停、下拉選單
- `--asharyu-elevation-jung-muk`: **中墨 (Jung-muk)** — 浮動面板、氣泡提示
- `--asharyu-elevation-nong-muk`: **濃墨 (Nong-muk)** — 對話方塊（Modal）
- `--asharyu-elevation-guk-muk`: **極墨 (Guk-muk)** — 最上層浮動通知（Toast）

---

### ⑤ 字體排印 (Typography)

- **字系 (Font Family)**：
  - `--asharyu-font-family-serif`: 展現宣紙纖維感的明體 / 楷體 (`Gowun Batang`, `Noto Serif KR`)
  - `--asharyu-font-family-sans`: 現代清晰之無襯線黑體 (`Pretendard`, system-ui)
  - `--asharyu-font-family-mono`: 程式碼等寬字型 (`JetBrains Mono`, monospace)
- **筆壓字重 (Font Weight)**：
  - `--asharyu-font-weight-light`（300/淡）、`regular`（400/常）、`semibold`（600/濃）、`bold`（700/筆）
- **行高 (Line Height)**：
  - `--asharyu-font-line-height-tight`（1.25）、`normal`（1.5）、`relaxed`（1.75）

---

## 5. 🎨 Figma 設計權杖整合 (Figma Integration)

`asharyu-design-token` 在建置時會自動生成可直接匯入 Figma 的權杖檔案：

### 方法 A：使用 Tokens Studio for Figma 外掛（推薦）
1. 在 Figma 中開啟 **Tokens Studio for Figma** 外掛。
2. 於 `Settings` > `Sync Providers` 選擇 **GitHub** 或選擇 **Load from local file**。
3. 選取 **`node_modules/asharyu-design-token/dist/tokens.json`**。
4. 即可載入 `global`, `light`, `dark` 權杖集，將色彩、留白、圓角、陰影完整套用至 Figma 設計稿。

### 方法 B：原生 Figma Variables
1. 使用 **`node_modules/asharyu-design-token/dist/figma-variables.json`**。
2. 透過 Figma Variables REST API 或匯入外掛，一鍵生成 `Color (Raw)`, `Color (Semantic)`（含 Light/Dark 模式）及 `Spacing & Radius` 變數集合。

---

## 6. 🤖 AI Agent 整合 (Agent & Skill Integration)

與 **Antigravity**, **Cursor**, **Claude Code**, **GitHub Copilot** 等 AI 助手結伴程式設計時，可自動載入 Asharyu 設計系統規範：

### 1) Antigravity 工作區支援
本套件內建 `.agents/skills/asharyu-design-system/` 技能與 `.agents/rules/asharyu-design-system.md` 規則，確保 AI 生成程式碼時不發生樣式偏移。

### 2) 直接引用提示詞指南
可直接將隨附的提示指南注入 AI 系統提示中：
```
node_modules/asharyu-design-token/SKILL.md
```

---

## 7. 無障礙與品質驗證 (Accessibility)

- **符合 WCAG 2.1 AAA 級規範**：
  - 淺色模式文字對比度：**18.52 : 1**（遠高於 7.0:1 之 AAA 標準）
  - 深色模式文字對比度：**18.52 : 1**（遠高於 7.0:1 之 AAA 標準）
- **UI 邊界線與焦點圈**：
  - 狀態線條均達到 WCAG 2.1 AA 規範（≥ 4.5:1）。
- **自動化測試覆蓋**：
  - 每次建置皆執行自動化測試，確保 Token 結構、CSS 變數一致性與對比度達成率達 100%。

---

## 8. 授權條款 (License)

本專案採用 [Apache 2.0 授權條款](https://github.com/yoonjonglyu/asharyu-design/blob/main/LICENSE)。
