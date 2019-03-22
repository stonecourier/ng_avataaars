/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { GraphicType } from '../../../options';
import { randomId } from '../../../helper/randomid';
import { CustomAvatarClothesGraphicsBaseComponent } from './graphics-base.component';

@Component({
  selector: '[kip-custom-avatar-clothes-graphics-skull-outline]',
  templateUrl: './skull-outline.component.html',
})

export class CustomAvatarClothesGraphicsSkullOutlineComponent extends CustomAvatarClothesGraphicsBaseComponent {

  option = GraphicType.SkullOutline;

  mask1: string = randomId('kip-mask');
}
