import React from 'react';
import { Card, IntensityLevel } from '../types/game';
import { BoostBadge } from './BoostBadge';
import { Heart, Zap, Check, X } from 'lucide-react';

interface CardRevealProps {
  card: Card;
  onFulfill: () => void;
  onPass: () => void;
  className?: string;
}

const levelBarColor: Record<IntensityLevel, string> = {
  leve: 'bg-level-leve',
  medio: 'bg-level-medio',
  pesado: 'bg-level-pesado',
  extremo: 'bg-level-extremo',
};

export const CardReveal: React.FC<CardRevealProps> = ({ card, onFulfill, onPass, className = '' }) => {
  return (
    <section
      className={`relative w-full max-w-xl rounded-card border border-white/10 bg-bg-800/70 p-6 shadow-heat backdrop-blur-xl ${className}`.trim()}
      aria-live="polite"
    >
      <div className={`absolute inset-x-4 top-3 h-1 rounded-full ${levelBarColor[card.level]}`} aria-hidden="true" />
      <div
        className={`relative mt-6 flex flex-col gap-6 rounded-card border border-white/10 bg-bg-900/70 p-6 ${
          card.isBoosted ? 'animate-boost-flash' : ''
        }`}
      >
        <header className="flex items-center justify-between text-xs uppercase tracking-[0.4em] text-text-subtle">
          <span className="inline-flex items-center gap-2 rounded-pill bg-white/5 px-3 py-1 text-text">
            {card.type === 'truth' ? (
              <Heart className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Zap className="h-4 w-4" aria-hidden="true" />
            )}
            {card.type === 'truth' ? 'Verdade' : 'Desafio'}
          </span>
          <span className="rounded-pill border border-white/10 px-3 py-1">Carta</span>
        </header>
        <p className="min-h-[6rem] text-lg font-medium leading-relaxed text-text animate-card-reveal">
          {card.text}
        </p>
        <div className="flex flex-wrap items-center gap-2 text-[0.65rem] uppercase tracking-[0.35em] text-text-subtle">
          {card.isCustom && <span className="rounded-pill border border-dashed border-white/20 px-3 py-1">Custom</span>}
          {card.isBoosted && <BoostBadge />}
        </div>
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <button
          type="button"
          onClick={onFulfill}
          className="interactive-press flex h-14 items-center justify-center gap-2 rounded-pill bg-grad-heat px-6 text-sm font-semibold uppercase tracking-[0.25em] text-text shadow-heat"
        >
          <Check className="h-5 w-5" aria-hidden="true" />
          Cumprir
        </button>
        <button
          type="button"
          onClick={onPass}
          className="interactive-press flex h-14 items-center justify-center gap-2 rounded-pill border border-white/15 px-6 text-sm font-semibold uppercase tracking-[0.25em] text-text"
        >
          <X className="h-5 w-5" aria-hidden="true" />
          Passar
        </button>
      </div>
    </section>
  );
};
