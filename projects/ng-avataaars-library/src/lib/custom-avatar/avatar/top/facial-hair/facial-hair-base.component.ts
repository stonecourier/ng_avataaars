import { Input } from '@angular/core';
import { Option, FacialHairType, HairColor } from '../../../options';
import { hairColorTranslation } from '../../../colors/hair-color-translation';

export class CustomAvatarFacialHairBaseComponent implements Option<FacialHairType> {

  private _hairColor: HairColor;
  private _color;

  option = FacialHairType.BeardLight;

  @Input()
  set facialHairColor(value: HairColor) {
    if (this._hairColor !== value) {
      this._hairColor = value;
      this._color = hairColorTranslation(value);
    }
  }

  get facialHairColor() {
    return this._hairColor;
  }

  get color() {
    return this._color;
  }
}
