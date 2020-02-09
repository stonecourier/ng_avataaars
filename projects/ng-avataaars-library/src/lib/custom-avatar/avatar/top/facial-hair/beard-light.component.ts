/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { randomId } from '../../../helper/randomid';
import { FacialHairType } from '../../../options';
import { CustomAvatarFacialHairBaseComponent } from './facial-hair-base.component';

@Component({
  selector: '[kip-custom-avatar-facial-hair-beard-light]',
  templateUrl: './beard-light.component.html'
})

export class CustomAvatarFacialHairBeardLightComponent extends CustomAvatarFacialHairBaseComponent {

  get option() { return FacialHairType.BeardLight; }

  readonly mask1: string = randomId('kip-mask');
  readonly path1: string = randomId('kip-path');
}
