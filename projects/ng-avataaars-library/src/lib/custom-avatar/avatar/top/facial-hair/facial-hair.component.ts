/* eslint-disable @angular-eslint/component-selector */

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FacialHairType, HairColor } from '../../../options';

@Component({
  selector: '[kip-custom-avatar-facial-hair]',
  templateUrl: './facial-hair.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomAvatarFacialHairComponent {

  @Input() facialHairType: FacialHairType = FacialHairType.Blank;
  @Input() facialHairColor: HairColor = HairColor.Black;
}
