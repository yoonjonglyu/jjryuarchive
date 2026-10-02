/**
 * Asharyu Design System - Z-Index Layer Tokens
 * 층위(層位)의 질서: 인터페이스 요소 간의 겹침과 시각적 우선순위를 정의합니다.
 */
export declare const zIndex: Readonly<{
    /** 기본 바닥면 */
    base: "0";
    /** 살짝 들어올려진 요소 (카드 호버, 스크롤바 등) */
    raised: "1";
    /** 하단 네비게이션 또는 도킹 바 */
    docked: "10";
    /** 상단 고정 헤더, 스티키 컴포넌트 */
    sticky: "100";
    /** 드롭다운 메뉴, 셀렉트 옵션 리스트 */
    dropdown: "200";
    /** 백드롭 마스크 레이어 */
    backdrop: "500";
    /** 모달 다이얼로그 본체 */
    modal: "600";
    /** 팝오버, 플로팅 패널 */
    popover: "700";
    /** 토스트 알림, 스낵바 */
    toast: "800";
    /** 툴팁 (최상위 안내 힌트) */
    tooltip: "900";
    /** 절대 최상위 레이어 */
    max: "9999";
}>;
export type ZIndexType = typeof zIndex;
export default zIndex;
