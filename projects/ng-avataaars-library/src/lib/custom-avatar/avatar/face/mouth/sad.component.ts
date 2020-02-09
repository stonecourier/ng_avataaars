/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { MouthType } from '../../../options';
import { MouthBaseComponent } from './mouth-base.component';

@Component({
  selector: '[kip-custom-avatar-mouth-sad]',
  templateUrl: './sad.component.html',
})

export class CustomAvatarMouthSadComponent extends MouthBaseComponent {
  get option() { return MouthType.Sad; }
}
