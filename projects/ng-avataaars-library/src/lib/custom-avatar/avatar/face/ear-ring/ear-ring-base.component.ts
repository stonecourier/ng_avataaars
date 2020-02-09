/* tslint:disable:directive-class-suffix */

import { Directive, Input } from '@angular/core';
import { earringColorTranslation } from '../../../colors/ear-ring-color-translation';
import { urlfix } from '../../../helper/urlfix';
import { EarringColor, EarringType, Option } from '../../../options';

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
