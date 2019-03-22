/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { Option, EyeType } from '../../../options';

@Component({
  selector: '[kip-custom-avatar-eyes-close]',
  templateUrl: './close.component.html',
})

export class CustomAvatarEyesCloseComponent implements Option<EyeType> {
  option = EyeType.Close;
}
