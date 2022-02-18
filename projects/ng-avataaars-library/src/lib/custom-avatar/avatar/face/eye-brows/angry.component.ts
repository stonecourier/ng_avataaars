/* eslint-disable @angular-eslint/component-selector */

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EyebrowType, Option } from '../../../options';

@Component({
  selector: '[kip-custom-avatar-eye-brow-angry]',
  templateUrl: './angry.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomAvatarEyebrowsAngryComponent implements Option<EyebrowType> {
  get option(): EyebrowType { return EyebrowType.Angry; }
}
