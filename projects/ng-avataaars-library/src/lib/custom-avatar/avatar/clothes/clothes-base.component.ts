/* tslint:disable:directive-class-suffix */

import { Directive, Input } from '@angular/core';
import { clotheColorTranslation } from '../../colors/clothe-color-translation';
import { urlfix } from '../../helper/urlfix';
import { ClotheColor, ClotheType, GraphicType, Option } from '../../options';

@Directive()
export class CustomAvatarClothesBaseComponent implements Option<ClotheType> {

  get option(): ClotheType { return ClotheType.BlazerShirt; }

  @Input() clotheColor: ClotheColor = ClotheColor.Black;
  @Input() clotheColor2: ClotheColor = ClotheColor.Black;
  @Input() clotheColor3: ClotheColor = ClotheColor.Black;

  get color(): string {
    return clotheColorTranslation(this.clotheColor);
  }

  get color2(): string {
    return clotheColorTranslation(this.clotheColor2);
  }

  get color3(): string {
    return clotheColorTranslation(this.clotheColor3);
  }

  @Input() graphicType: GraphicType = GraphicType.Bat;

  urlFix(path: string): string {
    return urlfix(path);
  }

}
