/**
 * Asharyu Design System - Radius Tokens
 * 곡률의 미학: 검의 예리한 직선부터 태극의 완만한 곡선까지 모서리의 성격을 규정합니다.
 */
export declare const radius: Readonly<{
    /** 예리함: 검으로 벤 듯한 각진 모서리 (0px) */
    sharp: "0px";
    /** 정갈함: 절제된 최소 곡선 (4px) */
    delicate: "0.25rem";
    /** 온화함: 부드러운 상생의 곡률 (8px) */
    gentle: "0.5rem";
    /** 유려함: 담채의 번짐처럼 유연한 곡률 (12px) */
    smooth: "0.75rem";
    /** 원만함: 카드 및 컨테이너를 위한 넉넉한 둥글림 (16px) */
    prominent: "1rem";
    /** 태극: 뱃지, 필, 아바타, 원형 버튼을 위한 완전한 둥글림 */
    full: "9999px";
}>;
export type RadiusType = typeof radius;
export default radius;
