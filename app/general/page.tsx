/**
 * 한국어 일반 수업 메인 페이지 (/general)
 * 초급, 중급, 고급 레벨 선택을 표시합니다.
 */
import CenterStage from '@/components/layout/CenterStage';
import GeneralLevels from '@/components/sections/GeneralLevels';
import Link from 'next/link';

export default function GeneralPage() {
  // 이 페이지에서 호출할 API: 없음 (정적 페이지)
  return (
    <CenterStage>
      <GeneralLevels />
      <Link 
        href="/" 
        className="mt-8 px-6 py-2 text-gray-400 hover:text-gold-400 transition-colors duration-200 text-sm sm:text-base"
      >
        ← 뒤로
      </Link>
    </CenterStage>
  );
}
