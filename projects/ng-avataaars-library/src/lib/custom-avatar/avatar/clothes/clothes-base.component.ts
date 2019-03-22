import { Input } from '@angular/core';
import { Option, ClotheType, ClotheColor, GraphicType } from '../../options';
import { clotheColorTranslation } from '../../colors/clothe-color-translation';
import { urlfix } from '../../helper/urlfix';

export class CustomAvatarClothesBaseComponent implements Option<ClotheType> {

  private _clotheColor: ClotheColor;
  private _color = '';
  private _clotheColor2: ClotheColor;
  private _color2 = '';
  private _clotheColor3: ClotheColor;
  private _color3 = '';

  option = ClotheType.BlazerShirt;

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
  set clotheColor3(value: ClotheColor) {
    if (this._clotheColor3 !== value) {
      this._clotheColor3 = value;
      this._color3 = clotheColorTranslation(value);
    }
  }

  get clotheColor3() {
    return this._clotheColor3;
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

  @Input()
  graphicType: GraphicType;

  urlFix(path: string) {
    return urlfix(path);
  }
}
