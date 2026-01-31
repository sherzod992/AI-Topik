/**
 * 홈 화면 메인 액션 섹션
 * 한국어 일반 수업, 한국어 토픽 카드 2개와 나만의 단어장 서브 카드를 표시합니다.
 */
import React from 'react';
import CardButton from '@/components/ui/CardButton';

export default function HomeActions() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 w-full">
      {/* 1행: 메인 액션 카드 2개 (가로 배치) */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
        <CardButton
          icon="📚"
          title="한국어 일반 수업"
          href="/general"
          size="main"
          className="flex-1 max-w-sm"
        />
        <CardButton
          icon="🎯"
          title="한국어 토픽"
          href="/topik"
          size="main"
          className="flex-1 max-w-sm"
        />
      </div>
      {/* 2행: 서브 카드 (나만의 단어장) */}
      <div className="mt-8 flex items-center justify-center w-full">
        <CardButton
          icon="📘"
          title="나만의 단어장"
          href="/vocab"
          size="sub"
        />
      </div>
    </div>
  );
}
