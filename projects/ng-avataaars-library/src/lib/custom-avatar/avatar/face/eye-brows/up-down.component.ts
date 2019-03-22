/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { Option, EyebrowType } from '../../../options';

@Component({
  selector: '[kip-custom-avatar-eye-brow-up-down]',
  templateUrl: './up-down.component.html',
})

export class CustomAvatarEyebrowsUpDownComponent implements Option<EyebrowType> {
  option: EyebrowType = EyebrowType.UpDown;
}
