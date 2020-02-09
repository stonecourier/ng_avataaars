/* tslint:disable:component-selector */

import { Component, Input } from '@angular/core';
import {
  AccessoriesType, TopType, FacialHairType, HairColor, HatColor,
  AccessoriesColor
} from '../../options';

@Component({
  selector: '[kip-custom-avatar-top]',
  templateUrl: './top.component.html',
})

export class CustomAvatarTopComponent {

  @Input() topType: TopType = TopType.Eyepatch;
  @Input() accessoriesType: AccessoriesType = AccessoriesType.Blank;
  @Input() facialHairType: FacialHairType = FacialHairType.Blank;
  @Input() hairColor: HairColor = HairColor.Auburn;
  @Input() facialHairColor: HairColor = HairColor.Auburn;
  @Input() hatColor: HatColor = HatColor.Black;
  @Input() accessoriesColor: AccessoriesColor = AccessoriesColor.Black;

}
