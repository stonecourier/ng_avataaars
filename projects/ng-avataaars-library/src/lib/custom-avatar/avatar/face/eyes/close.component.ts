/* eslint-disable @angular-eslint/component-selector */

import { Component } from '@angular/core';
import { EyeType, Option } from '../../../options';

@Component({
  selector: '[kip-custom-avatar-eyes-close]',
  templateUrl: './close.component.html'
})

export class CustomAvatarEyesCloseComponent implements Option<EyeType> {
  get option(): EyeType { return EyeType.Close; }
}
