import { Input } from '@angular/core';
import {
  Option, TopType, FacialHairType, HairColor, HatColor,
  AccessoriesType, AccessoriesColor
} from '../../options';
import { hatColorTranslation } from '../../colors/hat-color-translation';
import { hairColorTranslation } from '../../colors/hair-color-translation';
import { urlfix } from '../../helper/urlfix';

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
