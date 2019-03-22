/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { randomId } from '../../../helper/randomid';
import { MouthType } from '../../../options';
import { MouthBaseComponent } from './mouth-base.component';

@Component({
  selector: '[kip-custom-avatar-mouth-scream-open]',
  templateUrl: './scream-open.component.html',
})

export class CustomAvatarMouthScreamOpenComponent extends MouthBaseComponent {

  option: MouthType.ScreamOpen;

  mask1: string = randomId('kip-mask');
  path1: string = randomId('kip-path');
}
