/* eslint-disable @angular-eslint/directive-class-suffix */

import { Directive, Input } from '@angular/core';
import { earringColorTranslation } from '../../../colors/ear-ring-color-translation';
import { urlfix } from '../../../helper/urlfix';
import { EarringColor, EarringType, Option } from '../../../options';

@Directive()
export class CustomAvatarEarringBaseComponent implements Option<EarringType> {

  get option(): EarringType { return EarringType.Blank; }

  @Input() earringColor: EarringColor = EarringColor.Black;

  get color(): string {
    return earringColorTranslation(this.earringColor);
  }

  urlFix(path: string): string {
    return urlfix(path);
  }
}
