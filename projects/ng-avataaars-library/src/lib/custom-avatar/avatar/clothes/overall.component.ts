/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { ClotheType } from '../../options';
import { randomId } from '../../helper/randomid';
import { CustomAvatarClothesBaseComponent } from './clothes-base.component';

@Component({
  selector: '[kip-custom-avatar-clothes-overall]',
  templateUrl: './overall.component.html',
})

export class CustomAvatarClothesOverallComponent extends CustomAvatarClothesBaseComponent {

  option: ClotheType.Overall;

  mask1: string = randomId('kip-mask');
  path1: string = randomId('kip-path');
}
