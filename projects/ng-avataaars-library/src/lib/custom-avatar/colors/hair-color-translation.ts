import { HairColor } from '../options/hair-color';

export function hairColorTranslation(hairColor: HairColor): string {
  switch (hairColor) {
    case HairColor.Auburn:
      return '#A55728';
    case HairColor.Black:
      return '#2C1B18';
    case HairColor.Blonde:
      return '#B58143';
    case HairColor.BlondeGolden:
      return '#D6B370';
    case HairColor.Brown:
      return '#724133';
    case HairColor.BrownDark:
      return '#4A312C';
    case HairColor.Platinum:
      return '#ECDCBF';
    case HairColor.Red:
      return '#C93305';
    case HairColor.SilverGray:
      return '#E8E1E1';
    case HairColor.PastelPink:
      return '#F59797';
  }

  return '';
}
