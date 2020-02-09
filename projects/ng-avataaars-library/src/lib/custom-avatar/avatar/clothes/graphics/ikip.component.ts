/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { randomId } from '../../../helper/randomid';
import { GraphicType } from '../../../options';
import { CustomAvatarClothesGraphicsBaseComponent } from './graphics-base.component';

@Component({
  selector: '[kip-custom-avatar-clothes-graphics-ikip]',
  templateUrl: './ikip.component.html'
})

export class CustomAvatarClothesGraphicsIKipComponent extends CustomAvatarClothesGraphicsBaseComponent {

  get option() { return GraphicType.IKip; }

  readonly mask1: string = randomId('kip-mask');
}
