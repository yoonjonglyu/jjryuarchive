/**
 * Asharyu Design System - Spacing & Void Tokens
 * 여백(餘白, Void)의 미학: 수묵과 한지의 숨구멍을 형성하는 공간 정의입니다.
 */
export declare const spacing: Readonly<{
    /** 찰나: 아이콘 간격, 태그 내부 등 초미세 간격 (4px) */
    compact: "0.25rem";
    /** 세목: 인라인 요소, 작은 패딩 등 정갈한 간격 (8px) */
    fine: "0.5rem";
    /** 근거리: 폼 컨트롤 내부, 리스트 아이템 간격 (12px) */
    moderate: "0.75rem";
    /** 평상: 기본 패딩, 카드 내부 간격 (16px) */
    base: "1rem";
    /** 여백: 컴포넌트 간 여백, 한지의 숨구멍 (24px) */
    void: "1.5rem";
    /** 심원: 섹션 내부 그룹핑 여백 (32px) */
    wide: "2rem";
    /** 대여백: 주요 컴포넌트 및 섹션 간 여백 (48px) */
    spacious: "3rem";
    /** 광막: 페이지 레벨의 시원한 여백 (64px) */
    vast: "4rem";
}>;
export type SpacingType = typeof spacing;
export default spacing;
