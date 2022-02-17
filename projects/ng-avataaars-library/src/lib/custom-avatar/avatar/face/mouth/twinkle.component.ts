/* eslint-disable @angular-eslint/component-selector */

import { Component } from '@angular/core';
import { MouthType } from '../../../options';
import { MouthBaseComponent } from './mouth-base.component';

@Component({
  selector: '[kip-custom-avatar-mouth-twinkle]',
  templateUrl: './twinkle.component.html'
})

export class CustomAvatarMouthTwinkleComponent extends MouthBaseComponent {
  get option(): MouthType { return MouthType.Twinkle; }
}
