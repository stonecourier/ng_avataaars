/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { randomId } from '../../../helper/randomid';
import { GraphicType } from '../../../options';
import { CustomAvatarClothesGraphicsBaseComponent } from './graphics-base.component';

@Component({
  selector: '[kip-custom-avatar-clothes-graphics-skull]',
  templateUrl: './skull.component.html'
})

export class CustomAvatarClothesGraphicsSkullComponent extends CustomAvatarClothesGraphicsBaseComponent {

  get option() { return GraphicType.Skull; }

  readonly mask1: string = randomId('kip-mask');
}
