/**
 * 한국어 일반 수업 레벨 선택 섹션
 * 초급, 중급, 고급 카드 3개를 표시합니다.
 */
import React from 'react';
import CardButton from '@/components/ui/CardButton';

export default function GeneralLevels() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 w-full">
      <CardButton
        icon="🌱"
        title="초급"
        href="/general/beginner"
      />
      <CardButton
        icon="🌿"
        title="중급"
        href="/general/intermediate"
      />
      <CardButton
        icon="🌳"
        title="고급"
        href="/general/advanced"
      />
    </div>
  );
}
