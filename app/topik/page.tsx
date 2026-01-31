/**
 * TOPIK 메인 페이지 (/topik)
 * TOPIK 1과 TOPIK 2 선택을 표시합니다.
 */
import CenterStage from '@/components/layout/CenterStage';
import TopikSelect from '@/components/sections/TopikSelect';
import Link from 'next/link';

export default function TopikPage() {
  // 이 페이지에서 호출할 API: 없음 (정적 페이지)
  return (
    <CenterStage>
      <TopikSelect />
      <Link 
        href="/" 
        className="mt-8 px-6 py-2 text-gray-400 hover:text-gold-400 transition-colors duration-200 text-sm sm:text-base"
      >
        ← 뒤로
      </Link>
    </CenterStage>
  );
}
