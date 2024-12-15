import { FilterOption } from '../types/filters';

export const RATINGS: FilterOption[] = [
  { id: 'rating-g', value: 'g', label: 'All Ages' },
  { id: 'rating-pg', value: 'pg', label: 'PG - Children' },
  { id: 'rating-pg13', value: 'pg13', label: 'PG-13 - Teens 13+' },
  { id: 'rating-r17', value: 'r17', label: 'R - 17+ (violence & profanity)' }
];