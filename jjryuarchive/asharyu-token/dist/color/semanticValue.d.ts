/**
 * Asharyu Design System - Semantic Color Tokens
 * 음양의 반전과 오행의 기운을 담은 테마별 시맨틱 정의입니다.
 */
export interface ThemeTokens {
    /** 5단계 색상 계층 구조 */
    readonly scale: {
        readonly subtle: string;
        readonly soft: string;
        readonly primary: string;
        readonly deep: string;
        readonly sharp: string;
    };
    readonly background: string;
    readonly text: string;
    readonly stroke: string;
    readonly action: ThemeTokens['scale'];
    readonly danger: ThemeTokens['scale'];
    readonly surface: ThemeTokens['scale'];
    readonly border: ThemeTokens['scale'];
    readonly info: ThemeTokens['scale'];
    readonly status: {
        readonly success: ThemeTokens['scale'];
        readonly alertHover: ThemeTokens['scale'];
        readonly actionFocus: ThemeTokens['scale'];
        readonly subSurface: ThemeTokens['scale'];
        readonly infoActive: ThemeTokens['scale'];
    };
    readonly bleed: {
        readonly primary: string;
        readonly soft: string;
    };
}
export interface SemanticValueProps {
    readonly light: ThemeTokens;
    readonly dark: ThemeTokens;
}
export declare const semanticValue: Readonly<SemanticValueProps>;
export default semanticValue;
