/* eslint-disable @angular-eslint/component-selector */

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { randomId } from '../../../helper/randomid';
import { MouthType } from '../../../options';
import { MouthBaseComponent } from './mouth-base.component';

@Component({
  selector: '[kip-custom-avatar-mouth-scream-open]',
  templateUrl: './scream-open.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomAvatarMouthScreamOpenComponent extends MouthBaseComponent {

  get option(): MouthType { return MouthType.ScreamOpen; }

  readonly mask1: string = randomId('kip-mask');
  readonly path1: string = randomId('kip-path');
}
