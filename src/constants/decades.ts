import { FilterOption } from '../types/filters';

// Generate decades from 1950s to current decade
const getCurrentDecade = () => {
  const currentYear = new Date().getFullYear();
  return Math.floor(currentYear / 10) * 10;
};

const generateDecades = (): FilterOption[] => {
  const currentDecade = getCurrentDecade();
  const decades: FilterOption[] = [];
  
  for (let decade = currentDecade; decade >= 1950; decade -= 10) {
    decades.push({
      id: `decade-${decade}`,
      value: decade.toString(),
      label: `${decade}s`,
    });
  }
  
  return decades;
};

export const DECADES = generateDecades();