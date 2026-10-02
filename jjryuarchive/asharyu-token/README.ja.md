# asharyu-design-token

<div align="center">

**陰陽五行思想と水墨・淡彩画の美学を現代UIに昇華させたデザイントークンシステム**  
*A Design Token System Inspired by Yin-Yang, Wu Xing, and Korean Traditional Ink & Wash Aesthetics.*

[English](README.md) | [한국어](README.ko.md) | [繁體中文](README.zh-TW.md) | [日本語](README.ja.md)

[![npm version](https://img.shields.io/npm/v/asharyu-design-token.svg?style=flat-square&color=7BA2BE)](https://www.npmjs.com/package/asharyu-design-token)
[![license](https://img.shields.io/npm/l/asharyu-design-token.svg?style=flat-square&color=3E6586)](https://github.com/yoonjonglyu/asharyu-design/blob/main/LICENSE)
[![WCAG 2.1 AAA](https://img.shields.io/badge/WCAG%202.1-AAA%20(18.5:1)-success?style=flat-square&color=ACC4A6)](https://www.w3.org/WAI/WCAG21/quickref/)
[![Figma DTCG](https://img.shields.io/badge/Figma-W3C%20DTCG%20%2F%20Tokens%20Studio-blue?style=flat-square&color=8AA1B2)](https://tokens.studio/)

</div>

---

## 📖 目次
1. [インストール (Installation)](#1-インストール-installation)
2. [クイックスタート (Quick Start)](#2-クイックスタート-quick-start)
3. [設計思想と美学 (Design Philosophy)](#3-設計思想と美学-design-philosophy)
4. [トークン仕様とCSS変数 (Token Specifications)](#4-トークン仕様とcss変数-token-specifications)
5. [🎨 Figma デザイントークン連携 (Figma Integration)](#5--figma-デザイントークン連携-figma-integration)
6. [🤖 AI エージェント連携 (Agent & Skill Integration)](#6--ai-エージェント連携-agent--skill-integration)
7. [アクセシビリティと品質検証 (Accessibility)](#7-アクセシビリティと品質検証-accessibility)
8. [ライセンス (License)](#8-ライセンス-license)

---

## 1. インストール (Installation)

```bash
# npm
npm install asharyu-design-token

# pnpm
pnpm add asharyu-design-token

# yarn
yarn add asharyu-design-token
```

---

## 2. クイックスタート (Quick Start)

### 1) グローバルCSS変数の読み込み
プロジェクトのエントリーポイント（`index.tsx`、`App.tsx`、またはメインCSS）でスタイルシートをインポートします：

```tsx
import 'asharyu-design-token/index.css';
```

### 2) CSS-in-JS (Emotion / Styled-Components) での使用
TypeScriptの型定義と自動補完に対応した `tokens` ブリッジオブジェクトを使用します：

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

### 3) 陰陽（ライト / ダーク）テーマ切り替え
`data-theme` 属性によって即座に全域のテーマが切り替わります：

```html
<!-- 陽（ライトモード）: デフォルト -->
<html data-theme="light"> ... </html>

<!-- 陰（ダークモード） -->
<html data-theme="dark"> ... </html>
```

---

## 3. 設計思想と美学 (Design Philosophy)

**asharyu** は主観的な感覚のみに依存せず、東洋の自然観である **陰陽（Yin-Yang）** と **五行（Wu Xing）**、そして水墨画の **筆致と濃淡（Nong-dam）** を現代のデジタルUIとして体系化したデザインシステムです。

1. **鋭利さ (Sharpness / 墨線)**: 刃物で断ち切ったような 0.5px の墨線（`--asharyu-stroke-weight-sharp`）により、情報の境界を明確に定義します。
2. **余白 (Void / 韓紙の呼吸)**: 詰め込みすぎを避け、情報と情報の間に空気の通る余白（`--asharyu-spacing-void`）を確保します。
3. **濃淡の深み (Nong-dam Elevation)**: 不自然な人工的シャドウの代わりに、水墨のにじみや濃淡（淡墨・中墨・濃墨・極墨）によって静謐な奥行きを表現します。
4. **気韻生動 (Ki-un Motion)**: アニメーションは五行の「相生（しなやかな循環）」と「相剋（鋭い決断のフィードバック）」の論理に従って制御されます。

---

## 4. トークン仕様とCSS変数 (Token Specifications)

### ① カラー (Color Tokens)

#### 五行 (五行) — 主要アクション & サーフェス (Primary Semantic)
| 元素 | セマンティック役割 | 主な用途 | 代表CSS変数 |
|---|---|---|---|
| **陽 / 陰 (Theme)** | 背景・基本テキスト | 韓紙の米白、深淵の墨色 | `--asharyu-color-semantic-background`, `-text` |
| **木 (Wood)** | `Action` | 実行、プライマリボタン、主要リンク | `--asharyu-color-semantic-action-primary` |
| **火 (Fire)** | `Danger` | 警告、破壊的アクション、エラー | `--asharyu-color-semantic-danger-primary` |
| **土 (Earth)** | `Surface` | カード、コンテナ背景、滞留の場 | `--asharyu-color-semantic-surface-primary` |
| **金 (Metal)** | `Border` | 境界線、区切り線、堅固な輪郭 | `--asharyu-color-semantic-border-primary` |
| **水 (Water)** | `Info` | ナビゲーション、補助情報、流れ | `--asharyu-color-semantic-info-primary` |

#### 五間色 (五間色) — 状態フィードバック (Secondary Status)
| 間色 | セマンティック役割 | 配合関係 | 代表CSS変数 |
|---|---|---|---|
| **緑 (Nok)** | `Success` | 木 + 土 | `--asharyu-color-semantic-status-success-primary` |
| **紅 (Hong)** | `Alert-Hover` | 火 + 金 | `--asharyu-color-semantic-status-alert-hover-primary` |
| **碧 (Byeok)** | `Focus` | 木 + 金 | `--asharyu-color-semantic-status-action-focus-primary` |
| **硫黄 (Yu)** | `Warning / Sub-Surface` | 土 + 水 | `--asharyu-color-semantic-status-sub-surface-primary` |
| **紫 (Ja)** | `Special / Active` | 火 + 水 | `--asharyu-color-semantic-status-info-active-primary` |

---

### ② 空間と余白 (Spacing & Void)

| キー | CSS変数 | 値 (rem) | 値 (px) | 用途と意味 |
|---|---|---|---|---|
| `compact` | `--asharyu-spacing-compact` | `0.25rem` | 4px | 刹那: アイコン間隔、バッジ余白 |
| `fine` | `--asharyu-spacing-fine` | `0.5rem` | 8px | 細目: インライン要素間隔 |
| `moderate` | `--asharyu-spacing-moderate` | `0.75rem` | 12px | 近距離: フォーム項目とリスト |
| `base` | `--asharyu-spacing-base` | `1rem` | 16px | 平常: 標準カード内パディング |
| `void` | `--asharyu-spacing-void` | `1.5rem` | 24px | **余白: 韓紙の呼吸（標準コンポーネント余白）** |
| `wide` | `--asharyu-spacing-wide` | `2rem` | 32px | 深遠: セクショングループ余白 |
| `spacious` | `--asharyu-spacing-spacious` | `3rem` | 48px | 大余白: セクション間の境界 |
| `vast` | `--asharyu-spacing-vast` | `4rem` | 64px | 広漠: ページレベル余白 |

---

### ③ コーナー曲率 (Radius)

- `--asharyu-radius-sharp`: `0px`（剣鋒の直角、鋭利な角）
- `--asharyu-radius-delicate`: `0.25rem`（4px、控えめな角丸）
- `--asharyu-radius-gentle`: `0.5rem`（8px、温和な曲率）
- `--asharyu-radius-smooth`: `0.75rem`（12px、流麗な曲率）
- `--asharyu-radius-prominent`: `1rem`（16px、ゆったりとした丸み）
- `--asharyu-radius-full`: `9999px`（太極、円形アバターやピル）

---

### ④ 濃淡シャドウ (Elevation & Depth)

水墨の濃淡に合わせてダーク/ライトモードに連動する奥行きトークン：
- `--asharyu-elevation-none`: 平面（シャドウなし）
- `--asharyu-elevation-dam-muk`: **淡墨 (Dam-muk)** — カードホバー、ドロップダウン
- `--asharyu-elevation-jung-muk`: **中墨 (Jung-muk)** — ポップオーバー、フローティングパネル
- `--asharyu-elevation-nong-muk`: **濃墨 (Nong-muk)** — モーダルダイアログ
- `--asharyu-elevation-guk-muk`: **極墨 (Guk-muk)** — 最上位トースト通知

---

### ⑤ タイポグラフィ (Typography)

- **フォントファミリー (Family)**:
  - `--asharyu-font-family-serif`: 韓紙の質感を宿す明朝体 (`Gowun Batang`, `Noto Serif KR`)
  - `--asharyu-font-family-sans`: 現代的で可読性の高いゴシック体 (`Pretendard`, system-ui)
  - `--asharyu-font-family-mono`: コード・数値用等幅フォント (`JetBrains Mono`, monospace)
- **筆圧 (Weight)**:
  - `--asharyu-font-weight-light`（300/淡）、`regular`（400/常）、`semibold`（600/濃）、`bold`（700/筆）
- **行間 (Line Height)**:
  - `--asharyu-font-line-height-tight`（1.25）、`normal`（1.5）、`relaxed`（1.75）

---

## 5. 🎨 Figma デザイントークン連携 (Figma Integration)

`asharyu-design-token` はビルド時にFigmaと完全互換のトークンファイルを自動生成します：

### 方法 A: Tokens Studio for Figma プラグイン連携（推奨）
1. Figmaで **Tokens Studio for Figma** プラグインを起動します。
2. `Settings` > `Sync Providers` で **GitHub** を接続するか、**Load from local file** を選択します。
3. **`node_modules/asharyu-design-token/dist/tokens.json`** を指定します。
4. `global`、`light`、`dark` のトークンセットが自動読み込みされ、カラー、余白、角丸、シャドウが即座に同期されます。

### 方法 B: ネイティブ Figma Variables
1. **`node_modules/asharyu-design-token/dist/figma-variables.json`** を使用します。
2. Figma Variables REST API またはインポート用プラグインを通じて、`Color (Raw)`、`Color (Semantic)`、`Spacing & Radius` コレクションを一括登録できます。

---

## 6. 🤖 AI エージェント連携 (Agent & Skill Integration)

**Antigravity**、**Cursor**、**Claude Code**、**GitHub Copilot** などのAIアシスタントとのペアプログラミングにおいて、Asharyuの設計ルールを自動学習させることができます：

### 1) Antigravity ワークスペース連携
本リポジトリには `.agents/skills/asharyu-design-system/` スキルと `.agents/rules/asharyu-design-system.md` ルールが整備されており、AI生成コードのトークン逸脱を防止します。

### 2) プロンプトガイドの直接参照
同封のプロンプトガイドをAIのシステムプロンプトに注入して使用できます：
```
node_modules/asharyu-design-token/SKILL.md
```

---

## 7. アクセシビリティと品質検証 (Accessibility)

- **WCAG 2.1 AAA 準拠**:
  - ライトモード文字コントラスト比: **18.52 : 1**（AAA基準 7.0:1 を大幅に超過）
  - ダークモード文字コントラスト比: **18.52 : 1**（AAA基準 7.0:1 を大幅に超過）
- **状態境界線とフォーカスリング**:
  - 全ての状態ラインが WCAG 2.1 AA 基準（4.5:1 以上）を満たしています。
- **自動検証テストスイート**:
  - ビルド時に `token-validation.test.mjs` を実行し、トークン整合性、CSS変数一致率、コントラスト比を100%テストします。

---

## 8. ライセンス (License)

本プロジェクトは [Apache 2.0 License](https://github.com/yoonjonglyu/asharyu-design/blob/main/LICENSE) のもとで公開されています。
