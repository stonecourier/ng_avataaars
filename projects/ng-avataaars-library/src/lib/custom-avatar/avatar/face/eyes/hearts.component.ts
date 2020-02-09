/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { EyeType, Option } from '../../../options';

@Component({
  selector: '[kip-custom-avatar-eyes-hearts]',
  templateUrl: './hearts.component.html'
})

export class CustomAvatarEyesHeartsComponent implements Option<EyeType> {
  get option() { return EyeType.Hearts; }
}
