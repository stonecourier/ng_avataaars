import { SkinColor } from '../options/skin-color';

export function skinColorTranslation(skinColor: SkinColor): string {
  switch (skinColor) {
    case SkinColor.Tanned:
      return '#FD9841';
    case SkinColor.Yellow:
      return '#F8D25C';
    case SkinColor.Pale:
      return '#FFDBB4';
    case SkinColor.Light:
      return '#EDB98A';
    case SkinColor.Brown:
      return '#D08B5B';
    case SkinColor.DarkBrown:
      return '#AE5D29';
    case SkinColor.Black:
      return '#614335';
  }

  return '';
}
