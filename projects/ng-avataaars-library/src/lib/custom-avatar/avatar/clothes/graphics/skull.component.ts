/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { GraphicType } from '../../../options';
import { randomId } from '../../../helper/randomid';
import { CustomAvatarClothesGraphicsBaseComponent } from './graphics-base.component';

@Component({
  selector: '[kip-custom-avatar-clothes-graphics-skull]',
  templateUrl: './skull.component.html',
})

export class CustomAvatarClothesGraphicsSkullComponent extends CustomAvatarClothesGraphicsBaseComponent {

  option = GraphicType.Skull;

  mask1: string = randomId('kip-mask');
}
