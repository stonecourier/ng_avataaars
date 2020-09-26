/* tslint:disable:component-selector */

import { Component, Input } from '@angular/core';
import { clotheColorTranslation } from '../../colors/clothe-color-translation';
import { skinColorTranslation } from '../../colors/skin-color-translation';
import { AwardType, ClotheColor, Option, SkinColor } from '../../options';

@Component({
  selector: '[kip-custom-avatar-award-thumb-up]',
  templateUrl: './thumb-up.component.html'
})

export class CustomAvatarAwardThumbUpComponent implements Option<AwardType> {

  get option(): AwardType { return AwardType.ThumbUp; }

  @Input() clotheColor: ClotheColor = ClotheColor.Black;

  @Input() clotheColor2: ClotheColor = ClotheColor.Black;

  @Input() skinColor: SkinColor = SkinColor.Black;

  get color(): string {
    return clotheColorTranslation(this.clotheColor);
  }

  get color2(): string {
    return clotheColorTranslation(this.clotheColor2);
  }

  get color3(): string {
    return skinColorTranslation(this.skinColor);
  }

}
