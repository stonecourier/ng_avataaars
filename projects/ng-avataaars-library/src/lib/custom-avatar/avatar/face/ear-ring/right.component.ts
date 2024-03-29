/* eslint-disable @angular-eslint/component-selector */

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EarringType } from '../../../options';
import { CustomAvatarEarringBaseComponent } from './ear-ring-base.component';

@Component({
  selector: '[kip-custom-avatar-ear-ring-right]',
  templateUrl: './right.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomAvatarEarringRightComponent extends CustomAvatarEarringBaseComponent {

  get option(): EarringType { return EarringType.Right; }

}
