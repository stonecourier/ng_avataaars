import { Input } from '@angular/core';
import { Option, FacialHairType, HairColor } from '../../../options';
import { hairColorTranslation } from '../../../colors/hair-color-translation';

export class CustomAvatarFacialHairBaseComponent implements Option<FacialHairType> {

  get option() { return FacialHairType.BeardLight; }

  @Input() facialHairColor: HairColor = HairColor.Black;

  get color() {
    return hairColorTranslation(this.facialHairColor);
  }
}
