import { Input } from '@angular/core';
import {
  Option, TopType, FacialHairType, HairColor, HatColor,
  AccessoriesType, AccessoriesColor
} from '../../options';
import { hatColorTranslation } from '../../colors/hat-color-translation';
import { hairColorTranslation } from '../../colors/hair-color-translation';
import { urlfix } from '../../helper/urlfix';

export class CustomAvatarTopBaseComponent implements Option<TopType> {

  private _hairColor: HairColor;
  private _color = '';
  private _hatColor: HatColor;
  private _color2 = '';

  option = TopType.Eyepatch;

  @Input()
  set hairColor(value: HairColor) {
    if (this._hairColor !== value) {
      this._hairColor = value;
      this._color = hairColorTranslation(value);
    }
  }

  get hairColor() {
    return this._hairColor;
  }

  get color() {
    return this._color;
  }

  @Input()
  set hatColor(value: HatColor) {
    if (this._hatColor !== value) {
      this._hatColor = value;
      this._color2 = hatColorTranslation(value);
    }
  }

  get hatColor() {
    return this._hatColor;
  }

  get color2() {
    return this._color2;
  }

  @Input()
  facialHairType: FacialHairType;

  @Input()
  facialHairColor: HairColor;

  @Input()
  accessoriesType: AccessoriesType;

  @Input()
  accessoriesColor: AccessoriesColor;

  urlFix(path: string) {
    return urlfix(path);
  }
}
