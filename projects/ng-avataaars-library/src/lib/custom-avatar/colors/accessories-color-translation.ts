import { AccessoriesColor } from '../options/accessories-color';

export function accessoriesColorTranslation(accessoriesColor: AccessoriesColor) {
  switch (accessoriesColor) {
    case AccessoriesColor.Black:
      return '#262E33';
    case AccessoriesColor.Blue01:
      return '#65C9FF';
    case AccessoriesColor.Blue02:
      return '#5199E4';
    case AccessoriesColor.Blue03:
      return '#25557C';
    case AccessoriesColor.Blue03:
      return '#25557C';
    case AccessoriesColor.Gray01:
      return '#E6E6E6';
    case AccessoriesColor.Gray02:
      return '#929598';
    case AccessoriesColor.Heather:
      return '#3C4F5C';
    case AccessoriesColor.PastelBlue:
      return '#B1E2FF';
    case AccessoriesColor.PastelGreen:
      return '#A7FFC4';
    case AccessoriesColor.PastelOrange:
      return '#FFDEB5';
    case AccessoriesColor.PastelRed:
      return '#FFAFB9';
    case AccessoriesColor.PastelYellow:
      return '#FFFFB1';
    case AccessoriesColor.Pink:
      return '#FF488E';
    case AccessoriesColor.Red:
      return '#FF5C5C';
    case AccessoriesColor.White:
      return '#FFFFFF';
  }

  return '';
}
