/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { GraphicType } from '../../../options';
import { randomId } from '../../../helper/randomid';
import { CustomAvatarClothesGraphicsBaseComponent } from './graphics-base.component';

@Component({
  selector: '[kip-custom-avatar-clothes-graphics-hola]',
  templateUrl: './hola.component.html',
})

export class CustomAvatarClothesGraphicsHolaComponent extends CustomAvatarClothesGraphicsBaseComponent {

  get option() { return GraphicType.Hola; }

  readonly mask1: string = randomId('kip-mask');
}
