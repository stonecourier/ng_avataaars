/* eslint-disable @angular-eslint/component-selector */

import { Component } from '@angular/core';
import { randomId } from '../../helper/randomid';
import { TopType } from '../../options';
import { CustomAvatarTopBaseComponent } from './top-base.component';

@Component({
  selector: '[kip-custom-avatar-top-short-hair-shaggy-mullet]',
  templateUrl: './short-hair-shaggy-mullet.component.html'
})

export class CustomAvatarTopShortHairShaggyMulletComponent extends CustomAvatarTopBaseComponent {

  get option(): TopType { return TopType.ShortHairShaggyMullet; }

  readonly mask1: string = randomId('kip-mask');
  readonly mask2: string = randomId('kip-mask');
  readonly path1: string = randomId('kip-path');
  readonly path2: string = randomId('kip-path');
  readonly path3: string = randomId('kip-path');

}
