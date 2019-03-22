/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { TopType } from '../../options';
import { randomId } from '../../helper/randomid';
import { CustomAvatarTopBaseComponent } from './top-base.component';

@Component({
  selector: '[kip-custom-avatar-top-winter-hat3]',
  templateUrl: './winter-hat3.component.html',
})

export class CustomAvatarTopWinterHat3Component extends CustomAvatarTopBaseComponent {

  option = TopType.WinterHat3;

  mask1: string = randomId('kip-mask');
  mask2: string = randomId('kip-mask');
  path1: string = randomId('kip-path');
  path2: string = randomId('kip-path');
  path3: string = randomId('kip-path');
  filter1: string = randomId('kip-filter');

  constructor() {
    super();
  }

}
