/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { ClotheType } from '../../options';
import { randomId } from '../../helper/randomid';
import { CustomAvatarClothesBaseComponent } from './clothes-base.component';

@Component({
  selector: '[kip-custom-avatar-clothes-blazer-sweater]',
  templateUrl: './blazer-sweater.component.html',
})

export class CustomAvatarClothesBlazerSweaterComponent  extends CustomAvatarClothesBaseComponent {

  option: ClotheType.BlazerSweater;

  mask1: string = randomId('kip-mask');
  path1: string = randomId('kip-path');
}