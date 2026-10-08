/**
 * GitHub Pages 및 서브패스 배포 환경을 위한 정적 자산(이미지 등) URL 해석 유틸리티
 * 
 * - 로컬 개발 환경 (NEXT_PUBLIC_BASE_PATH = ""): "/images/archives/..." -> "/images/archives/..."
 * - GitHub Pages 배포 환경 (NEXT_PUBLIC_BASE_PATH = "/jjryuarchive"): "/images/archives/..." -> "/jjryuarchive/images/archives/..."
 */

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function assetPath(path: string | undefined | null): string {
  if (!path) return "";
  
  // 외부 URL 또는 base64 데이터 URI는 그대로 반환
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("data:")) {
    return path;
  }

  // BASE_PATH가 없는 경우 (로컬 개발)
  if (!BASE_PATH) {
    return path.startsWith("/") ? path : `/${path}`;
  }

  // 이미 BASE_PATH로 시작하고 있다면 중복 추가 방지
  if (path === BASE_PATH || path.startsWith(`${BASE_PATH}/`)) {
    return path;
  }

  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${cleanPath}`;
}
