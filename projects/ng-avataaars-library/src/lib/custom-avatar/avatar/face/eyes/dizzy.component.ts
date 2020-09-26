/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { EyeType, Option } from '../../../options';

@Component({
  selector: '[kip-custom-avatar-eyes-dizzy]',
  templateUrl: './dizzy.component.html'
})

export class CustomAvatarEyesDizzyComponent implements Option<EyeType> {
  get option(): EyeType { return EyeType.Dizzy; }
}
