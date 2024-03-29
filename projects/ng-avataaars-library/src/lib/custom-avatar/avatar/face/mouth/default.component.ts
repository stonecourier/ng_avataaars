/* eslint-disable @angular-eslint/component-selector */

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MouthType } from '../../../options';
import { MouthBaseComponent } from './mouth-base.component';

@Component({
  selector: '[kip-custom-avatar-mouth-default]',
  templateUrl: './default.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomAvatarMouthDefaultComponent extends MouthBaseComponent {
  get option(): MouthType { return MouthType.Default; }
}
