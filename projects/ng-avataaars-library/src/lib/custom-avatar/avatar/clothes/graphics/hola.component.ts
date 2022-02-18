/* eslint-disable @angular-eslint/component-selector */

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { randomId } from '../../../helper/randomid';
import { GraphicType } from '../../../options';
import { CustomAvatarClothesGraphicsBaseComponent } from './graphics-base.component';

@Component({
  selector: '[kip-custom-avatar-clothes-graphics-hola]',
  templateUrl: './hola.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomAvatarClothesGraphicsHolaComponent extends CustomAvatarClothesGraphicsBaseComponent {

  get option(): GraphicType { return GraphicType.Hola; }

  readonly mask1: string = randomId('kip-mask');
}
