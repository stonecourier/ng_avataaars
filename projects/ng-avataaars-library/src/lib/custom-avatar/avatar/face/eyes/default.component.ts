/* eslint-disable @angular-eslint/component-selector */

import { Component } from '@angular/core';
import { EyeType, Option } from '../../../options';

@Component({
  selector: '[kip-custom-avatar-eyes-default]',
  templateUrl: './default.component.html'
})

export class CustomAvatarEyesDefaultComponent implements Option<EyeType> {
 get option(): EyeType { return EyeType.Default; }
}
