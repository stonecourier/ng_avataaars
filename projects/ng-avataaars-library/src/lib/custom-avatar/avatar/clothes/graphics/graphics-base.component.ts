/* tslint:disable:directive-class-suffix */

import { Input, Directive } from '@angular/core';
import { Option, ClotheColor, GraphicType } from '../../../options';
import { clotheColorTranslation } from '../../../colors/clothe-color-translation';
import { urlfix } from '../../../helper/urlfix';

@Directive()
export class CustomAvatarClothesGraphicsBaseComponent implements Option<GraphicType> {

  get option() { return GraphicType.Bat; }

  @Input() clotheColor2: ClotheColor = ClotheColor.Black;

  get color2() {
    return clotheColorTranslation(this.clotheColor2);
  }

  urlFix(path: string) {
    return urlfix(path);
  }
}
