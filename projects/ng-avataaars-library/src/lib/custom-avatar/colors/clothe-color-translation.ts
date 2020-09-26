import { ClotheColor } from '../options/clothe-color';

export function clotheColorTranslation(clotheColor: ClotheColor): string {
  switch (clotheColor) {
    case ClotheColor.Black:
      return '#262E33';
    case ClotheColor.Blue01:
      return '#65C9FF';
    case ClotheColor.Blue02:
      return '#5199E4';
    case ClotheColor.Blue03:
      return '#25557C';
    case ClotheColor.Gray01:
      return '#E6E6E6';
    case ClotheColor.Gray02:
      return '#929598';
    case ClotheColor.Heather:
      return '#3C4F5C';
    case ClotheColor.PastelBlue:
      return '#B1E2FF';
    case ClotheColor.PastelGreen:
      return '#A7FFC4';
    case ClotheColor.PastelOrange:
      return '#FFDEB5';
    case ClotheColor.PastelRed:
      return '#FFAFB9';
    case ClotheColor.PastelYellow:
      return '#FFFFB1';
    case ClotheColor.Pink:
      return '#FF488E';
    case ClotheColor.Red:
      return '#FF5C5C';
    case ClotheColor.White:
      return '#f8f8ff';
  }

  return '';
}
