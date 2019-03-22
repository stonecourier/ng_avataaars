import { Input } from '@angular/core';
import { Option, ClotheColor, GraphicType } from '../../../options';
import { clotheColorTranslation } from '../../../colors/clothe-color-translation';
import { urlfix } from '../../../helper/urlfix';

export class CustomAvatarClothesGraphicsBaseComponent implements Option<GraphicType> {

  private _clotheColor2: ClotheColor;
  private _color2 = '';

  option = GraphicType.Bat;

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

  get color2() {
    return this._color2;
  }

  urlFix(path: string) {
    return urlfix(path);
  }
}
