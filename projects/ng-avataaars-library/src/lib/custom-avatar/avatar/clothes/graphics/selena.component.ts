/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { GraphicType } from '../../../options';
import { randomId } from '../../../helper/randomid';
import { CustomAvatarClothesGraphicsBaseComponent } from './graphics-base.component';

@Component({
  selector: '[kip-custom-avatar-clothes-graphics-selena]',
  templateUrl: './selena.component.html',
})

export class CustomAvatarClothesGraphicsSelenaComponent extends CustomAvatarClothesGraphicsBaseComponent {

  option = GraphicType.Selena;

  mask1: string = randomId('kip-mask');
}
