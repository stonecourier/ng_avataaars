/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { randomId } from '../../helper/randomid';
import { ClotheType } from '../../options';
import { CustomAvatarClothesBaseComponent } from './clothes-base.component';

@Component({
  selector: '[kip-custom-avatar-clothes-shirt-scoop-neck]',
  templateUrl: './shirt-scoop-neck.component.html'
})

export class CustomAvatarClothesShirtScoopNeckComponent extends CustomAvatarClothesBaseComponent {

  get option() { return ClotheType.ShirtScoopNeck; }

  readonly mask1: string = randomId('kip-mask');
  readonly path1: string = randomId('kip-path');
}
