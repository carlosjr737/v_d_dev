import { useMemo } from 'react';

type GameTheme = 'classic' | 'game';

export function useGameTheme(): GameTheme {
  const theme = useMemo<GameTheme>(() => {
    if (typeof window === 'undefined') {
      return 'classic';
    }

    const params = new URLSearchParams(window.location.search);
    return params.get('theme') === 'game' ? 'game' : 'classic';
  }, []);

  return theme;
}
