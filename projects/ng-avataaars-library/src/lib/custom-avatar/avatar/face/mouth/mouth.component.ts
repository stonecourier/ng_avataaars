/* eslint-disable @angular-eslint/component-selector */

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MouthType } from '../../../options';

@Component({
  selector: '[kip-custom-avatar-mouth]',
  templateUrl: './mouth.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomAvatarMouthComponent {

  @Input() mouthType: MouthType = MouthType.Concerned;

}
