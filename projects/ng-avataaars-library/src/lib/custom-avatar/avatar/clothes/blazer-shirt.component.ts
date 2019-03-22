/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { ClotheType } from '../../options';
import { randomId } from '../../helper/randomid';
import { CustomAvatarClothesBaseComponent } from './clothes-base.component';

@Component({
  selector: '[kip-custom-avatar-clothes-blazer-shirt]',
  templateUrl: './blazer-shirt.component.html',
})

export class CustomAvatarClothesBlazerShirtComponent extends CustomAvatarClothesBaseComponent {

  option: ClotheType.BlazerShirt;

  mask1: string = randomId('kip-mask');
  path1: string = randomId('kip-path');
}
