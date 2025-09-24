import React from 'react';
import { Sparkles } from 'lucide-react';
import { IntensityLevel } from '../types/game';
import { BrandMark } from './BrandMark';
import { BoostBadge } from './BoostBadge';

interface HUDHeaderProps {
  intensity: IntensityLevel;
  playerName: string;
  boostPoints: number;
  turnLabel: string;
  className?: string;
}

const intensityLabels: Record<IntensityLevel, string> = {
  leve: 'Leve',
  medio: 'Médio',
  pesado: 'Pesado',
  extremo: 'Extremo',
};

const intensityBackground: Record<IntensityLevel, string> = {
  leve: 'rgba(255, 106, 166, 0.2)',
  medio: 'rgba(255, 46, 126, 0.2)',
  pesado: 'rgba(217, 76, 46, 0.2)',
  extremo: 'rgba(196, 0, 255, 0.2)',
};

export const HUDHeader: React.FC<HUDHeaderProps> = ({
  intensity,
  playerName,
  boostPoints,
  turnLabel,
  className = '',
}) => {
  return (
    <header
      className={`pointer-events-none fixed left-1/2 top-4 z-40 w-[calc(100%-1.5rem)] max-w-3xl -translate-x-1/2 ${className}`.trim()}
      aria-label="Painel do turno"
    >
      <div className="pointer-events-auto flex items-center justify-between gap-4 rounded-pill border border-white/10 bg-white/8 px-4 py-3 text-xs uppercase tracking-[0.35em] text-text backdrop-blur-xl">
        <div className="flex items-center gap-4">
          <BrandMark className="h-11 w-11 text-[var(--color-bg-900)]" />
          <div className="leading-none">
            <span className="block text-[0.6rem] text-text-subtle">Vez de</span>
            <span className="text-2xl font-display uppercase tracking-[0.2em] text-text">{playerName}</span>
          </div>
        </div>
        <div className="flex items-center gap-3 text-[0.55rem]">
          <span
            className="flex items-center gap-2 rounded-pill px-3 py-1 text-text"
            style={{ backgroundColor: intensityBackground[intensity] }}
          >
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            {intensityLabels[intensity]}
          </span>
          <div className="flex items-center gap-2">
            <BoostBadge className="text-[0.55rem]" />
            <span className="text-text-subtle tracking-[0.3em]">+{boostPoints}</span>
          </div>
          <span className="hidden rounded-pill border border-white/10 px-3 py-1 text-text-subtle sm:inline-flex">
            {turnLabel}
          </span>
        </div>
      </div>
    </header>
  );
};
