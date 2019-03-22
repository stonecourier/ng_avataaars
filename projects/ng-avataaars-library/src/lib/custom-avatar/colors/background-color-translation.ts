import { BackgroundColor } from '../options/background-color';

export function backgroundColorTranslation(backgroundColor: BackgroundColor) {
  switch (backgroundColor) {
    case BackgroundColor.ColorA:
      return '#65C9FF';
    case BackgroundColor.ColorB:
      return '#8FD8FF';
    case BackgroundColor.ColorC:
      return '#EDE38C';
    case BackgroundColor.ColorD:
      return '#F59797';
    case BackgroundColor.ColorE:
      return '#D24B88';
    case BackgroundColor.ColorF:
      return '#954BD2';
    case BackgroundColor.ColorG:
      return '#524BD2';
    case BackgroundColor.ColorH:
      return '#F44848';
    case BackgroundColor.ColorI:
      return '#4BD2A2';
    case BackgroundColor.ColorJ:
      return '#4B88D2';
    case BackgroundColor.ColorK:
      return '#EAA95A';
  }

  return '';
}
