/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { Option, EyeType } from '../../../options';

@Component({
  selector: '[kip-custom-avatar-eyes-surprised]',
  templateUrl: './surprised.component.html',
})

export class CustomAvatarEyesSurprisedComponent implements Option<EyeType> {
  option = EyeType.Surprised;
}
