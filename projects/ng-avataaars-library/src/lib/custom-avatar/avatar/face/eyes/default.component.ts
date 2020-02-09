/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { Option, EyeType } from '../../../options';

@Component({
  selector: '[kip-custom-avatar-eyes-default]',
  templateUrl: './default.component.html',
})

export class CustomAvatarEyesDefaultComponent implements Option<EyeType> {
 get option() { return EyeType.Default; }
}
