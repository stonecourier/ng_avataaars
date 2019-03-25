import { Input } from '@angular/core';
import { Option, EarringType, EarringColor } from '../../../options';
import { earringColorTranslation } from '../../../colors/ear-ring-color-translation';
import { urlfix } from '../../../helper/urlfix';

export class CustomAvatarEarringBaseComponent implements Option<EarringType> {

  private _earringColor: EarringColor;
  private _color;

  option = EarringType.Blank;

  @Input()
  set earringColor(value: EarringColor) {
    if (this._earringColor !== value) {
      this._earringColor = value;
      this._color = earringColorTranslation(value);
    }
  }

  get earringColor() {
    return this._earringColor;
  }

  get color() {
    return this._color;
  }

  urlFix(path: string) {
    return urlfix(path);
  }
}

