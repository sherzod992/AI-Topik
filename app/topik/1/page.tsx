/**
 * TOPIK 1 메인 페이지 (/topik/1)
 * 듣기, 읽기 스킬 선택을 표시합니다.
 */
import CenterStage from '@/components/layout/CenterStage';
import SkillSelect from '@/components/sections/SkillSelect';
import Link from 'next/link';

export default function Topik1Page() {
  // 이 페이지에서 호출할 API: 없음 (정적 페이지)
  return (
    <CenterStage>
      <SkillSelect grade={1} />
      <Link 
        href="/topik" 
        className="mt-8 px-6 py-2 text-gray-400 hover:text-gold-400 transition-colors duration-200 text-sm sm:text-base"
      >
        ← 뒤로
      </Link>
    </CenterStage>
  );
}
