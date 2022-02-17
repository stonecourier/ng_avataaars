/* eslint-disable @angular-eslint/component-selector */

import { Component } from '@angular/core';
import { randomId } from '../../../helper/randomid';
import { FacialHairType } from '../../../options';
import { CustomAvatarFacialHairBaseComponent } from './facial-hair-base.component';

@Component({
  selector: '[kip-custom-avatar-facial-hair-beard-majestic]',
  templateUrl: './beard-majestic.component.html'
})

export class CustomAvatarFacialHairBeardMajesticComponent extends CustomAvatarFacialHairBaseComponent {

  get option(): FacialHairType { return FacialHairType.BeardMajestic; }

  readonly mask1: string = randomId('kip-mask');
  readonly path1: string = randomId('kip-path');
}
