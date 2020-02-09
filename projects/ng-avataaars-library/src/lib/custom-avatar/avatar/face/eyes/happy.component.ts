/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { Option, EyeType } from '../../../options';

@Component({
  selector: '[kip-custom-avatar-eyes-happy]',
  templateUrl: './happy.component.html',
})

export class CustomAvatarEyesHappyComponent implements Option<EyeType> {
  get option() { return EyeType.Happy; }
}
