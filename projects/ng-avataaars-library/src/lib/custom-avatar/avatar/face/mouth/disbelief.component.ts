/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { MouthType } from '../../../options';
import { MouthBaseComponent } from './mouth-base.component';

@Component({
  selector: '[kip-custom-avatar-mouth-disbelief]',
  templateUrl: './disbelief.component.html',
})

export class CustomAvatarMouthDisbeliefComponent extends MouthBaseComponent {
  option: MouthType.Disbelief;
}
