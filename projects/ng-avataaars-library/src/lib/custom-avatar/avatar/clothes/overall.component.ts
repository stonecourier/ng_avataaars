/* eslint-disable @angular-eslint/component-selector */

import { Component } from '@angular/core';
import { randomId } from '../../helper/randomid';
import { ClotheType } from '../../options';
import { CustomAvatarClothesBaseComponent } from './clothes-base.component';

@Component({
  selector: '[kip-custom-avatar-clothes-overall]',
  templateUrl: './overall.component.html'
})

export class CustomAvatarClothesOverallComponent extends CustomAvatarClothesBaseComponent {

  get option(): ClotheType { return ClotheType.Overall; }

  readonly mask1: string = randomId('kip-mask');
  readonly path1: string = randomId('kip-path');
}
