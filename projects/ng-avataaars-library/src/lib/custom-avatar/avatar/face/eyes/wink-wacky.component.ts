/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { EyeType, Option } from '../../../options';

@Component({
  selector: '[kip-custom-avatar-eyes-wink-wacky]',
  templateUrl: './wink-wacky.component.html'
})

export class CustomAvatarEyesWinkWackyComponent implements Option<EyeType> {
  get option(): EyeType { return EyeType.WinkWacky; }
}
