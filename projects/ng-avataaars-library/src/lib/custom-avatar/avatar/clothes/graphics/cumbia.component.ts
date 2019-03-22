/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { GraphicType } from '../../../options';
import { randomId } from '../../../helper/randomid';
import { CustomAvatarClothesGraphicsBaseComponent } from './graphics-base.component';

@Component({
  selector: '[kip-custom-avatar-clothes-graphics-cumbia]',
  templateUrl: './cumbia.component.html',
})

export class CustomAvatarClothesGraphicsCumbiaComponent extends CustomAvatarClothesGraphicsBaseComponent {

  option = GraphicType.Cumbia;

  mask1: string = randomId('kip-mask');
}
