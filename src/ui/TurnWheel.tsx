import React from 'react';
import { Player } from '../types/game';

interface TurnWheelProps {
  players: Player[];
  currentPlayerId: string | null;
  highlightedName?: string | null;
  finalDrawName?: string | null;
  className?: string;
}

const getInitial = (name: string) => name.charAt(0).toUpperCase();

export const TurnWheel: React.FC<TurnWheelProps> = ({
  players,
  currentPlayerId,
  highlightedName,
  finalDrawName,
  className = '',
}) => {
  const activeName = currentPlayerId
    ? players.find((player) => player.id === currentPlayerId)?.name ?? null
    : finalDrawName ?? highlightedName ?? null;

  return (
    <div
      className={`w-full overflow-hidden ${className}`.trim()}
      aria-label="Fila de jogadores"
    >
      <div className="flex w-full gap-3 overflow-x-auto px-2 py-3" role="list">
        {players.map((player) => {
          const isActive = currentPlayerId
            ? player.id === currentPlayerId
            : player.name === activeName;

          return (
            <div
              key={player.id}
              role="listitem"
              aria-current={isActive ? 'true' : undefined}
              className={`flex min-w-[5.25rem] flex-col items-center gap-2 rounded-card border px-3 py-2 text-center transition ${
                isActive
                  ? 'border-accent-500 bg-accent-500/20 text-text'
                  : 'border-white/5 bg-white/5 text-text-subtle'
              }`}
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-full text-base font-semibold uppercase ${
                  isActive ? 'bg-grad-heat text-[var(--color-bg-900)] shadow-heat' : 'bg-white/10 text-text'
                }`}
              >
                {getInitial(player.name)}
              </div>
              <span className="text-[0.7rem] font-semibold uppercase tracking-[0.3em]">
                {player.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
