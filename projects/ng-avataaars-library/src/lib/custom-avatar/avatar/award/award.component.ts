/* eslint-disable @angular-eslint/component-selector */

import { Component, Input } from '@angular/core';
import { AwardType, ClotheColor, SkinColor } from '../../options';

@Component({
  selector: '[kip-custom-avatar-award]',
  templateUrl: './award.component.html'
})

export class CustomAvatarAwardComponent {

  @Input() awardType: AwardType = AwardType.None;
  @Input() skinColor: SkinColor = SkinColor.Black;
  @Input() clotheColor: ClotheColor = ClotheColor.Black;
  @Input() clotheColor2: ClotheColor = ClotheColor.Black;
}
