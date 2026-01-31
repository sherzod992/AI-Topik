/**
 * TOPIK 등급 선택 섹션
 * TOPIK 1과 TOPIK 2 카드 2개를 표시합니다.
 */
import React from 'react';
import CardButton from '@/components/ui/CardButton';

export default function TopikSelect() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 w-full">
      <CardButton
        icon="1️⃣"
        title="TOPIK 1"
        href="/topik/1"
      />
      <CardButton
        icon="2️⃣"
        title="TOPIK 2"
        href="/topik/2"
      />
    </div>
  );
}
