/* eslint-disable @angular-eslint/component-selector */

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { randomId } from '../../../helper/randomid';
import { MouthType } from '../../../options';
import { MouthBaseComponent } from './mouth-base.component';

@Component({
  selector: '[kip-custom-avatar-mouth-grimace]',
  templateUrl: './grimace.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomAvatarMouthGrimaceComponent extends MouthBaseComponent {

  get option(): MouthType { return MouthType.Grimace; }

  readonly mask1: string = randomId('kip-mask');
  readonly path1: string = randomId('kip-path');
}
