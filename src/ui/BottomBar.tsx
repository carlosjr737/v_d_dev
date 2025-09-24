import React from 'react';

interface BottomBarProps {
  onCreate: () => void;
  onDeck: () => void;
  onReset: () => void;
  isCreateDisabled?: boolean;
  className?: string;
}

const actions = [
  { key: 'create', label: 'Criar', icon: '✚' },
  { key: 'deck', label: 'Baralho', icon: '🃏' },
  { key: 'reset', label: 'Reset', icon: '⟲' },
] as const;

export const BottomBar: React.FC<BottomBarProps> = ({
  onCreate,
  onDeck,
  onReset,
  isCreateDisabled = false,
  className = '',
}) => {
  const handleAction = (key: (typeof actions)[number]['key']) => {
    switch (key) {
      case 'create':
        if (!isCreateDisabled) {
          onCreate();
        }
        break;
      case 'deck':
        onDeck();
        break;
      case 'reset':
        onReset();
        break;
      default:
        break;
    }
  };

  return (
    <nav
      className={`pointer-events-none fixed inset-x-0 bottom-0 z-40 flex justify-center ${className}`.trim()}
      aria-label="Ações do jogo"
    >
      <div className="pointer-events-auto mb-4 w-[calc(100%-1.5rem)] max-w-lg rounded-pill border border-white/10 bg-bg-900/90 px-4 py-3 shadow-heat backdrop-blur-xl">
        <div className="grid grid-cols-3 gap-3 text-center text-xs font-semibold uppercase tracking-[0.35em] text-text">
          {actions.map((action) => {
            const isDisabled = action.key === 'create' && isCreateDisabled;

            return (
              <button
                key={action.key}
                type="button"
                onClick={() => handleAction(action.key)}
                disabled={isDisabled}
                className={`interactive-press flex h-16 flex-col items-center justify-center gap-1 rounded-pill border border-white/10 bg-white/5 text-text transition disabled:cursor-not-allowed disabled:opacity-40`}
              >
                <span className="text-xl" aria-hidden="true">
                  {action.icon}
                </span>
                {action.label}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
