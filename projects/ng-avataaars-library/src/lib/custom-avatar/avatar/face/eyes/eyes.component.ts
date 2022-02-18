/* eslint-disable @angular-eslint/component-selector */

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { EyeType } from '../../../options';

@Component({
  selector: '[kip-custom-avatar-eyes]',
  templateUrl: './eyes.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomAvatarEyesComponent {

  @Input() eyeType: EyeType = EyeType.Close;
}
