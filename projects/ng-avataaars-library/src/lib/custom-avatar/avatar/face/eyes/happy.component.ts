/* eslint-disable @angular-eslint/component-selector */

import { Component } from '@angular/core';
import { EyeType, Option } from '../../../options';

@Component({
  selector: '[kip-custom-avatar-eyes-happy]',
  templateUrl: './happy.component.html'
})

export class CustomAvatarEyesHappyComponent implements Option<EyeType> {
  get option(): EyeType { return EyeType.Happy; }
}
