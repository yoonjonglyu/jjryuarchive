/**
 * 수묵의 필치와 필압을 조절하는 스트로크 토큰
 */
export declare const stroke: Readonly<{
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
export type StrokeType = typeof stroke;
