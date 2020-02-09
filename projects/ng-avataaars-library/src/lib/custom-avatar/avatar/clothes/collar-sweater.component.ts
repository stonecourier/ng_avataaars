/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { randomId } from '../../helper/randomid';
import { ClotheType } from '../../options';
import { CustomAvatarClothesBaseComponent } from './clothes-base.component';

@Component({
  selector: '[kip-custom-avatar-clothes-collar-sweater]',
  templateUrl: './collar-sweater.component.html'
})

export class CustomAvatarClothesCollarSweaterComponent extends CustomAvatarClothesBaseComponent {

  get option() { return ClotheType.CollarSweater; }

  readonly mask1: string = randomId('kip-mask');
  readonly path1: string = randomId('kip-path');
}
