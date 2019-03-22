/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { ClotheType } from '../../options';
import { randomId } from '../../helper/randomid';
import { CustomAvatarClothesBaseComponent } from './clothes-base.component';

@Component({
  selector: '[kip-custom-avatar-clothes-shirt-v-neck]',
  templateUrl: './shirt-v-neck.component.html',
})

export class CustomAvatarClothesShirtVNeckComponent extends CustomAvatarClothesBaseComponent {

  option: ClotheType.ShirtVNeck;

  mask1: string = randomId('kip-mask');
  path1: string = randomId('kip-path');
}
