/**
 * 한국어 일반 수업 - 중급 페이지 (/general/intermediate)
 * 중급 레벨 수업 목록을 표시합니다.
 */
import CenterStage from '@/components/layout/CenterStage';
import Link from 'next/link';
import { getGeneralLessons } from '@/services/api';

export default async function IntermediatePage() {
  // 이 페이지에서 호출할 API: getGeneralLessons('intermediate')
  const lessons = await getGeneralLessons('intermediate');

  return (
    <CenterStage>
      <div className="flex flex-col items-center justify-center gap-6 w-full">
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4">중급 수업</h1>
        {/* TODO: lessons 목록 렌더링 */}
        <p className="text-gray-400">수업 목록이 여기에 표시됩니다.</p>
        <Link 
          href="/general" 
          className="mt-4 px-6 py-2 text-gray-400 hover:text-gold-400 transition-colors duration-200 text-sm sm:text-base"
        >
          ← 뒤로
        </Link>
      </div>
    </CenterStage>
  );
}
