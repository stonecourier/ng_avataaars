import { Input } from '@angular/core';
import { Option, ClotheType, ClotheColor, GraphicType } from '../../options';
import { clotheColorTranslation } from '../../colors/clothe-color-translation';
import { urlfix } from '../../helper/urlfix';

export class CustomAvatarClothesBaseComponent implements Option<ClotheType> {

  get option() { return ClotheType.BlazerShirt; }

  @Input() clotheColor: ClotheColor = ClotheColor.Black;
  @Input() clotheColor2: ClotheColor = ClotheColor.Black;
  @Input() clotheColor3: ClotheColor = ClotheColor.Black;

  get color() {
    return clotheColorTranslation(this.clotheColor);
  }

  get color2() {
    return clotheColorTranslation(this.clotheColor2);
  }

  get color3() {
    return clotheColorTranslation(this.clotheColor3);
  }

  @Input() graphicType: GraphicType = GraphicType.Bat;

  urlFix(path: string) {
    return urlfix(path);
  }

}
