/* eslint-disable @angular-eslint/component-selector */

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {
  AccessoriesColor, AccessoriesType, FacialHairType, HairColor, HatColor,
  TopType
} from '../../options';

@Component({
  selector: '[kip-custom-avatar-top]',
  templateUrl: './top.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
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
