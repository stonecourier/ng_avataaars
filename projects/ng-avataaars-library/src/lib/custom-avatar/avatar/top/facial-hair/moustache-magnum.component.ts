/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { FacialHairType } from '../../../options';
import { randomId } from '../../../helper/randomid';
import { CustomAvatarFacialHairBaseComponent } from './facial-hair-base.component';

@Component({
  selector: '[kip-custom-avatar-facial-hair-moustache-magnum]',
  templateUrl: './moustache-magnum.component.html',
})

export class CustomAvatarFacialHairMoustacheMagnumComponent extends CustomAvatarFacialHairBaseComponent {

  option = FacialHairType.MoustacheMagnum;

  mask1: string = randomId('kip-mask');
  path1: string = randomId('kip-path');
}
