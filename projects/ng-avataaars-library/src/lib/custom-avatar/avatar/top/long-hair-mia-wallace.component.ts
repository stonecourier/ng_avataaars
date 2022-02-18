/* eslint-disable @angular-eslint/component-selector */

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { randomId } from '../../helper/randomid';
import { TopType } from '../../options';
import { CustomAvatarTopBaseComponent } from './top-base.component';

@Component({
  selector: '[kip-custom-avatar-top-long-hair-mia-wallace]',
  templateUrl: './long-hair-mia-wallace.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomAvatarTopLongHairMiaWallaceComponent extends CustomAvatarTopBaseComponent {

  get option(): TopType { return TopType.LongHairMiaWallace; }

  readonly mask1: string = randomId('kip-mask');
  readonly mask2: string = randomId('kip-mask');
  readonly path1: string = randomId('kip-path');
  readonly path2: string = randomId('kip-path');

}
