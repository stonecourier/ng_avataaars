/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { Option, EyeType } from '../../../options';

@Component({
  selector: '[kip-custom-avatar-eyes-wink-wacky]',
  templateUrl: './wink-wacky.component.html',
})

export class CustomAvatarEyesWinkWackyComponent implements Option<EyeType> {
  option = EyeType.WinkWacky;
}
