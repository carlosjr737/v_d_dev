import React from 'react';

interface BrandMarkProps {
  className?: string;
}

export const BrandMark: React.FC<BrandMarkProps> = ({ className = '' }) => {
  return (
    <div
      className={`flex h-12 w-12 items-center justify-center rounded-pill bg-grad-heat text-lg font-display uppercase tracking-[0.4em] text-[var(--color-bg-900)] shadow-heat ${className}`.trim()}
      aria-label="Verdade ou Consequência"
    >
      VC
    </div>
  );
};
