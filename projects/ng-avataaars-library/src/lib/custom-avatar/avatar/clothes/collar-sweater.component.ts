/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { ClotheType } from '../../options';
import { randomId } from '../../helper/randomid';
import { CustomAvatarClothesBaseComponent } from './clothes-base.component';

@Component({
  selector: '[kip-custom-avatar-clothes-collar-sweater]',
  templateUrl: './collar-sweater.component.html',
})

export class CustomAvatarClothesCollarSweaterComponent extends CustomAvatarClothesBaseComponent {

  option: ClotheType.CollarSweater;

  mask1: string = randomId('kip-mask');
  path1: string = randomId('kip-path');
}
