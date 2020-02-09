import { EarringColor } from '../options/ear-ring-color';

export function earringColorTranslation(earringColor: EarringColor) {
  switch (earringColor) {
    case EarringColor.Black:
      return '#262E33';
    case EarringColor.Blue01:
      return '#65C9FF';
    case EarringColor.Blue02:
      return '#5199E4';
    case EarringColor.Blue03:
      return '#25557C';
    case EarringColor.Gray01:
      return '#E6E6E6';
    case EarringColor.Gray02:
      return '#929598';
    case EarringColor.Heather:
      return '#3C4F5C';
    case EarringColor.PastelBlue:
      return '#B1E2FF';
    case EarringColor.PastelGreen:
      return '#A7FFC4';
    case EarringColor.PastelOrange:
      return '#FFDEB5';
    case EarringColor.PastelRed:
      return '#FFAFB9';
    case EarringColor.PastelYellow:
      return '#FFFFB1';
    case EarringColor.Pink:
      return '#FF488E';
    case EarringColor.Red:
      return '#FF5C5C';
    case EarringColor.White:
      return '#FFFFFF';
  }

  return '';
}
