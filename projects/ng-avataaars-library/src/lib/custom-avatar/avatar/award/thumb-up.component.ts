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

  get option() { return AwardType.ThumbUp; }

  @Input() clotheColor: ClotheColor = ClotheColor.Black;

  @Input() clotheColor2: ClotheColor = ClotheColor.Black;

  @Input() skinColor: SkinColor = SkinColor.Black;

  get color() {
    return clotheColorTranslation(this.clotheColor);
  }

  get color2() {
    return clotheColorTranslation(this.clotheColor2);
  }

  get color3() {
    return skinColorTranslation(this.skinColor);
  }

}
