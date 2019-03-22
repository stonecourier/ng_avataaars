/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { TopType } from '../../options';
import { randomId } from '../../helper/randomid';
import { CustomAvatarTopBaseComponent } from './top-base.component';

@Component({
  selector: '[kip-custom-avatar-top-long-hair-shaved-sides]',
  templateUrl: './long-hair-shaved-sides.component.html',
})

export class CustomAvatarTopLongHairShavedSidesComponent extends CustomAvatarTopBaseComponent {

  option = TopType.LongHairShavedSides;

  mask1: string = randomId('kip-mask');
  mask2: string = randomId('kip-mask');
  mask3: string = randomId('kip-mask');
  path1: string = randomId('kip-path');
  path2: string = randomId('kip-path');
  path3: string = randomId('kip-path');
  path4: string = randomId('kip-path');

  constructor() {
    super();
  }

}
