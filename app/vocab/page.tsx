/**
 * 나만의 단어장 페이지 (/vocab)
 * 사용자가 저장한 단어 목록을 표시합니다.
 * 3단 구조: 상단 헤더, 중앙 콘텐츠, 하단 액션 바
 */
'use client';

import { useState } from 'react';
import Link from 'next/link';

interface VocabItem {
  id: string;
  word: string;
  translation: string;
  example: string;
  synonyms: string[];
  antonyms: string[];
}

export default function VocabPage() {
  // 이 페이지에서 호출할 API: getVocabList()
  // TODO: 실제 API 호출로 대체
  const [vocabList] = useState<VocabItem[]>([
    {
      id: '1',
      word: '학습',
      translation: 'learning, study',
      example: '한국어 학습은 재미있습니다.',
      synonyms: ['공부', '연습'],
      antonyms: ['게으름'],
    },
    {
      id: '2',
      word: '이해',
      translation: 'understanding, comprehension',
      example: '이해가 잘 됩니다.',
      synonyms: ['파악', '인지'],
      antonyms: ['오해', '착각'],
    },
  ]);


  return (
    <div className="flex flex-col h-screen max-w-6xl mx-auto">
      {/* 1) 상단 고정 헤더 */}
      <header className="sticky top-0 z-20 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-zinc-100 hover:text-gold-400 transition-colors duration-200 flex items-center gap-2"
          >
            <span>←</span>
            <span className="font-medium">나만의 단어장</span>
          </Link>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors duration-200">
              🔍 검색
            </button>
            <button className="px-4 py-2 text-sm text-white bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-200">
              + 단어 추가
            </button>
          </div>
        </div>
      </header>

      {/* 2) 중앙 콘텐츠 영역 */}
      <main className="flex-1 overflow-y-auto px-4 sm:px-6 py-4">
        <div className="w-full">
          {/* 테이블 헤더 */}
          <div className="hidden md:flex gap-2 pb-2 border-b border-gray-800 text-sm text-gray-400 mb-2">
            <div className="w-[180px]">단어</div>
            <div className="flex-1 min-w-0">번역</div>
            <div className="w-[200px]">유의어</div>
            <div className="w-[200px]">반의어</div>
          </div>

          {/* 단어 리스트 */}
          <div className="space-y-1">
            {vocabList.map((item) => (
              <div
                key={item.id}
                className="hidden md:flex gap-3 py-3 px-3 bg-gray-800/30 hover:bg-gray-800/40 rounded transition-colors duration-200 border border-gray-700/30 items-start"
              >
                {/* 단어 */}
                <div className="w-[180px] flex-shrink-0">
                  <span className="font-bold text-white text-xl sm:text-2xl">{item.word}</span>
                </div>
                {/* 번역 */}
                <div className="flex-1 min-w-0">
                  <div className="text-gray-300 text-sm font-medium">{item.translation}</div>
                </div>
                {/* 유의어 */}
                <div className="w-[200px] flex-shrink-0 flex flex-wrap gap-1">
                  {item.synonyms.slice(0, 2).map((syn, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs sm:text-sm bg-gray-700/50 text-gray-300 rounded-md whitespace-nowrap"
                    >
                      {syn}
                    </span>
                  ))}
                  {item.synonyms.length > 2 && (
                    <span className="px-2 py-1 text-xs text-gray-500 bg-gray-700/30 rounded-md">
                      +{item.synonyms.length - 2}
                    </span>
                  )}
                </div>
                {/* 반의어 */}
                <div className="w-[200px] flex-shrink-0 flex flex-wrap gap-1">
                  {item.antonyms.slice(0, 2).map((ant, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs sm:text-sm bg-gray-700/50 text-gray-300 rounded-md whitespace-nowrap"
                    >
                      {ant}
                    </span>
                  ))}
                  {item.antonyms.length > 2 && (
                    <span className="px-2 py-1 text-xs text-gray-500 bg-gray-700/30 rounded-md">
                      +{item.antonyms.length - 2}
                    </span>
                  )}
                </div>
              </div>
            ))}

            {/* 모바일 뷰 */}
            {vocabList.map((item) => (
              <div
                key={item.id}
                className="md:hidden flex flex-col gap-2 py-3 px-3 bg-gray-800/30 hover:bg-gray-800/40 rounded transition-colors duration-200 border border-gray-700/30"
              >
                <span className="font-bold text-white text-xl">{item.word}</span>
                <div className="text-gray-300 text-sm font-medium">{item.translation}</div>
                <div className="flex flex-wrap gap-1">
                  {item.synonyms.slice(0, 2).map((syn, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs bg-gray-700/50 text-gray-300 rounded-md"
                    >
                      {syn}
                    </span>
                  ))}
                  {item.synonyms.length > 2 && (
                    <span className="px-2 py-1 text-xs text-gray-500 bg-gray-700/30 rounded-md">
                      +{item.synonyms.length - 2}
                    </span>
                  )}
                  {item.antonyms.slice(0, 2).map((ant, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs bg-gray-700/50 text-gray-300 rounded-md"
                    >
                      {ant}
                    </span>
                  ))}
                  {item.antonyms.length > 2 && (
                    <span className="px-2 py-1 text-xs text-gray-500 bg-gray-700/30 rounded-md">
                      +{item.antonyms.length - 2}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {vocabList.length === 0 && (
            <div className="text-center py-12 text-gray-400">
              <p>저장된 단어가 없습니다.</p>
              <p className="text-sm mt-2">단어를 추가하여 학습을 시작하세요.</p>
            </div>
          )}
        </div>
      </main>

      {/* 3) 하단 고정 액션 바 */}
      <footer className="sticky bottom-0 z-20 bg-gray-900/95 backdrop-blur-sm border-t border-gray-800 px-4 sm:px-6 py-4">
        <div className="flex justify-center">
          <Link
            href="/vocab/practice"
            className="w-full max-w-md px-6 py-4 bg-gold-500 hover:bg-gold-600 text-white font-medium rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 shadow-lg"
          >
            <span>🎯</span>
            <span>연습하기</span>
          </Link>
        </div>
      </footer>
    </div>
  );
}
