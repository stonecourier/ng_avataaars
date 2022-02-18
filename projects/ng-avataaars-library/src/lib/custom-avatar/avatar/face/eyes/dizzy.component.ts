/* eslint-disable @angular-eslint/component-selector */

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EyeType, Option } from '../../../options';

@Component({
  selector: '[kip-custom-avatar-eyes-dizzy]',
  templateUrl: './dizzy.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomAvatarEyesDizzyComponent implements Option<EyeType> {
  get option(): EyeType { return EyeType.Dizzy; }
}
