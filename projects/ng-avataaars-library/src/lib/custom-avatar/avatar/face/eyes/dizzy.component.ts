/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { Option, EyeType } from '../../../options';

@Component({
  selector: '[kip-custom-avatar-eyes-dizzy]',
  templateUrl: './dizzy.component.html',
})

export class CustomAvatarEyesDizzyComponent implements Option<EyeType> {
  get option() { return EyeType.Dizzy; }
}
