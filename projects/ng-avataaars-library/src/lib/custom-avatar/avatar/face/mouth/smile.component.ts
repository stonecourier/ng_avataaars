/* eslint-disable @angular-eslint/component-selector */

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { randomId } from '../../../helper/randomid';
import { MouthType } from '../../../options';
import { MouthBaseComponent } from './mouth-base.component';

@Component({
  selector: '[kip-custom-avatar-mouth-smile]',
  templateUrl: './smile.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomAvatarMouthSmileComponent extends MouthBaseComponent {

  get option(): MouthType { return MouthType.Smile; }

  readonly mask1: string = randomId('kip-mask');
  readonly path1: string = randomId('kip-path');
}
