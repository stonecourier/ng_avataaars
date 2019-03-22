/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { ClotheType } from '../../options';
import { randomId } from '../../helper/randomid';
import { CustomAvatarClothesBaseComponent } from './clothes-base.component';

@Component({
  selector: '[kip-custom-avatar-clothes-shirt-scoop-neck]',
  templateUrl: './shirt-scoop-neck.component.html',
})

export class CustomAvatarClothesShirtScoopNeckComponent extends CustomAvatarClothesBaseComponent {

  option: ClotheType.ShirtScoopNeck;

  mask1: string = randomId('kip-mask');
  path1: string = randomId('kip-path');
}
