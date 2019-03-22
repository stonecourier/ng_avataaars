/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { GraphicType } from '../../../options';
import { randomId } from '../../../helper/randomid';
import { CustomAvatarClothesGraphicsBaseComponent } from './graphics-base.component';

@Component({
  selector: '[kip-custom-avatar-clothes-graphics-diamond]',
  templateUrl: './diamond.component.html',
})

export class CustomAvatarClothesGraphicsDiamondComponent extends CustomAvatarClothesGraphicsBaseComponent {

  option = GraphicType.Diamond;

  mask1: string = randomId('kip-mask');
}
