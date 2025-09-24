import React from 'react';
import { MessageCircle, Zap } from 'lucide-react';

interface ChoiceButtonsProps {
  onTruth: () => void;
  onDare: () => void;
  disabled?: boolean;
  className?: string;
}

export const ChoiceButtons: React.FC<ChoiceButtonsProps> = ({
  onTruth,
  onDare,
  disabled = false,
  className = '',
}) => {
  return (
    <div className={`flex w-full flex-col items-center gap-4 sm:flex-row ${className}`.trim()}>
      <button
        type="button"
        onClick={onTruth}
        disabled={disabled}
        className="interactive-press flex h-20 w-full items-center justify-center gap-3 rounded-pill bg-grad-heat px-6 text-lg font-semibold uppercase tracking-[0.25em] text-[var(--color-bg-900)] shadow-heat transition disabled:cursor-not-allowed disabled:opacity-40"
        aria-label="Puxar carta de verdade"
      >
        <MessageCircle className="h-6 w-6" aria-hidden="true" />
        Verdade
      </button>
      <button
        type="button"
        onClick={onDare}
        disabled={disabled}
        className="interactive-press flex h-20 w-full items-center justify-center gap-3 rounded-pill bg-[var(--color-secondary-500)] px-6 text-lg font-semibold uppercase tracking-[0.25em] text-[var(--color-bg-900)] shadow-heat transition disabled:cursor-not-allowed disabled:opacity-40"
        aria-label="Puxar carta de desafio"
      >
        <Zap className="h-6 w-6" aria-hidden="true" />
        Desafio
      </button>
    </div>
  );
};
