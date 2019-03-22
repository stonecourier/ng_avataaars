/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { Option, EyeType } from '../../../options';

@Component({
  selector: '[kip-custom-avatar-eyes-sides]',
  templateUrl: './sides.component.html',
})

export class CustomAvatarEyesSidesComponent implements Option<EyeType> {
  option = EyeType.Side;
}
