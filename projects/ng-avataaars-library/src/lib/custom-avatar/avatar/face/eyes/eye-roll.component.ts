/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { Option, EyeType } from '../../../options';

@Component({
  selector: '[kip-custom-avatar-eyes-eye-roll]',
  templateUrl: './eye-roll.component.html',
})

export class CustomAvatarEyesEyeRollComponent implements Option<EyeType> {
  option = EyeType.EyeRoll;
}
