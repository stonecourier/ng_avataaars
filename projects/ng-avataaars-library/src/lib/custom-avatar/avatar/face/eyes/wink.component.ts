/* eslint-disable @angular-eslint/component-selector */

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EyeType, Option } from '../../../options';

@Component({
  selector: '[kip-custom-avatar-eyes-wink]',
  templateUrl: './wink.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomAvatarEyesWinkComponent implements Option<EyeType> {
  get option(): EyeType { return EyeType.Wink; }
}
