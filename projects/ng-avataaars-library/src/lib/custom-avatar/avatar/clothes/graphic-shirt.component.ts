/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { ClotheType } from '../../options';
import { randomId } from '../../helper/randomid';
import { CustomAvatarClothesBaseComponent } from './clothes-base.component';

@Component({
  selector: '[kip-custom-avatar-clothes-graphic-shirt]',
  templateUrl: './graphic-shirt.component.html',
})

export class CustomAvatarClothesGraphicShirtComponent extends CustomAvatarClothesBaseComponent {

  option: ClotheType.GraphicShirt;

  mask1: string = randomId('kip-mask');
  path1: string = randomId('kip-path');
}