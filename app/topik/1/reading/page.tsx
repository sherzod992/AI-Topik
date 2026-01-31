/**
 * TOPIK 1 읽기 페이지 (/topik/1/reading)
 * TOPIK 1 읽기 문제를 표시합니다.
 */
import CenterStage from '@/components/layout/CenterStage';
import Link from 'next/link';
import { getTopikQuestions } from '@/services/api';

export default async function Topik1ReadingPage() {
  // 이 페이지에서 호출할 API: getTopikQuestions(1, 'reading')
  const questions = await getTopikQuestions(1, 'reading');

  return (
    <CenterStage>
      <div className="flex flex-col items-center justify-center gap-6 w-full">
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4">TOPIK 1 - 읽기</h1>
        {/* TODO: questions 목록 렌더링 */}
        <p className="text-gray-400">문제 목록이 여기에 표시됩니다.</p>
        <Link 
          href="/topik/1" 
          className="mt-4 px-6 py-2 text-gray-400 hover:text-gold-400 transition-colors duration-200 text-sm sm:text-base"
        >
          ← 뒤로
        </Link>
      </div>
    </CenterStage>
  );
}
