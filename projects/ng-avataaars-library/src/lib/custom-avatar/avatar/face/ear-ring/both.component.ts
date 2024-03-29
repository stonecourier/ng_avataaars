/* eslint-disable @angular-eslint/component-selector */

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EarringType } from '../../../options';
import { CustomAvatarEarringBaseComponent } from './ear-ring-base.component';

@Component({
  selector: '[kip-custom-avatar-ear-ring-both]',
  templateUrl: './both.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomAvatarEarringBothComponent extends CustomAvatarEarringBaseComponent {

  get option(): EarringType { return EarringType.Both; }

}
