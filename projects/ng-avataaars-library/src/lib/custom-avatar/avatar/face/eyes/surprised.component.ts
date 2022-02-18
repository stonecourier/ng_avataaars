/* eslint-disable @angular-eslint/component-selector */

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EyeType, Option } from '../../../options';

@Component({
  selector: '[kip-custom-avatar-eyes-surprised]',
  templateUrl: './surprised.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomAvatarEyesSurprisedComponent implements Option<EyeType> {
  get option(): EyeType { return EyeType.Surprised; }
}
