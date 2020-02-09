/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { randomId } from '../../../helper/randomid';
import { GraphicType } from '../../../options';
import { CustomAvatarClothesGraphicsBaseComponent } from './graphics-base.component';

@Component({
  selector: '[kip-custom-avatar-clothes-graphics-diamond]',
  templateUrl: './diamond.component.html'
})

export class CustomAvatarClothesGraphicsDiamondComponent extends CustomAvatarClothesGraphicsBaseComponent {

  get option() { return GraphicType.Diamond; }

  readonly mask1: string = randomId('kip-mask');
}
