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

  @Input()
  topType: TopType;

  @Input()
  accessoriesType: AccessoriesType;

  @Input()
  facialHairType: FacialHairType;

  @Input()
  hairColor: HairColor;

  @Input()
  facialHairColor: FacialHairType;

  @Input()
  hatColor: HatColor;

  @Input()
  accessoriesColor: AccessoriesColor;

}
