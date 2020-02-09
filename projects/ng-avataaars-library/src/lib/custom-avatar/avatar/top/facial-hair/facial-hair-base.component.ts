/* tslint:disable:directive-class-suffix */

import { Input, Directive } from '@angular/core';
import { Option, FacialHairType, HairColor } from '../../../options';
import { hairColorTranslation } from '../../../colors/hair-color-translation';

@Directive()
export class CustomAvatarFacialHairBaseComponent implements Option<FacialHairType> {

  get option() { return FacialHairType.BeardLight; }

  @Input() facialHairColor: HairColor = HairColor.Black;

  get color() {
    return hairColorTranslation(this.facialHairColor);
  }
}
