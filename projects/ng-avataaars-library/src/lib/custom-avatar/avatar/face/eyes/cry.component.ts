/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { EyeType, Option } from '../../../options';

@Component({
  selector: '[kip-custom-avatar-eyes-cry]',
  templateUrl: './cry.component.html'
})

export class CustomAvatarEyesCryComponent implements Option<EyeType> {
  get option(): EyeType { return EyeType.Cry; }
}
