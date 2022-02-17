/* eslint-disable @angular-eslint/component-selector */

import { Component } from '@angular/core';
import { EyebrowType, Option } from '../../../options';

@Component({
  selector: '[kip-custom-avatar-eye-brow-up-down]',
  templateUrl: './up-down.component.html'
})

export class CustomAvatarEyebrowsUpDownComponent implements Option<EyebrowType> {
  get option(): EyebrowType { return EyebrowType.UpDown; }
}
