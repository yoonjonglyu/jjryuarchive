/**
 * @description 16px 기준으로 자주 쓰이는 px을 모두 rem 단위로 계산한 사이즈. 반응형 대응시 용이함
 * @todo calc
 */
export interface FontSizeValueProps {
    $rem: Record<MakeSizeSet<[
        8,
        10,
        12,
        14,
        16,
        18,
        20,
        22,
        24,
        26,
        28,
        30,
        32,
        34,
        36,
        38,
        40,
        42,
        44,
        46,
        48,
        50,
        52,
        54,
        56,
        58,
        60,
        62,
        64,
        66,
        68
    ]>, string>;
}
export declare const fontSizeValue: Readonly<FontSizeValueProps>;
type MakeSizeSet<T extends number[]> = `$${T[number]}`;
export {};
