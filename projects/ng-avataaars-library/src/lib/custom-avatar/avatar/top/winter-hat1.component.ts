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

  get option() { return TopType.WinterHat1; }

  readonly mask1: string = randomId('kip-mask');
  readonly mask2: string = randomId('kip-mask');
  readonly path1: string = randomId('kip-path');
  readonly path2: string = randomId('kip-path');
  readonly path3: string = randomId('kip-path');
  readonly filter1: string = randomId('kip-filter');

}
