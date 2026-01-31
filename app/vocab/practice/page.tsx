/**
 * 단어장 연습 페이지 (/vocab/practice)
 * 집중 학습 모드로 저장된 단어들을 학습합니다.
 */
'use client';

import { useState } from 'react';
import Link from 'next/link';
import HeroWord from '@/components/vocab/HeroWord';

interface VocabItem {
  id: string;
  word: string;
  translation: string;
  example: string;
}

export default function VocabPracticePage() {
  // TODO: 실제 API 호출로 대체 - getVocabList()
  const [vocabList] = useState<VocabItem[]>([
    {
      id: '1',
      word: '학습',
      translation: 'learning, study',
      example: '한국어 학습은 재미있습니다.',
    },
    {
      id: '2',
      word: '이해',
      translation: 'understanding, comprehension',
      example: '이해가 잘 됩니다.',
    },
    {
      id: '3',
      word: '연습',
      translation: 'practice, exercise',
      example: '매일 연습하면 실력이 늡니다.',
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentWord = vocabList[currentIndex];

  const handleNext = () => {
    if (currentIndex < vocabList.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  if (!currentWord) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-400 mb-4">학습할 단어가 없습니다.</p>
          <Link
            href="/vocab"
            className="text-gold-400 hover:text-gold-300 transition-colors"
          >
            단어장으로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* 상단 헤더 */}
      <header className="sticky top-0 z-20 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <Link
            href="/vocab"
            className="text-zinc-100 hover:text-gold-400 transition-colors duration-200 flex items-center gap-2"
          >
            <span>←</span>
            <span className="font-medium">연습 모드</span>
          </Link>
          <div className="text-sm text-gray-400">
            {currentIndex + 1} / {vocabList.length}
          </div>
        </div>
      </header>

      {/* 중앙 콘텐츠 - 집중 학습 영역 */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 py-12">
        <div className="w-full max-w-4xl">
          <HeroWord
            word={currentWord.word}
            translation={currentWord.translation}
            example={currentWord.example}
          />
        </div>
      </main>

      {/* 하단 네비게이션 */}
      <footer className="sticky bottom-0 z-20 bg-gray-900/95 backdrop-blur-sm border-t border-gray-800 px-4 sm:px-6 py-6">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-4">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="px-6 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            ← 이전
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex === vocabList.length - 1}
            className="px-6 py-3 bg-gold-500 hover:bg-gold-600 text-white font-medium rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            다음 →
          </button>
        </div>
      </footer>
    </div>
  );
}
