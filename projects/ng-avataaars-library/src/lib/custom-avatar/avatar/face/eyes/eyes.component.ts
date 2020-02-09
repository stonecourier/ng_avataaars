/* tslint:disable:component-selector */

import { Component, Input } from '@angular/core';
import { EyeType } from '../../../options';

@Component({
  selector: '[kip-custom-avatar-eyes]',
  templateUrl: './eyes.component.html'
})

export class CustomAvatarEyesComponent {

  @Input() eyeType: EyeType = EyeType.Close;
}
