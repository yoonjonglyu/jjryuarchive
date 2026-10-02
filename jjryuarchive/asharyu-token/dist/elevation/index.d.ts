/**
 * Asharyu Design System - Elevation & Depth Tokens
 * 농담(濃淡)의 미학: 수묵의 농도와 번짐을 통해 디지털 공간의 깊이감을 표현합니다.
 * 하드코딩된 그림자 대신 시맨틱 bleed 토큰을 활용하여 음양(다크/라이트) 모드에 자연스럽게 감응합니다.
 */
export declare const elevation: Readonly<{
    /** 평면: 높이 없음 */
    none: "none";
    /** 담묵(淡墨): 은은하게 스며드는 엷은 먹빛, 카드 및 상호작용 표면 */
    damMuk: "0 1px 3px var(--asharyu-color-semantic-bleed-soft), 0 2px 8px var(--asharyu-color-semantic-bleed-primary)";
    /** 중묵(中墨): 적당한 깊이의 먹빛, 드롭다운 메뉴 및 보드 컨테이너 */
    jungMuk: "0 4px 16px var(--asharyu-color-semantic-bleed-primary), 0 2px 4px var(--asharyu-color-semantic-bleed-soft)";
    /** 농묵(濃墨): 짙고 묵직한 먹빛, 팝오버 및 모달 다이얼로그 */
    nongMuk: "0 12px 32px var(--asharyu-color-semantic-bleed-primary), 0 4px 12px var(--asharyu-color-semantic-bleed-soft)";
    /** 극묵(極墨): 가장 깊고 강렬한 먹빛, 플로팅 토스트 및 중요 알림창 */
    gukMuk: "0 20px 48px var(--asharyu-color-semantic-bleed-primary), 0 8px 16px var(--asharyu-color-semantic-bleed-soft)";
}>;
export type ElevationType = typeof elevation;
export default elevation;
