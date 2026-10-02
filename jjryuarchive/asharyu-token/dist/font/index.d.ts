export declare const rawFontSizeRem: Record<"$8" | "$10" | "$12" | "$14" | "$16" | "$18" | "$20" | "$22" | "$24" | "$26" | "$28" | "$30" | "$32" | "$34" | "$36" | "$38" | "$40" | "$42" | "$44" | "$46" | "$48" | "$50" | "$52" | "$54" | "$56" | "$58" | "$60" | "$62" | "$64" | "$66" | "$68", string>;
export interface FontSizeProps {
    schema: Record<'$h1' | '$h2' | '$h3' | '$h4' | '$h5' | '$h6' | '$subtitle1' | '$subtitle2' | '$subtitle3' | '$body1' | '$body2' | '$body3' | '$button' | '$caption' | '$overline', string>;
}
/**
 * Defines semantic font sizes for various UI elements.
 */
export declare const fontSize: Readonly<FontSizeProps>;
export declare const semanticFontSize: Record<"$h1" | "$h2" | "$h3" | "$h4" | "$h5" | "$h6" | "$subtitle1" | "$subtitle2" | "$subtitle3" | "$body1" | "$body2" | "$body3" | "$button" | "$caption" | "$overline", string>;
/**
 * 서체의 결 (Font Family)
 * 동양적 수묵과 한지의 미학에 어울리는 바탕/명조(Serif)와 현대적 가독성을 지닌 본문 고딕(Sans)
 */
export declare const fontFamily: Readonly<{
    /** 한지의 결을 담은 서정적 명조/바탕체 (헤드라인, 인용문용) */
    serif: "'Gowun Batang', 'Noto Serif KR', serif";
    /** 현대적 인터페이스를 위한 정갈한 본문 고딕체 */
    sans: "'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Apple SD Gothic Neo', sans-serif";
    /** 묵직하고 일정한 폭을 지닌 고정폭 서체 (코드, 수치용) */
    mono: "'JetBrains Mono', 'Fira Code', Menlo, monospace";
}>;
/**
 * 필압의 굵기 (Font Weight)
 * 수묵화의 필압(筆壓)처럼 글자의 묵직함을 조절합니다.
 */
export declare const fontWeight: Readonly<{
    /** 담(淡): 가장 가벼운 필압 (300) */
    light: "300";
    /** 상(常): 일상적인 표준 굵기 (400) */
    regular: "400";
    /** 중(中): 가벼운 강조 (500) */
    medium: "500";
    /** 농(濃): 깊은 먹빛의 굵기 (600) */
    semibold: "600";
    /** 필(筆): 붓을 힘껏 누른 듯한 강한 굵기 (700) */
    bold: "700";
}>;
/**
 * 행간 (Line Height)
 * 한지 위의 숨구멍처럼 글줄 사이의 호흡과 여백을 조절합니다.
 */
export declare const lineHeight: Readonly<{
    /** 조밀: 헤드라인 및 버튼용 (1.25) */
    tight: "1.25";
    /** 표준: 일반 본문용 (1.5) */
    normal: "1.5";
    /** 유연: 여백이 살아있는 긴 본문용 (1.75) */
    relaxed: "1.75";
    /** 심원: 여유로운 행간 (2.0) */
    loose: "2.0";
}>;
/**
 * 자간 (Letter Spacing)
 */
export declare const letterSpacing: Readonly<{
    /** 밀착: 큰 타이틀용 */
    tight: "-0.02em";
    /** 표준 */
    normal: "0em";
    /** 여백: 자간에 공기를 부여함 */
    wide: "0.04em";
    /** 확장: 대문자, 오버라인용 */
    loose: "0.08em";
}>;
