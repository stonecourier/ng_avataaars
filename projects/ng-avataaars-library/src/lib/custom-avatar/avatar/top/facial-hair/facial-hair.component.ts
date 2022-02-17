/* eslint-disable @angular-eslint/component-selector */

import { Component, Input } from '@angular/core';
import { FacialHairType, HairColor } from '../../../options';

@Component({
  selector: '[kip-custom-avatar-facial-hair]',
  templateUrl: './facial-hair.component.html'
})

export class CustomAvatarFacialHairComponent {

  @Input() facialHairType: FacialHairType = FacialHairType.Blank;
  @Input() facialHairColor: HairColor = HairColor.Black;
}
