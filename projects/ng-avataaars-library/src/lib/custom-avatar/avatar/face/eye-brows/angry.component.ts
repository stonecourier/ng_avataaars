/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { EyebrowType, Option } from '../../../options';

@Component({
  selector: '[kip-custom-avatar-eye-brow-angry]',
  templateUrl: './angry.component.html'
})

export class CustomAvatarEyebrowsAngryComponent implements Option<EyebrowType> {
  get option() { return EyebrowType.Angry; }
}
