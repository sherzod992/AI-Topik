/**
 * HeroWord 컴포넌트
 * 집중 학습 모드에서 현재 단어를 화면 중앙에 매우 크게 표시합니다.
 */
import React from 'react';

interface HeroWordProps {
  word: string;
  translation?: string;
  example?: string;
  className?: string;
}

export default function HeroWord({ word, translation, example, className = '' }: HeroWordProps) {
  return (
    <div className={`flex flex-col items-center justify-center gap-8 ${className}`}>
      {/* 메인 단어 - 히어로 텍스트 */}
      <div className="text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-wide leading-relaxed">
          {word}
        </h1>
      </div>

      {/* 보조 정보 */}
      {(translation || example) && (
        <div className="flex flex-col items-center gap-4 w-full max-w-2xl">
          {translation && (
            <p className="text-lg sm:text-xl text-gray-300 text-center">
              {translation}
            </p>
          )}
          {example && (
            <p className="text-base sm:text-lg text-gray-400 text-center italic">
              "{example}"
            </p>
          )}
        </div>
      )}
    </div>
  );
}
