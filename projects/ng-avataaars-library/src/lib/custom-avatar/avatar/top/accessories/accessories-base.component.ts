import { Input } from '@angular/core';
import { Option, AccessoriesType, AccessoriesColor } from '../../../options';
import { accessoriesColorTranslation } from '../../../colors/accessories-color-translation';
import { urlfix } from '../../../helper/urlfix';

export class CustomAvatarAccessoriesBaseComponent implements Option<AccessoriesType> {

  private _accessoriesColor: AccessoriesColor;
  private _color;

  option = AccessoriesType.Blank;

  @Input()
  set accessoriesColor(value: AccessoriesColor) {
    if (this._accessoriesColor !== value) {
      this._accessoriesColor = value;
      this._color = accessoriesColorTranslation(value);
    }
  }

  get accessoriesColor() {
    return this._accessoriesColor;
  }

  get color() {
    return this._color;
  }

  urlFix(path: string) {
    return urlfix(path);
  }
}

