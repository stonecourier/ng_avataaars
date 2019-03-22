/* tslint:disable:component-selector */

import { Component, Input } from '@angular/core';
import { Option, AwardType, ClotheColor, SkinColor } from '../../options';
import { clotheColorTranslation } from '../../colors/clothe-color-translation';
import { skinColorTranslation } from '../../colors/skin-color-translation';

@Component({
  selector: '[kip-custom-avatar-award-thumb-up]',
  templateUrl: './thumb-up.component.html',
})

export class CustomAvatarAwardThumbUpComponent implements Option<AwardType> {

  private _clotheColor: ClotheColor;
  private _color = '';
  private _clotheColor2: ClotheColor;
  private _color2 = '';
  private _skinColor: SkinColor;
  private _color3: string;

  option = AwardType.ThumbUp;

  @Input()
  set clotheColor(value: ClotheColor) {
    if (this._clotheColor !== value) {
      this._clotheColor = value;
      this._color = clotheColorTranslation(value);
    }
  }

  get clotheColor() {
    return this._clotheColor;
  }

  @Input()
  set clotheColor2(value: ClotheColor) {
    if (this._clotheColor2 !== value) {
      this._clotheColor2 = value;
      this._color2 = clotheColorTranslation(value);
    }
  }

  get clotheColor2() {
    return this._clotheColor2;
  }

  @Input()
  set skinColor(value: SkinColor) {
    if (this._skinColor !== value) {
      this._skinColor = value;
      this._color3 = skinColorTranslation(value);
    }
  }

  get skinColor() {
    return this._skinColor;
  }

  get color() {
    return this._color;
  }

  get color2() {
    return this._color2;
  }

  get color3() {
    return this._color3;
  }
}
