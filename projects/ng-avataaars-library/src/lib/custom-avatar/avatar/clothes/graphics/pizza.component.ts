/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { GraphicType } from '../../../options';
import { randomId } from '../../../helper/randomid';
import { CustomAvatarClothesGraphicsBaseComponent } from './graphics-base.component';

@Component({
  selector: '[kip-custom-avatar-clothes-graphics-pizza]',
  templateUrl: './pizza.component.html',
})

export class CustomAvatarClothesGraphicsPizzaComponent extends CustomAvatarClothesGraphicsBaseComponent {

  option = GraphicType.Pizza;

  mask1: string = randomId('kip-mask');
}
