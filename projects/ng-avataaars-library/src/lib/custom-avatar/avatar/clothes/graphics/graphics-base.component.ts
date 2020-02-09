/* tslint:disable:directive-class-suffix */

import { Directive, Input } from '@angular/core';
import { clotheColorTranslation } from '../../../colors/clothe-color-translation';
import { urlfix } from '../../../helper/urlfix';
import { ClotheColor, GraphicType, Option } from '../../../options';

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
