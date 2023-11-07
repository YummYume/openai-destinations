export type Season = 'Printemps' | 'Été' | 'Automne' | 'Hiver';

export const getCurrentSeason: () => Season = () => {
  const month = new Date().getMonth();

  if (month >= 2 && month <= 4) {
    return 'Printemps';
  }

  if (month >= 5 && month <= 7) {
    return 'Été';
  }

  if (month >= 8 && month <= 10) {
    return 'Automne';
  }

  return 'Hiver';
};
