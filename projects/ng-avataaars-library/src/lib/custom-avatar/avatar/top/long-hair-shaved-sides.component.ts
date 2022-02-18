/* eslint-disable @angular-eslint/component-selector */

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { randomId } from '../../helper/randomid';
import { TopType } from '../../options';
import { CustomAvatarTopBaseComponent } from './top-base.component';

@Component({
  selector: '[kip-custom-avatar-top-long-hair-shaved-sides]',
  templateUrl: './long-hair-shaved-sides.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomAvatarTopLongHairShavedSidesComponent extends CustomAvatarTopBaseComponent {

  get option(): TopType { return TopType.LongHairShavedSides; }

  readonly mask1: string = randomId('kip-mask');
  readonly mask2: string = randomId('kip-mask');
  readonly mask3: string = randomId('kip-mask');
  readonly path1: string = randomId('kip-path');
  readonly path2: string = randomId('kip-path');
  readonly path3: string = randomId('kip-path');
  readonly path4: string = randomId('kip-path');

}
