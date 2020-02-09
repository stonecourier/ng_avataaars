/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { randomId } from '../../../helper/randomid';
import { GraphicType } from '../../../options';
import { CustomAvatarClothesGraphicsBaseComponent } from './graphics-base.component';

@Component({
  selector: '[kip-custom-avatar-clothes-graphics-skull-outline]',
  templateUrl: './skull-outline.component.html'
})

export class CustomAvatarClothesGraphicsSkullOutlineComponent extends CustomAvatarClothesGraphicsBaseComponent {

  get option() { return GraphicType.SkullOutline; }

  readonly mask1: string = randomId('kip-mask');
}
