/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { MouthType } from '../../../options';
import { MouthBaseComponent } from './mouth-base.component';

@Component({
  selector: '[kip-custom-avatar-mouth-default]',
  templateUrl: './default.component.html',
})

export class CustomAvatarMouthDefaultComponent extends MouthBaseComponent {
  get option() { return MouthType.Default; }
}
