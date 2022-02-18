/* eslint-disable @angular-eslint/directive-class-suffix */

import { Directive, Input } from '@angular/core';
import { clotheColorTranslation } from '../../../colors/clothe-color-translation';
import { ClotheColor, GraphicType, Option } from '../../../options';

@Directive()
export class CustomAvatarClothesGraphicsBaseComponent implements Option<GraphicType> {

  get option(): GraphicType { return GraphicType.Bat; }

  @Input() clotheColor2: ClotheColor = ClotheColor.Black;

  get color2(): string {
    return clotheColorTranslation(this.clotheColor2);
  }
}
