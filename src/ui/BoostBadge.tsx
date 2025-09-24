import React from 'react';

interface BoostBadgeProps {
  className?: string;
}

export const BoostBadge: React.FC<BoostBadgeProps> = ({ className = '' }) => {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-pill bg-accent-500 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.35em] text-text shadow-heat ${className}`.trim()}
    >
      BOOST
    </span>
  );
};
