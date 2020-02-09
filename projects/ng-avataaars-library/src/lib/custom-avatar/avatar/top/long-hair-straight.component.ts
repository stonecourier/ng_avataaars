/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { TopType } from '../../options';
import { randomId } from '../../helper/randomid';
import { CustomAvatarTopBaseComponent } from './top-base.component';

@Component({
  selector: '[kip-custom-avatar-top-long-hair-straight]',
  templateUrl: './long-hair-straight.component.html',
})

export class CustomAvatarTopLongHairStraightComponent extends CustomAvatarTopBaseComponent {

  get option() { return TopType.LongHairStraight; }

  readonly mask1: string = randomId('kip-mask');
  readonly mask2: string = randomId('kip-mask');
  readonly path1: string = randomId('kip-path');
  readonly path2: string = randomId('kip-path');
  readonly path3: string = randomId('kip-path');

  constructor() {
    super();
  }

}
