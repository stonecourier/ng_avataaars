/* eslint-disable @angular-eslint/component-selector */

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { randomId } from '../../helper/randomid';
import { TopType } from '../../options';
import { CustomAvatarTopBaseComponent } from './top-base.component';

@Component({
  selector: '[kip-custom-avatar-top-short-hair-short-waved]',
  templateUrl: './short-hair-short-waved.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomAvatarTopShortHairShortWavedComponent extends CustomAvatarTopBaseComponent {

  get option(): TopType { return TopType.ShortHairShortWaved; }

  readonly mask1: string = randomId('kip-mask');
  readonly mask2: string = randomId('kip-mask');
  readonly path1: string = randomId('kip-path');
  readonly path2: string = randomId('kip-path');
  readonly filter1: string = randomId('kip-filter');

}
