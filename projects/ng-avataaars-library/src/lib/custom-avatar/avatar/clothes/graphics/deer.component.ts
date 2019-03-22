/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { GraphicType } from '../../../options';
import { randomId } from '../../../helper/randomid';
import { CustomAvatarClothesGraphicsBaseComponent } from './graphics-base.component';

@Component({
  selector: '[kip-custom-avatar-clothes-graphics-deer]',
  templateUrl: './deer.component.html',
})

export class CustomAvatarClothesGraphicsDeerComponent extends CustomAvatarClothesGraphicsBaseComponent {

  option = GraphicType.Deer;

  mask1: string = randomId('kip-mask');
}
