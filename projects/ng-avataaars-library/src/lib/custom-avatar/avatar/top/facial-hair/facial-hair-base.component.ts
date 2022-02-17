/* eslint-disable @angular-eslint/directive-class-suffix */

import { Directive, Input } from '@angular/core';
import { hairColorTranslation } from '../../../colors/hair-color-translation';
import { FacialHairType, HairColor, Option } from '../../../options';

@Directive()
export class CustomAvatarFacialHairBaseComponent implements Option<FacialHairType> {

  get option(): FacialHairType { return FacialHairType.BeardLight; }

  @Input() facialHairColor: HairColor = HairColor.Black;

  get color(): string {
    return hairColorTranslation(this.facialHairColor);
  }
}
