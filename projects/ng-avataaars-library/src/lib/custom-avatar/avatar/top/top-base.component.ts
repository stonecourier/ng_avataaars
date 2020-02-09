/* tslint:disable:directive-class-suffix */

import { Directive, Input } from '@angular/core';
import { hairColorTranslation } from '../../colors/hair-color-translation';
import { hatColorTranslation } from '../../colors/hat-color-translation';
import { urlfix } from '../../helper/urlfix';
import {
  AccessoriesColor, AccessoriesType, FacialHairType, HairColor, HatColor,
  Option, TopType
} from '../../options';

@Directive()
export class CustomAvatarTopBaseComponent implements Option<TopType> {

  get option() { return TopType.Eyepatch; }

  @Input() hairColor: HairColor = HairColor.Black;

  get color() {
    return hairColorTranslation(this.hairColor);
  }

  @Input() hatColor: HatColor = HatColor.Black;

  get color2() {
    return hatColorTranslation(this.hatColor);
  }

  @Input() facialHairType: FacialHairType = FacialHairType.Blank;
  @Input() facialHairColor: HairColor = HairColor.Black;
  @Input() accessoriesType: AccessoriesType = AccessoriesType.Blank;
  @Input() accessoriesColor: AccessoriesColor = AccessoriesColor.Black;

  urlFix(path: string) {
    return urlfix(path);
  }
}
