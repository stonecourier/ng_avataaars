/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { Option, EyeType } from '../../../options';

@Component({
  selector: '[kip-custom-avatar-eyes-hearts]',
  templateUrl: './hearts.component.html',
})

export class CustomAvatarEyesHeartsComponent implements Option<EyeType> {
  option = EyeType.Hearts;
}
