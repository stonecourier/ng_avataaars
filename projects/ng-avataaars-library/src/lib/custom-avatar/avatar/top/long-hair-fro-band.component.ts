/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { randomId } from '../../helper/randomid';
import { TopType } from '../../options';
import { CustomAvatarTopBaseComponent } from './top-base.component';

@Component({
  selector: '[kip-custom-avatar-top-long-hair-fro-band]',
  templateUrl: './long-hair-fro-band.component.html'
})

export class CustomAvatarTopLongHairFroBandComponent extends CustomAvatarTopBaseComponent {

  get option(): TopType { return TopType.LongHairFroBand; }

  readonly mask1: string = randomId('kip-mask');
  readonly mask2: string = randomId('kip-mask');
  readonly path1: string = randomId('kip-path');
  readonly path2: string = randomId('kip-path');

}
