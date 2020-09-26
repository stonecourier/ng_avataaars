/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { EyeType, Option } from '../../../options';

@Component({
  selector: '[kip-custom-avatar-eyes-sides]',
  templateUrl: './sides.component.html'
})

export class CustomAvatarEyesSidesComponent implements Option<EyeType> {
  get option(): EyeType { return EyeType.Side; }
}
