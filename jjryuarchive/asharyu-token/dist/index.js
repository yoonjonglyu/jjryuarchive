// src/color/colorValue.ts
var colorValue = {
  yang: {
    0: "#ffffff",
    1: "#fefdfa",
    2: "#fdfaf4",
    3: "#f7f2e1",
    4: "#f1ebd0"
  },
  yin: {
    0: "#333333",
    1: "#1a1a1a",
    2: "#0c0c0c",
    3: "#060606",
    4: "#000000"
  },
  wood: {
    0: "#ECF2F6",
    1: "#AEC6D7",
    2: "#7BA2BE",
    3: "#5C83A2",
    4: "#3E6586"
  },
  fire: {
    0: "#F4E7E7",
    1: "#DDA8A8",
    2: "#C96B6B",
    3: "#A74E4E",
    4: "#853131"
  },
  earth: {
    0: "#F6F1E3",
    1: "#E8DDBF",
    2: "#D9C58F",
    3: "#B5A16B",
    4: "#917D47"
  },
  metal: {
    0: "#FAFAFA",
    1: "#F2F2F2",
    2: "#E2E2E2",
    3: "#C2C2C2",
    4: "#A2A2A2"
  },
  water: {
    0: "#999999",
    1: "#555555",
    2: "#333333",
    3: "#222222",
    4: "#111111"
  },
  hong: {
    0: "#F2E5E5",
    1: "#E5C7C7",
    2: "#D6A6A6",
    3: "#B37D7D",
    4: "#915555"
  },
  byeok: {
    0: "#E6EEF4",
    1: "#CEDAE3",
    2: "#AFC2D0",
    3: "#8AA1B2",
    4: "#668194"
  },
  nok: {
    0: "#E7F0E6",
    1: "#CDDAC9",
    2: "#ACC4A6",
    3: "#8AA885",
    4: "#698C64"
  },
  yuhwang: {
    0: "#D0CCBE",
    1: "#AFA895",
    2: "#867D61",
    3: "#6D654E",
    4: "#544D3C"
  },
  ja: {
    0: "#D1BFC0",
    1: "#A9898B",
    2: "#7E4F53",
    3: "#653A3D",
    4: "#4C2628"
  }
};

// src/color/semanticValue.ts
var semanticValue = Object.freeze({
  light: {
    scale: {
      subtle: colorValue.yang[0],
      soft: colorValue.yang[1],
      primary: colorValue.yang[2],
      deep: colorValue.yang[3],
      sharp: colorValue.yang[4]
    },
    background: colorValue.yang[2],
    text: colorValue.yin[2],
    stroke: colorValue.yin[4],
    action: {
      subtle: colorValue.wood[0],
      soft: colorValue.wood[1],
      primary: colorValue.wood[2],
      deep: colorValue.wood[3],
      sharp: colorValue.wood[4]
    },
    danger: {
      subtle: colorValue.fire[0],
      soft: colorValue.fire[1],
      primary: colorValue.fire[2],
      deep: colorValue.fire[3],
      sharp: colorValue.fire[4]
    },
    surface: {
      subtle: colorValue.earth[0],
      soft: colorValue.earth[1],
      primary: colorValue.earth[2],
      deep: colorValue.earth[3],
      sharp: colorValue.earth[4]
    },
    border: {
      subtle: colorValue.metal[0],
      soft: colorValue.metal[1],
      primary: colorValue.metal[2],
      deep: colorValue.metal[3],
      sharp: colorValue.metal[4]
    },
    info: {
      subtle: colorValue.water[0],
      soft: colorValue.water[1],
      primary: colorValue.water[2],
      deep: colorValue.water[3],
      sharp: colorValue.water[4]
    },
    status: {
      success: {
        subtle: colorValue.nok[0],
        soft: colorValue.nok[1],
        primary: colorValue.nok[2],
        deep: colorValue.nok[3],
        sharp: colorValue.nok[4]
      },
      alertHover: {
        subtle: colorValue.hong[0],
        soft: colorValue.hong[1],
        primary: colorValue.hong[2],
        deep: colorValue.hong[3],
        sharp: colorValue.hong[4]
      },
      actionFocus: {
        subtle: colorValue.byeok[0],
        soft: colorValue.byeok[1],
        primary: colorValue.byeok[2],
        deep: colorValue.byeok[3],
        sharp: colorValue.byeok[4]
      },
      subSurface: {
        subtle: colorValue.yuhwang[0],
        soft: colorValue.yuhwang[1],
        primary: colorValue.yuhwang[2],
        deep: colorValue.yuhwang[3],
        sharp: colorValue.yuhwang[4]
      },
      infoActive: {
        subtle: colorValue.ja[0],
        soft: colorValue.ja[1],
        primary: colorValue.ja[2],
        deep: colorValue.ja[3],
        sharp: colorValue.ja[4]
      }
    },
    bleed: {
      primary: "rgba(12, 12, 12, 0.08)",
      soft: "rgba(217, 197, 143, 0.15)"
    }
  },
  dark: {
    scale: {
      subtle: colorValue.yin[4],
      soft: colorValue.yin[3],
      primary: colorValue.yin[2],
      deep: colorValue.yin[1],
      sharp: colorValue.yin[0]
    },
    background: colorValue.yin[2],
    text: colorValue.yang[2],
    stroke: colorValue.yang[0],
    action: {
      subtle: colorValue.wood[4],
      soft: colorValue.wood[3],
      primary: colorValue.wood[1],
      deep: colorValue.wood[2],
      sharp: colorValue.wood[0]
    },
    danger: {
      subtle: colorValue.fire[4],
      soft: colorValue.fire[3],
      primary: colorValue.fire[1],
      deep: colorValue.fire[2],
      sharp: colorValue.fire[0]
    },
    surface: {
      subtle: colorValue.earth[4],
      soft: colorValue.earth[3],
      primary: colorValue.earth[1],
      deep: colorValue.earth[2],
      sharp: colorValue.earth[0]
    },
    border: {
      subtle: colorValue.metal[4],
      soft: colorValue.metal[3],
      primary: colorValue.metal[1],
      deep: colorValue.metal[2],
      sharp: colorValue.metal[0]
    },
    info: {
      subtle: colorValue.water[4],
      soft: colorValue.water[3],
      primary: colorValue.water[1],
      deep: colorValue.water[2],
      sharp: colorValue.water[0]
    },
    status: {
      success: {
        subtle: colorValue.nok[4],
        soft: colorValue.nok[3],
        primary: colorValue.nok[1],
        deep: colorValue.nok[2],
        sharp: colorValue.nok[0]
      },
      alertHover: {
        subtle: colorValue.hong[4],
        soft: colorValue.hong[3],
        primary: colorValue.hong[1],
        deep: colorValue.hong[2],
        sharp: colorValue.hong[0]
      },
      actionFocus: {
        subtle: colorValue.byeok[4],
        soft: colorValue.byeok[3],
        primary: colorValue.byeok[1],
        deep: colorValue.byeok[2],
        sharp: colorValue.byeok[0]
      },
      subSurface: {
        subtle: colorValue.yuhwang[4],
        soft: colorValue.yuhwang[3],
        primary: colorValue.yuhwang[1],
        deep: colorValue.yuhwang[2],
        sharp: colorValue.yuhwang[0]
      },
      infoActive: {
        subtle: colorValue.ja[4],
        soft: colorValue.ja[3],
        primary: colorValue.ja[1],
        deep: colorValue.ja[2],
        sharp: colorValue.ja[0]
      }
    },
    bleed: {
      primary: "rgba(253, 250, 244, 0.12)",
      soft: "rgba(123, 162, 190, 0.2)"
    }
  }
});

// src/font/value.ts
var fontSizeValue = Object.freeze({
  $rem: {
    $8: "0.5rem",
    $10: "0.625rem",
    $12: "0.75rem",
    $14: "0.875rem",
    $16: "1rem",
    $18: "1.125rem",
    $20: "1.25rem",
    $22: "1.375rem",
    $24: "1.5rem",
    $26: "1.625rem",
    $28: "1.75rem",
    $30: "1.875rem",
    $32: "2rem",
    $34: "2.125rem",
    $36: "2.25rem",
    $38: "2.375rem",
    $40: "2.5rem",
    $42: "2.625rem",
    $44: "2.75rem",
    $46: "2.875rem",
    $48: "3rem",
    $50: "3.125rem",
    $52: "3.25rem",
    $54: "3.375rem",
    $56: "3.5rem",
    $58: "3.625rem",
    $60: "3.75rem",
    $62: "3.875rem",
    $64: "4rem",
    $66: "4.125rem",
    $68: "4.25rem"
  }
});

// src/font/index.ts
var rawFontSizeRem = fontSizeValue.$rem;
var fontSize = Object.freeze({
  schema: {
    $h1: fontSizeValue.$rem.$68,
    $h2: fontSizeValue.$rem.$48,
    $h3: fontSizeValue.$rem.$34,
    $h4: fontSizeValue.$rem.$28,
    $h5: fontSizeValue.$rem.$22,
    $h6: fontSizeValue.$rem.$18,
    $subtitle1: fontSizeValue.$rem.$16,
    $subtitle2: fontSizeValue.$rem.$14,
    $subtitle3: fontSizeValue.$rem.$12,
    $body1: fontSizeValue.$rem.$16,
    $body2: fontSizeValue.$rem.$14,
    $body3: fontSizeValue.$rem.$12,
    $button: fontSizeValue.$rem.$12,
    $caption: fontSizeValue.$rem.$10,
    $overline: fontSizeValue.$rem.$8
  }
});
var semanticFontSize = fontSize.schema;
var fontFamily = Object.freeze({
  serif: "'Gowun Batang', 'Noto Serif KR', serif",
  sans: "'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Apple SD Gothic Neo', sans-serif",
  mono: "'JetBrains Mono', 'Fira Code', Menlo, monospace"
});
var fontWeight = Object.freeze({
  light: "300",
  regular: "400",
  medium: "500",
  semibold: "600",
  bold: "700"
});
var lineHeight = Object.freeze({
  tight: "1.25",
  normal: "1.5",
  relaxed: "1.75",
  loose: "2.0"
});
var letterSpacing = Object.freeze({
  tight: "-0.02em",
  normal: "0em",
  wide: "0.04em",
  loose: "0.08em"
});

// src/motion/index.ts
var motion = Object.freeze({
  kiUn: {
    gentle: "cubic-bezier(0.4, 0, 0.2, 1)",
    sharp: "cubic-bezier(0.19, 1, 0.22, 1)",
    spread: "cubic-bezier(0.25, 0.46, 0.45, 0.94)"
  },
  duration: {
    decisive: "0.15s",
    flow: "0.3s",
    bleed: "0.8s"
  }
});

// src/stroke/index.ts
var stroke = Object.freeze({
  weight: {
    sharp: "0.5px",
    fine: "1px",
    medium: "1.5px",
    bold: "2px",
    heavy: "3px"
  },
  ink: {
    pressureLight: "var(--asharyu-stroke-weight-sharp)",
    pressureHeavy: "var(--asharyu-stroke-weight-heavy)",
    bleed: "blur(1.2px)"
  },
  sharp: `var(--asharyu-stroke-weight-fine) solid var(--asharyu-color-semantic-stroke)`,
  rough: "url(#ink-bleed-filter)"
});

// src/interaction/index.ts
var interaction = Object.freeze({
  flow: {
    sangSaeng: "all var(--asharyu-motion-duration-flow) var(--asharyu-motion-ki-un-gentle)"
  },
  feedback: {
    sangGeukDecisive: "all var(--asharyu-motion-duration-decisive) var(--asharyu-motion-ki-un-sharp)",
    sangGeukSpread: "all var(--asharyu-motion-duration-bleed) var(--asharyu-motion-ki-un-spread)"
  },
  theme: {
    bleed: "background-color var(--asharyu-motion-duration-bleed) var(--asharyu-motion-ki-un-spread), color var(--asharyu-motion-duration-flow) var(--asharyu-motion-ki-un-gentle)"
  }
});

// src/spacing/index.ts
var spacing = Object.freeze({
  compact: "0.25rem",
  fine: "0.5rem",
  moderate: "0.75rem",
  base: "1rem",
  void: "1.5rem",
  wide: "2rem",
  spacious: "3rem",
  vast: "4rem"
});

// src/radius/index.ts
var radius = Object.freeze({
  sharp: "0px",
  delicate: "0.25rem",
  gentle: "0.5rem",
  smooth: "0.75rem",
  prominent: "1rem",
  full: "9999px"
});

// src/elevation/index.ts
var elevation = Object.freeze({
  none: "none",
  damMuk: "0 1px 3px var(--asharyu-color-semantic-bleed-soft), 0 2px 8px var(--asharyu-color-semantic-bleed-primary)",
  jungMuk: "0 4px 16px var(--asharyu-color-semantic-bleed-primary), 0 2px 4px var(--asharyu-color-semantic-bleed-soft)",
  nongMuk: "0 12px 32px var(--asharyu-color-semantic-bleed-primary), 0 4px 12px var(--asharyu-color-semantic-bleed-soft)",
  gukMuk: "0 20px 48px var(--asharyu-color-semantic-bleed-primary), 0 8px 16px var(--asharyu-color-semantic-bleed-soft)"
});

// src/zIndex/index.ts
var zIndex = Object.freeze({
  base: "0",
  raised: "1",
  docked: "10",
  sticky: "100",
  dropdown: "200",
  backdrop: "500",
  modal: "600",
  popover: "700",
  toast: "800",
  tooltip: "900",
  max: "9999"
});

// src/index.ts
var semanticActiveAndThemes = Object.freeze({
  ...semanticValue.light,
  light: semanticValue.light,
  dark: semanticValue.dark
});
var color = Object.freeze({
  raw: colorValue,
  semantic: semanticActiveAndThemes
});
var font = Object.freeze({
  rawRem: rawFontSizeRem,
  semantic: semanticFontSize,
  family: fontFamily,
  weight: fontWeight,
  lineHeight,
  letterSpacing
});
var AsharyuDesignToken = {
  color,
  font,
  spacing,
  radius,
  elevation,
  zIndex,
  motion,
  stroke,
  interaction
};
var normalizeKey = (key) => key.replace(/^\$/, "").replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
var createBridge = (obj, path = ["asharyu"]) => {
  const bridge = {};
  for (const [key, value] of Object.entries(obj)) {
    const normalizedKey = normalizeKey(key);
    if (typeof value === "object" && value !== null) {
      bridge[key] = createBridge(value, [...path, normalizedKey]);
    } else {
      bridge[key] = `var(--${[...path, normalizedKey].join("-")})`;
    }
  }
  return bridge;
};
var tokens = createBridge(AsharyuDesignToken);
var css = (strings, ...values) => {
  return strings.reduce((acc, str, i) => acc + str + (values[i] ?? ""), "");
};
var src_default = AsharyuDesignToken;
export {
  colorValue,
  css,
  src_default as default,
  elevation,
  fontFamily,
  fontWeight,
  interaction,
  letterSpacing,
  lineHeight,
  motion,
  normalizeKey,
  radius,
  rawFontSizeRem,
  semanticFontSize,
  semanticValue,
  spacing,
  stroke,
  tokens,
  zIndex
};
