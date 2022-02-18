/* eslint-disable @angular-eslint/component-selector */

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MouthType } from '../../../options';
import { MouthBaseComponent } from './mouth-base.component';

@Component({
  selector: '[kip-custom-avatar-mouth-sad]',
  templateUrl: './sad.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomAvatarMouthSadComponent extends MouthBaseComponent {
  get option(): MouthType { return MouthType.Sad; }
}
