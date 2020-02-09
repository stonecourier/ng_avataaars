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

  get option() { return TopType.LongHairShavedSides; }

  readonly mask1: string = randomId('kip-mask');
  readonly mask2: string = randomId('kip-mask');
  readonly mask3: string = randomId('kip-mask');
  readonly path1: string = randomId('kip-path');
  readonly path2: string = randomId('kip-path');
  readonly path3: string = randomId('kip-path');
  readonly path4: string = randomId('kip-path');

}
