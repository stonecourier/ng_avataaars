/* eslint-disable @angular-eslint/component-selector */

import { Component } from '@angular/core';
import { randomId } from '../../helper/randomid';
import { ClotheType } from '../../options';
import { CustomAvatarClothesBaseComponent } from './clothes-base.component';

@Component({
  selector: '[kip-custom-avatar-clothes-shirt-v-neck]',
  templateUrl: './shirt-v-neck.component.html'
})

export class CustomAvatarClothesShirtVNeckComponent extends CustomAvatarClothesBaseComponent {

  get option(): ClotheType { return ClotheType.ShirtVNeck; }

  readonly mask1: string = randomId('kip-mask');
  readonly path1: string = randomId('kip-path');
}
