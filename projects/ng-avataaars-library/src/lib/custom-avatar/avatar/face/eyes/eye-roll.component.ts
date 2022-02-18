/* eslint-disable @angular-eslint/component-selector */

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EyeType, Option } from '../../../options';

@Component({
  selector: '[kip-custom-avatar-eyes-eye-roll]',
  templateUrl: './eye-roll.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomAvatarEyesEyeRollComponent implements Option<EyeType> {
  get option(): EyeType { return EyeType.EyeRoll; }
}
