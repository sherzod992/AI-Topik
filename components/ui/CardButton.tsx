/**
 * 프리미엄 카드 버튼 컴포넌트
 * hover 시 glow와 scale 효과를 제공합니다.
 */
import React from 'react';
import Link from 'next/link';

interface CardButtonProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  href?: string;
  size?: 'main' | 'sub';
  className?: string;
}

export default function CardButton({ 
  title, 
  subtitle, 
  icon, 
  onClick, 
  href, 
  size = 'main',
  className = ''
}: CardButtonProps) {
  const baseClasses = `
    relative
    w-full
    px-6 py-5
    sm:px-8 sm:py-6
    bg-gray-800/60
    backdrop-blur-md
    border border-gray-700/60
    rounded-2xl
    text-white
    font-medium
    text-base
    sm:text-lg
    transition-all
    duration-300
    ease-out
    hover:scale-[1.03]
    hover:border-gold-500/70
    hover:shadow-[0_0_40px_rgba(245,158,11,0.4)]
    hover:bg-gray-800/70
    active:scale-[0.98]
    flex flex-col items-center justify-center gap-3
    group
  `;

  const subClasses = `
    relative
    w-full max-w-xs
    px-5 py-4
    sm:px-6 sm:py-4
    bg-gray-800/50
    backdrop-blur-sm
    border border-gray-700/40
    rounded-xl
    text-white
    font-medium
    text-sm
    sm:text-base
    transition-all
    duration-300
    ease-out
    hover:scale-[1.02]
    hover:border-gold-500/50
    hover:shadow-[0_0_20px_rgba(245,158,11,0.2)]
    hover:bg-gray-800/60
    active:scale-[0.99]
    flex flex-col items-center justify-center gap-2
    group
  `;

  const baseClassName = size === 'sub' ? subClasses : baseClasses;
  const finalClassName = `${baseClassName} ${className}`.trim();

  const content = (
    <>
      {icon && (
        <div className={`${size === 'sub' ? 'text-2xl sm:text-3xl' : 'text-3xl sm:text-4xl'} text-gold-400 transition-transform duration-300 group-hover:scale-110 ${size === 'sub' ? 'group-hover:text-gold-400' : ''}`}>
          {icon}
        </div>
      )}
      <div className="flex flex-col items-center gap-1">
        <span className="transition-colors duration-300 group-hover:text-gold-300">{title}</span>
        {subtitle && (
          <span className="text-xs sm:text-sm text-gray-400">{subtitle}</span>
        )}
      </div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={finalClassName}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={finalClassName}>
      {content}
    </button>
  );
}
