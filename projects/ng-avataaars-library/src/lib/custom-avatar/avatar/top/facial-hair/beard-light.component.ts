/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { FacialHairType } from '../../../options';
import { randomId } from '../../../helper/randomid';
import { CustomAvatarFacialHairBaseComponent } from './facial-hair-base.component';

@Component({
  selector: '[kip-custom-avatar-facial-hair-beard-light]',
  templateUrl: './beard-light.component.html',
})

export class CustomAvatarFacialHairBeardLightComponent extends CustomAvatarFacialHairBaseComponent {

  option = FacialHairType.BeardLight;

  mask1: string = randomId('kip-mask');
  path1: string = randomId('kip-path');
}
