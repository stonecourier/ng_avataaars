/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { GraphicType } from '../../../options';
import { randomId } from '../../../helper/randomid';
import { CustomAvatarClothesGraphicsBaseComponent } from './graphics-base.component';

@Component({
  selector: '[kip-custom-avatar-clothes-graphics-bat]',
  templateUrl: './bat.component.html',
})

export class CustomAvatarClothesGraphicsBatComponent extends CustomAvatarClothesGraphicsBaseComponent {

  get option() { return GraphicType.Bat; }

  readonly mask1: string = randomId('kip-mask');
}
