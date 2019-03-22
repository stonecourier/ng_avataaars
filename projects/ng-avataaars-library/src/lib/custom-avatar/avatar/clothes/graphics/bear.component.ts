/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { GraphicType } from '../../../options';
import { randomId } from '../../../helper/randomid';
import { CustomAvatarClothesGraphicsBaseComponent } from './graphics-base.component';

@Component({
  selector: '[kip-custom-avatar-clothes-graphics-bear]',
  templateUrl: './bear.component.html',
})

export class CustomAvatarClothesGraphicsBearComponent extends CustomAvatarClothesGraphicsBaseComponent {

  option = GraphicType.Bear;

  mask1: string = randomId('kip-mask');
  mask2: string = randomId('kip-mask');
  path1: string = randomId('kip-path');
}
