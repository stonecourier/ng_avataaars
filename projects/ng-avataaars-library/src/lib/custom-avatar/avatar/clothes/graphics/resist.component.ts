/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { GraphicType } from '../../../options';
import { randomId } from '../../../helper/randomid';
import { CustomAvatarClothesGraphicsBaseComponent } from './graphics-base.component';

@Component({
  selector: '[kip-custom-avatar-clothes-graphics-resist]',
  templateUrl: './resist.component.html',
})

export class CustomAvatarClothesGraphicsResistComponent extends CustomAvatarClothesGraphicsBaseComponent {

  get option() { return GraphicType.Resist; }

  readonly mask1: string = randomId('kip-mask');
}
