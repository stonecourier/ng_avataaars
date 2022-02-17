/* eslint-disable @angular-eslint/component-selector */

import { Component } from '@angular/core';
import { randomId } from '../../../helper/randomid';
import { GraphicType } from '../../../options';
import { CustomAvatarClothesGraphicsBaseComponent } from './graphics-base.component';

@Component({
  selector: '[kip-custom-avatar-clothes-graphics-bear]',
  templateUrl: './bear.component.html'
})

export class CustomAvatarClothesGraphicsBearComponent extends CustomAvatarClothesGraphicsBaseComponent {

  get option(): GraphicType { return GraphicType.Bear; }

  readonly mask1: string = randomId('kip-mask');
  readonly mask2: string = randomId('kip-mask');
  readonly path1: string = randomId('kip-path');
}
