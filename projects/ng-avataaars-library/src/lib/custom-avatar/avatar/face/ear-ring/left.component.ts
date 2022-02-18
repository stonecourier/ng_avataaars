/* eslint-disable @angular-eslint/component-selector */

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EarringType } from '../../../options';
import { CustomAvatarEarringBaseComponent } from './ear-ring-base.component';

@Component({
  selector: '[kip-custom-avatar-ear-ring-left]',
  templateUrl: './left.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomAvatarEarringLeftComponent extends CustomAvatarEarringBaseComponent {

  get option(): EarringType { return EarringType.Left; }

}
