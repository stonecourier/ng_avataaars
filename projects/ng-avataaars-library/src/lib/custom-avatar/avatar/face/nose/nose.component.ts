/* eslint-disable @angular-eslint/component-selector */

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NoseType } from '../../../options';

@Component({
  selector: '[kip-custom-avatar-nose]',
  templateUrl: './nose.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomAvatarNoseComponent {

  @Input() noseType: NoseType = NoseType.Default;

}
