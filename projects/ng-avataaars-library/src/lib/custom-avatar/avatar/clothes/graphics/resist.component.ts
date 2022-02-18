/* eslint-disable @angular-eslint/component-selector */

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { randomId } from '../../../helper/randomid';
import { GraphicType } from '../../../options';
import { CustomAvatarClothesGraphicsBaseComponent } from './graphics-base.component';

@Component({
  selector: '[kip-custom-avatar-clothes-graphics-resist]',
  templateUrl: './resist.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomAvatarClothesGraphicsResistComponent extends CustomAvatarClothesGraphicsBaseComponent {

  get option(): GraphicType { return GraphicType.Resist; }

  readonly mask1: string = randomId('kip-mask');
}
