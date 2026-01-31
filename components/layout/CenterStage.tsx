/**
 * 화면 중앙 정렬 레이아웃 컴포넌트
 * 중앙 컨테이너를 제공합니다. 배경은 전역 레이아웃에서 처리됩니다.
 */
import React from 'react';

interface CenterStageProps {
  children: React.ReactNode;
}

export default function CenterStage({ children }: CenterStageProps) {
  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 sm:p-6 z-10">
      <div className="w-full flex flex-col items-center justify-center max-w-6xl">
        {children}
      </div>
    </div>
  );
}
