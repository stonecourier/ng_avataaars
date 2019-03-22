/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { MouthType } from '../../../options';
import { MouthBaseComponent } from './mouth-base.component';

@Component({
  selector: '[kip-custom-avatar-mouth-eating]',
  templateUrl: './eating.component.html',
})

export class CustomAvatarMouthEatingComponent extends MouthBaseComponent {
  option: MouthType.Eating;
}
