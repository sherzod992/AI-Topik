/**
 * TOPIK 2 듣기 페이지 (/topik/2/listening)
 * TOPIK 2 듣기 문제를 표시합니다.
 */
import CenterStage from '@/components/layout/CenterStage';
import Link from 'next/link';
import { getTopikQuestions } from '@/services/api';

export default async function Topik2ListeningPage() {
  // 이 페이지에서 호출할 API: getTopikQuestions(2, 'listening')
  const questions = await getTopikQuestions(2, 'listening');

  return (
    <CenterStage>
      <div className="flex flex-col items-center justify-center gap-6 w-full">
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4">TOPIK 2 - 듣기</h1>
        {/* TODO: questions 목록 렌더링 */}
        <p className="text-gray-400">문제 목록이 여기에 표시됩니다.</p>
        <Link 
          href="/topik/2" 
          className="mt-4 px-6 py-2 text-gray-400 hover:text-gold-400 transition-colors duration-200 text-sm sm:text-base"
        >
          ← 뒤로
        </Link>
      </div>
    </CenterStage>
  );
}
