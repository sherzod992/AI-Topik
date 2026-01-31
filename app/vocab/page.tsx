/**
 * 나만의 단어장 페이지 (/vocab)
 * 사용자가 저장한 단어 목록을 표시합니다.
 */
import CenterStage from '@/components/layout/CenterStage';
import Link from 'next/link';
import { getVocabList } from '@/services/api';

export default async function VocabPage() {
  // 이 페이지에서 호출할 API: getVocabList()
  const vocabList = await getVocabList();

  return (
    <CenterStage>
      <div className="flex flex-col items-center justify-center gap-6 w-full">
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4">나만의 단어장</h1>
        {/* TODO: vocabList 목록 렌더링 */}
        <p className="text-gray-400">단어 목록이 여기에 표시됩니다.</p>
        <Link 
          href="/" 
          className="mt-4 px-6 py-2 text-gray-400 hover:text-gold-400 transition-colors duration-200 text-sm sm:text-base"
        >
          ← 뒤로
        </Link>
      </div>
    </CenterStage>
  );
}
