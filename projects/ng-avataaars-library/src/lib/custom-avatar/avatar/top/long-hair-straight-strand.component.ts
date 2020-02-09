/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { randomId } from '../../helper/randomid';
import { TopType } from '../../options';
import { CustomAvatarTopBaseComponent } from './top-base.component';

@Component({
  selector: '[kip-custom-avatar-top-long-hair-straight-strand]',
  templateUrl: './long-hair-straight-strand.component.html'
})

export class CustomAvatarTopLongHairStraightStrandComponent extends CustomAvatarTopBaseComponent {

  get option() { return TopType.LongHairStraightStrand; }

  readonly mask1: string = randomId('kip-mask');
  readonly mask2: string = randomId('kip-mask');
  readonly path1: string = randomId('kip-path');
  readonly path2: string = randomId('kip-path');
  readonly path3: string = randomId('kip-path');

}
