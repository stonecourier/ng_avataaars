/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { EyeType, Option } from '../../../options';

@Component({
  selector: '[kip-custom-avatar-eyes-wink]',
  templateUrl: './wink.component.html'
})

export class CustomAvatarEyesWinkComponent implements Option<EyeType> {
  get option() { return EyeType.Wink; }
}
