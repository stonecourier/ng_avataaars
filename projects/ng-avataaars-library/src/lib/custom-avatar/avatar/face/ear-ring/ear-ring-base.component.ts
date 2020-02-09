/* tslint:disable:directive-class-suffix */

import { Input, Directive } from '@angular/core';
import { Option, EarringType, EarringColor } from '../../../options';
import { earringColorTranslation } from '../../../colors/ear-ring-color-translation';
import { urlfix } from '../../../helper/urlfix';

@Directive()
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

