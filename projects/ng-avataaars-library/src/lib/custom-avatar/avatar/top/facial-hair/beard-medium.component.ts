/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { FacialHairType } from '../../../options';
import { randomId } from '../../../helper/randomid';
import { CustomAvatarFacialHairBaseComponent } from './facial-hair-base.component';

@Component({
  selector: '[kip-custom-avatar-facial-hair-beard-medium]',
  templateUrl: './beard-medium.component.html',
})

export class CustomAvatarFacialHairBeardMediumComponent extends CustomAvatarFacialHairBaseComponent {

  option = FacialHairType.BeardMedium;

  mask1: string = randomId('kip-mask');
  path1: string = randomId('kip-path');
}
