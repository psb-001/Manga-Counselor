// Current year for dynamic year options
const CURRENT_YEAR = new Date().getFullYear();

export const YEARS = Array.from({ length: 30 }, (_, i) => ({
  id: `year-${CURRENT_YEAR - i}`,
  value: (CURRENT_YEAR - i).toString(),
  label: (CURRENT_YEAR - i).toString()
}));

export const RATINGS = [
  { id: 'rating-g', value: 'g', label: 'All Ages' },
  { id: 'rating-pg', value: 'pg', label: 'PG - Children' },
  { id: 'rating-pg13', value: 'pg13', label: 'PG-13 - Teens 13 or older' },
  { id: 'rating-r17', value: 'r17', label: 'R - 17+ (violence & profanity)' }
];