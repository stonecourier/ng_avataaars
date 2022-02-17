/* eslint-disable @angular-eslint/component-selector */

import { Component } from '@angular/core';
import { randomId } from '../../../helper/randomid';
import { GraphicType } from '../../../options';
import { CustomAvatarClothesGraphicsBaseComponent } from './graphics-base.component';

@Component({
  selector: '[kip-custom-avatar-clothes-graphics-selena]',
  templateUrl: './selena.component.html'
})

export class CustomAvatarClothesGraphicsSelenaComponent extends CustomAvatarClothesGraphicsBaseComponent {

  get option(): GraphicType { return GraphicType.Selena; }

  readonly mask1: string = randomId('kip-mask');
}
