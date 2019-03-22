/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { TopType } from '../../options';
import { randomId } from '../../helper/randomid';
import { CustomAvatarTopBaseComponent } from './top-base.component';

@Component({
  selector: '[kip-custom-avatar-top-winter-hat1]',
  templateUrl: './winter-hat1.component.html',
})

export class CustomAvatarTopWinterHat1Component extends CustomAvatarTopBaseComponent {

  option = TopType.WinterHat1;

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
