/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { MouthType } from '../../../options';
import { MouthBaseComponent } from './mouth-base.component';

@Component({
  selector: '[kip-custom-avatar-mouth-serious]',
  templateUrl: './serious.component.html'
})

export class CustomAvatarMouthSeriousComponent extends MouthBaseComponent {
  get option(): MouthType { return MouthType.Serious; }
}
