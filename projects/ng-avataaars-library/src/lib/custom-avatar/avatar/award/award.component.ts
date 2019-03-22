/* tslint:disable:component-selector */

import { Component, Input } from '@angular/core';
import { AwardType, SkinColor, ClotheColor } from '../../options';

@Component({
  selector: '[kip-custom-avatar-award]',
  templateUrl: './award.component.html',
})

export class CustomAvatarAwardComponent {

  @Input()
  awardType: AwardType = AwardType.None;

  @Input()
  skinColor: SkinColor;

  @Input()
  clotheColor: ClotheColor;

  @Input()
  clotheColor2: ClotheColor;
}
