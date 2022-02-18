/* eslint-disable @angular-eslint/component-selector */

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EyeType, Option } from '../../../options';

@Component({
  selector: '[kip-custom-avatar-eyes-sides]',
  templateUrl: './sides.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomAvatarEyesSidesComponent implements Option<EyeType> {
  get option(): EyeType { return EyeType.Side; }
}
