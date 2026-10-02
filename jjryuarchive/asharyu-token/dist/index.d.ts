import { colorValue } from './color/colorValue';
import { semanticValue } from './color/semanticValue';
import { rawFontSizeRem, semanticFontSize, fontFamily, fontWeight, lineHeight, letterSpacing } from './font';
import { motion } from './motion';
import { stroke } from './stroke';
import { interaction } from './interaction';
import { spacing } from './spacing';
import { radius } from './radius';
import { elevation } from './elevation';
import { zIndex } from './zIndex';
export { colorValue, semanticValue };
export type { ThemeTokens, SemanticValueProps } from './color/semanticValue';
export { rawFontSizeRem, semanticFontSize, fontFamily, fontWeight, lineHeight, letterSpacing, };
export { spacing, radius, elevation, zIndex, motion, stroke, interaction };
declare const AsharyuDesignToken: {
    color: Readonly<{
        raw: {
            yang: {
                0: string;
                1: string;
                2: string;
                3: string;
                4: string;
            };
            yin: {
                0: string;
                1: string;
                2: string;
                3: string;
                4: string;
            };
            wood: {
                0: string;
                1: string;
                2: string;
                3: string;
                4: string;
            };
            fire: {
                0: string;
                1: string;
                2: string;
                3: string;
                4: string;
            };
            earth: {
                0: string;
                1: string;
                2: string;
                3: string;
                4: string;
            };
            metal: {
                0: string;
                1: string;
                2: string;
                3: string;
                4: string;
            };
            water: {
                0: string;
                1: string;
                2: string;
                3: string;
                4: string;
            };
            hong: {
                0: string;
                1: string;
                2: string;
                3: string;
                4: string;
            };
            byeok: {
                0: string;
                1: string;
                2: string;
                3: string;
                4: string;
            };
            nok: {
                0: string;
                1: string;
                2: string;
                3: string;
                4: string;
            };
            yuhwang: {
                0: string;
                1: string;
                2: string;
                3: string;
                4: string;
            };
            ja: {
                0: string;
                1: string;
                2: string;
                3: string;
                4: string;
            };
        };
        semantic: Readonly<{
            light: import("./color/semanticValue").ThemeTokens;
            dark: import("./color/semanticValue").ThemeTokens;
            scale: {
                readonly subtle: string;
                readonly soft: string;
                readonly primary: string;
                readonly deep: string;
                readonly sharp: string;
            };
            background: string;
            text: string;
            stroke: string;
            action: {
                readonly subtle: string;
                readonly soft: string;
                readonly primary: string;
                readonly deep: string;
                readonly sharp: string;
            };
            danger: {
                readonly subtle: string;
                readonly soft: string;
                readonly primary: string;
                readonly deep: string;
                readonly sharp: string;
            };
            surface: {
                readonly subtle: string;
                readonly soft: string;
                readonly primary: string;
                readonly deep: string;
                readonly sharp: string;
            };
            border: {
                readonly subtle: string;
                readonly soft: string;
                readonly primary: string;
                readonly deep: string;
                readonly sharp: string;
            };
            info: {
                readonly subtle: string;
                readonly soft: string;
                readonly primary: string;
                readonly deep: string;
                readonly sharp: string;
            };
            status: {
                readonly success: {
                    readonly subtle: string;
                    readonly soft: string;
                    readonly primary: string;
                    readonly deep: string;
                    readonly sharp: string;
                };
                readonly alertHover: {
                    readonly subtle: string;
                    readonly soft: string;
                    readonly primary: string;
                    readonly deep: string;
                    readonly sharp: string;
                };
                readonly actionFocus: {
                    readonly subtle: string;
                    readonly soft: string;
                    readonly primary: string;
                    readonly deep: string;
                    readonly sharp: string;
                };
                readonly subSurface: {
                    readonly subtle: string;
                    readonly soft: string;
                    readonly primary: string;
                    readonly deep: string;
                    readonly sharp: string;
                };
                readonly infoActive: {
                    readonly subtle: string;
                    readonly soft: string;
                    readonly primary: string;
                    readonly deep: string;
                    readonly sharp: string;
                };
            };
            bleed: {
                readonly primary: string;
                readonly soft: string;
            };
        }>;
    }>;
    font: Readonly<{
        rawRem: Record<"$8" | "$10" | "$12" | "$14" | "$16" | "$18" | "$20" | "$22" | "$24" | "$26" | "$28" | "$30" | "$32" | "$34" | "$36" | "$38" | "$40" | "$42" | "$44" | "$46" | "$48" | "$50" | "$52" | "$54" | "$56" | "$58" | "$60" | "$62" | "$64" | "$66" | "$68", string>;
        semantic: Record<"$h1" | "$h2" | "$h3" | "$h4" | "$h5" | "$h6" | "$subtitle1" | "$subtitle2" | "$subtitle3" | "$body1" | "$body2" | "$body3" | "$button" | "$caption" | "$overline", string>;
        family: Readonly<{
            serif: "'Gowun Batang', 'Noto Serif KR', serif";
            sans: "'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Apple SD Gothic Neo', sans-serif";
            mono: "'JetBrains Mono', 'Fira Code', Menlo, monospace";
        }>;
        weight: Readonly<{
            light: "300";
            regular: "400";
            medium: "500";
            semibold: "600";
            bold: "700";
        }>;
        lineHeight: Readonly<{
            tight: "1.25";
            normal: "1.5";
            relaxed: "1.75";
            loose: "2.0";
        }>;
        letterSpacing: Readonly<{
            tight: "-0.02em";
            normal: "0em";
            wide: "0.04em";
            loose: "0.08em";
        }>;
    }>;
    spacing: Readonly<{
        compact: "0.25rem";
        fine: "0.5rem";
        moderate: "0.75rem";
        base: "1rem";
        void: "1.5rem";
        wide: "2rem";
        spacious: "3rem";
        vast: "4rem";
    }>;
    radius: Readonly<{
        sharp: "0px";
        delicate: "0.25rem";
        gentle: "0.5rem";
        smooth: "0.75rem";
        prominent: "1rem";
        full: "9999px";
    }>;
    elevation: Readonly<{
        none: "none";
        damMuk: "0 1px 3px var(--asharyu-color-semantic-bleed-soft), 0 2px 8px var(--asharyu-color-semantic-bleed-primary)";
        jungMuk: "0 4px 16px var(--asharyu-color-semantic-bleed-primary), 0 2px 4px var(--asharyu-color-semantic-bleed-soft)";
        nongMuk: "0 12px 32px var(--asharyu-color-semantic-bleed-primary), 0 4px 12px var(--asharyu-color-semantic-bleed-soft)";
        gukMuk: "0 20px 48px var(--asharyu-color-semantic-bleed-primary), 0 8px 16px var(--asharyu-color-semantic-bleed-soft)";
    }>;
    zIndex: Readonly<{
        base: "0";
        raised: "1";
        docked: "10";
        sticky: "100";
        dropdown: "200";
        backdrop: "500";
        modal: "600";
        popover: "700";
        toast: "800";
        tooltip: "900";
        max: "9999";
    }>;
    motion: Readonly<{
        kiUn: {
            gentle: string;
            sharp: string;
            spread: string;
        };
        duration: {
            decisive: string;
            flow: string;
            bleed: string;
        };
    }>;
    stroke: Readonly<{
        weight: {
            sharp: string;
            fine: string;
            medium: string;
            bold: string;
            heavy: string;
        };
        ink: {
            pressureLight: string;
            pressureHeavy: string;
            bleed: string;
        };
        sharp: "var(--asharyu-stroke-weight-fine) solid var(--asharyu-color-semantic-stroke)";
        rough: "url(#ink-bleed-filter)";
    }>;
    interaction: Readonly<{
        flow: {
            sangSaeng: string;
        };
        feedback: {
            sangGeukDecisive: string;
            sangGeukSpread: string;
        };
        theme: {
            bleed: string;
        };
    }>;
};
/**
 * '검의 예리함'을 담아 키값을 Kebab-case로 변환합니다.
 * $ 접두사 제거 및 Camel/PascalCase를 Kebab-case로 변환
 */
export declare const normalizeKey: (key: string) => string;
/**
 * 'tokens' 객체는 Asharyu 디자인 토큰의 구조를 그대로 가지지만, 값은 CSS 변수 참조 문자열입니다.
 * 예: tokens.color.semantic.text -> "var(--asharyu-color-semantic-text)"
 *     tokens.color.semantic.action.primary -> "var(--asharyu-color-semantic-action-primary)"
 *     tokens.spacing.void -> "var(--asharyu-spacing-void)"
 *     tokens.elevation.damMuk -> "var(--asharyu-elevation-dam-muk)"
 */
export declare const tokens: {
    color: Readonly<{
        raw: {
            yang: {
                0: string;
                1: string;
                2: string;
                3: string;
                4: string;
            };
            yin: {
                0: string;
                1: string;
                2: string;
                3: string;
                4: string;
            };
            wood: {
                0: string;
                1: string;
                2: string;
                3: string;
                4: string;
            };
            fire: {
                0: string;
                1: string;
                2: string;
                3: string;
                4: string;
            };
            earth: {
                0: string;
                1: string;
                2: string;
                3: string;
                4: string;
            };
            metal: {
                0: string;
                1: string;
                2: string;
                3: string;
                4: string;
            };
            water: {
                0: string;
                1: string;
                2: string;
                3: string;
                4: string;
            };
            hong: {
                0: string;
                1: string;
                2: string;
                3: string;
                4: string;
            };
            byeok: {
                0: string;
                1: string;
                2: string;
                3: string;
                4: string;
            };
            nok: {
                0: string;
                1: string;
                2: string;
                3: string;
                4: string;
            };
            yuhwang: {
                0: string;
                1: string;
                2: string;
                3: string;
                4: string;
            };
            ja: {
                0: string;
                1: string;
                2: string;
                3: string;
                4: string;
            };
        };
        semantic: Readonly<{
            light: import("./color/semanticValue").ThemeTokens;
            dark: import("./color/semanticValue").ThemeTokens;
            scale: {
                readonly subtle: string;
                readonly soft: string;
                readonly primary: string;
                readonly deep: string;
                readonly sharp: string;
            };
            background: string;
            text: string;
            stroke: string;
            action: {
                readonly subtle: string;
                readonly soft: string;
                readonly primary: string;
                readonly deep: string;
                readonly sharp: string;
            };
            danger: {
                readonly subtle: string;
                readonly soft: string;
                readonly primary: string;
                readonly deep: string;
                readonly sharp: string;
            };
            surface: {
                readonly subtle: string;
                readonly soft: string;
                readonly primary: string;
                readonly deep: string;
                readonly sharp: string;
            };
            border: {
                readonly subtle: string;
                readonly soft: string;
                readonly primary: string;
                readonly deep: string;
                readonly sharp: string;
            };
            info: {
                readonly subtle: string;
                readonly soft: string;
                readonly primary: string;
                readonly deep: string;
                readonly sharp: string;
            };
            status: {
                readonly success: {
                    readonly subtle: string;
                    readonly soft: string;
                    readonly primary: string;
                    readonly deep: string;
                    readonly sharp: string;
                };
                readonly alertHover: {
                    readonly subtle: string;
                    readonly soft: string;
                    readonly primary: string;
                    readonly deep: string;
                    readonly sharp: string;
                };
                readonly actionFocus: {
                    readonly subtle: string;
                    readonly soft: string;
                    readonly primary: string;
                    readonly deep: string;
                    readonly sharp: string;
                };
                readonly subSurface: {
                    readonly subtle: string;
                    readonly soft: string;
                    readonly primary: string;
                    readonly deep: string;
                    readonly sharp: string;
                };
                readonly infoActive: {
                    readonly subtle: string;
                    readonly soft: string;
                    readonly primary: string;
                    readonly deep: string;
                    readonly sharp: string;
                };
            };
            bleed: {
                readonly primary: string;
                readonly soft: string;
            };
        }>;
    }>;
    font: Readonly<{
        rawRem: Record<"$8" | "$10" | "$12" | "$14" | "$16" | "$18" | "$20" | "$22" | "$24" | "$26" | "$28" | "$30" | "$32" | "$34" | "$36" | "$38" | "$40" | "$42" | "$44" | "$46" | "$48" | "$50" | "$52" | "$54" | "$56" | "$58" | "$60" | "$62" | "$64" | "$66" | "$68", string>;
        semantic: Record<"$h1" | "$h2" | "$h3" | "$h4" | "$h5" | "$h6" | "$subtitle1" | "$subtitle2" | "$subtitle3" | "$body1" | "$body2" | "$body3" | "$button" | "$caption" | "$overline", string>;
        family: Readonly<{
            serif: "'Gowun Batang', 'Noto Serif KR', serif";
            sans: "'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Apple SD Gothic Neo', sans-serif";
            mono: "'JetBrains Mono', 'Fira Code', Menlo, monospace";
        }>;
        weight: Readonly<{
            light: "300";
            regular: "400";
            medium: "500";
            semibold: "600";
            bold: "700";
        }>;
        lineHeight: Readonly<{
            tight: "1.25";
            normal: "1.5";
            relaxed: "1.75";
            loose: "2.0";
        }>;
        letterSpacing: Readonly<{
            tight: "-0.02em";
            normal: "0em";
            wide: "0.04em";
            loose: "0.08em";
        }>;
    }>;
    spacing: Readonly<{
        compact: "0.25rem";
        fine: "0.5rem";
        moderate: "0.75rem";
        base: "1rem";
        void: "1.5rem";
        wide: "2rem";
        spacious: "3rem";
        vast: "4rem";
    }>;
    radius: Readonly<{
        sharp: "0px";
        delicate: "0.25rem";
        gentle: "0.5rem";
        smooth: "0.75rem";
        prominent: "1rem";
        full: "9999px";
    }>;
    elevation: Readonly<{
        none: "none";
        damMuk: "0 1px 3px var(--asharyu-color-semantic-bleed-soft), 0 2px 8px var(--asharyu-color-semantic-bleed-primary)";
        jungMuk: "0 4px 16px var(--asharyu-color-semantic-bleed-primary), 0 2px 4px var(--asharyu-color-semantic-bleed-soft)";
        nongMuk: "0 12px 32px var(--asharyu-color-semantic-bleed-primary), 0 4px 12px var(--asharyu-color-semantic-bleed-soft)";
        gukMuk: "0 20px 48px var(--asharyu-color-semantic-bleed-primary), 0 8px 16px var(--asharyu-color-semantic-bleed-soft)";
    }>;
    zIndex: Readonly<{
        base: "0";
        raised: "1";
        docked: "10";
        sticky: "100";
        dropdown: "200";
        backdrop: "500";
        modal: "600";
        popover: "700";
        toast: "800";
        tooltip: "900";
        max: "9999";
    }>;
    motion: Readonly<{
        kiUn: {
            gentle: string;
            sharp: string;
            spread: string;
        };
        duration: {
            decisive: string;
            flow: string;
            bleed: string;
        };
    }>;
    stroke: Readonly<{
        weight: {
            sharp: string;
            fine: string;
            medium: string;
            bold: string;
            heavy: string;
        };
        ink: {
            pressureLight: string;
            pressureHeavy: string;
            bleed: string;
        };
        sharp: "var(--asharyu-stroke-weight-fine) solid var(--asharyu-color-semantic-stroke)";
        rough: "url(#ink-bleed-filter)";
    }>;
    interaction: Readonly<{
        flow: {
            sangSaeng: string;
        };
        feedback: {
            sangGeukDecisive: string;
            sangGeukSpread: string;
        };
        theme: {
            bleed: string;
        };
    }>;
};
/**
 * 기운생동(氣韻生動)한 스타일 작성을 돕는 Tagged Template Literal입니다.
 */
export declare const css: (strings: TemplateStringsArray, ...values: any[]) => string;
export default AsharyuDesignToken;
