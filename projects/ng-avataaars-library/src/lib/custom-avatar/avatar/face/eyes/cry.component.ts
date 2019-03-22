/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { Option, EyeType } from '../../../options';

@Component({
  selector: '[kip-custom-avatar-eyes-cry]',
  templateUrl: './cry.component.html',
})

export class CustomAvatarEyesCryComponent implements Option<EyeType> {
  option = EyeType.Cry;
}
