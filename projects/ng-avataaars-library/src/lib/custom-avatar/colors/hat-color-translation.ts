import { HatColor } from '../options/hat-color';

export function hatColorTranslation(hatColor: HatColor) {
  switch (hatColor) {
    case HatColor.Black:
      return '#262E33';
    case HatColor.Blue01:
      return '#65C9FF';
    case HatColor.Blue02:
      return '#5199E4';
    case HatColor.Blue03:
      return '#25557C';
    case HatColor.Gray01:
      return '#E6E6E6';
    case HatColor.Gray02:
      return '#929598';
    case HatColor.Heather:
      return '#3C4F5C';
    case HatColor.PastelBlue:
      return '#B1E2FF';
    case HatColor.PastelGreen:
      return '#A7FFC4';
    case HatColor.PastelOrange:
      return '#FFDEB5';
    case HatColor.PastelRed:
      return '#FFAFB9';
    case HatColor.PastelYellow:
      return '#FFFFB1';
    case HatColor.Pink:
      return '#FF488E';
    case HatColor.Red:
      return '#FF5C5C';
    case HatColor.White:
      return '#FFFFFF';
  }

  return '';
}
