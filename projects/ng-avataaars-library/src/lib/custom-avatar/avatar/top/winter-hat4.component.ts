/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { randomId } from '../../helper/randomid';
import { TopType } from '../../options';
import { CustomAvatarTopBaseComponent } from './top-base.component';

@Component({
  selector: '[kip-custom-avatar-top-winter-hat4]',
  templateUrl: './winter-hat4.component.html'
})

export class CustomAvatarTopWinterHat4Component extends CustomAvatarTopBaseComponent {

  get option(): TopType { return TopType.WinterHat3; }

  readonly mask1: string = randomId('kip-mask');
  readonly mask2: string = randomId('kip-mask');
  readonly mask3: string = randomId('kip-mask');
  readonly mask4: string = randomId('kip-mask');
  readonly path1: string = randomId('kip-path');
  readonly path2: string = randomId('kip-path');
  readonly path3: string = randomId('kip-path');
  readonly path4: string = randomId('kip-path');
  readonly path5: string = randomId('kip-path');
  readonly filter1: string = randomId('kip-filter');

}
