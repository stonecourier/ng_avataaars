/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { EyeType, Option } from '../../../options';

@Component({
  selector: '[kip-custom-avatar-eyes-surprised]',
  templateUrl: './surprised.component.html'
})

export class CustomAvatarEyesSurprisedComponent implements Option<EyeType> {
  get option() { return EyeType.Surprised; }
}
