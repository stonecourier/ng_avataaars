/* tslint:disable:directive-class-suffix */

import { Directive, Input } from '@angular/core';
import { hairColorTranslation } from '../../../colors/hair-color-translation';
import { FacialHairType, HairColor, Option } from '../../../options';

@Directive()
export class CustomAvatarFacialHairBaseComponent implements Option<FacialHairType> {

  get option() { return FacialHairType.BeardLight; }

  @Input() facialHairColor: HairColor = HairColor.Black;

  get color() {
    return hairColorTranslation(this.facialHairColor);
  }
}
