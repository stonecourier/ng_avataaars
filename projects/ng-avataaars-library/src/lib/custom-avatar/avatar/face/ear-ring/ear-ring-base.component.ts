import { Input } from '@angular/core';
import { Option, EarringType, EarringColor } from '../../../options';
import { earringColorTranslation } from '../../../colors/ear-ring-color-translation';
import { urlfix } from '../../../helper/urlfix';

export class CustomAvatarEarringBaseComponent implements Option<EarringType> {

  get option() { return EarringType.Blank; }

  @Input() earringColor: EarringColor = EarringColor.Black;

  get color() {
    return earringColorTranslation(this.earringColor);
  }

  urlFix(path: string) {
    return urlfix(path);
  }
}

