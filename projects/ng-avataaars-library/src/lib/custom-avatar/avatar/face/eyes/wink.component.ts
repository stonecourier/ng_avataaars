/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { Option, EyeType } from '../../../options';

@Component({
  selector: '[kip-custom-avatar-eyes-wink]',
  templateUrl: './wink.component.html',
})

export class CustomAvatarEyesWinkComponent implements Option<EyeType> {
  option = EyeType.Wink;
}
