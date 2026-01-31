/**
 * TOPIK 스킬 선택 섹션
 * 듣기, 읽기, 쓰기 카드를 표시합니다. (TOPIK 1은 2개, TOPIK 2는 3개)
 */
import React from 'react';
import CardButton from '@/components/ui/CardButton';

interface SkillSelectProps {
  grade: 1 | 2;
}

export default function SkillSelect({ grade }: SkillSelectProps) {
  const skills = [
    { icon: '👂', title: '듣기', skill: 'listening' },
    { icon: '📖', title: '읽기', skill: 'reading' },
  ];

  if (grade === 2) {
    skills.push({ icon: '✍️', title: '쓰기', skill: 'writing' });
  }

  return (
    <div className="flex flex-col items-center justify-center gap-6 w-full">
      {skills.map((skill) => (
        <CardButton
          key={skill.skill}
          icon={skill.icon}
          title={skill.title}
          href={`/topik/${grade}/${skill.skill}`}
        />
      ))}
    </div>
  );
}
