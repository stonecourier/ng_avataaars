/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { TopType } from '../../options';
import { randomId } from '../../helper/randomid';
import { CustomAvatarTopBaseComponent } from './top-base.component';

@Component({
  selector: '[kip-custom-avatar-top-short-hair-shaggy-mullet]',
  templateUrl: './short-hair-shaggy-mullet.component.html',
})

export class CustomAvatarTopShortHairShaggyMulletComponent extends CustomAvatarTopBaseComponent {

  get option() { return TopType.ShortHairShaggyMullet; }

  readonly mask1: string = randomId('kip-mask');
  readonly mask2: string = randomId('kip-mask');
  readonly path1: string = randomId('kip-path');
  readonly path2: string = randomId('kip-path');
  readonly path3: string = randomId('kip-path');

}
