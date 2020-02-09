/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { FacialHairType } from '../../../options';
import { randomId } from '../../../helper/randomid';
import { CustomAvatarFacialHairBaseComponent } from './facial-hair-base.component';

@Component({
  selector: '[kip-custom-avatar-facial-hair-beard-majestic]',
  templateUrl: './beard-majestic.component.html',
})

export class CustomAvatarFacialHairBeardMajesticComponent extends CustomAvatarFacialHairBaseComponent {

  get option() { return FacialHairType.BeardMajestic; }

  readonly mask1: string = randomId('kip-mask');
  readonly path1: string = randomId('kip-path');
}
