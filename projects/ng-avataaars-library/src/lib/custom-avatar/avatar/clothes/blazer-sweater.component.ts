/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { randomId } from '../../helper/randomid';
import { ClotheType } from '../../options';
import { CustomAvatarClothesBaseComponent } from './clothes-base.component';

@Component({
  selector: '[kip-custom-avatar-clothes-blazer-sweater]',
  templateUrl: './blazer-sweater.component.html'
})

export class CustomAvatarClothesBlazerSweaterComponent extends CustomAvatarClothesBaseComponent {

  get option(): ClotheType { return ClotheType.BlazerSweater; }

  readonly mask1: string = randomId('kip-mask');
  readonly path1: string = randomId('kip-path');
}
