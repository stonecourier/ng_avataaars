/* eslint-disable @angular-eslint/component-selector */

import { Component } from '@angular/core';
import { randomId } from '../../../helper/randomid';
import { GraphicType } from '../../../options';
import { CustomAvatarClothesGraphicsBaseComponent } from './graphics-base.component';

@Component({
  selector: '[kip-custom-avatar-clothes-graphics-cumbia]',
  templateUrl: './cumbia.component.html'
})

export class CustomAvatarClothesGraphicsCumbiaComponent extends CustomAvatarClothesGraphicsBaseComponent {

  get option(): GraphicType { return GraphicType.Cumbia; }

  readonly mask1: string = randomId('kip-mask');
}
