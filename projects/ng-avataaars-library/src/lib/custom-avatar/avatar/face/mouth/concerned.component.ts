/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { randomId } from '../../../helper/randomid';
import { MouthType } from '../../../options';
import { MouthBaseComponent } from './mouth-base.component';

@Component({
  selector: '[kip-custom-avatar-mouth-concerned]',
  templateUrl: './concerned.component.html',
})

export class CustomAvatarMouthConcernedComponent extends MouthBaseComponent {

  option: MouthType.Concerned;

  mask1: string = randomId('kip-mask');
  path1: string = randomId('kip-path');
}
