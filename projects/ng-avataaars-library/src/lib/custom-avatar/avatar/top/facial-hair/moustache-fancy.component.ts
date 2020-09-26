/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { randomId } from '../../../helper/randomid';
import { FacialHairType } from '../../../options';
import { CustomAvatarFacialHairBaseComponent } from './facial-hair-base.component';

@Component({
  selector: '[kip-custom-avatar-facial-hair-moustache-fancy]',
  templateUrl: './moustache-fancy.component.html'
})

export class CustomAvatarFacialHairMoustacheFancyComponent extends CustomAvatarFacialHairBaseComponent {

  get option(): FacialHairType { return FacialHairType.MoustacheFancy; }

  readonly mask1: string = randomId('kip-mask');
  readonly path1: string = randomId('kip-path');
}
