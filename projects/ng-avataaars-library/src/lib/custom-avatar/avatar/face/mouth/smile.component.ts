/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { randomId } from '../../../helper/randomid';
import { MouthType } from '../../../options';
import { MouthBaseComponent } from './mouth-base.component';

@Component({
  selector: '[kip-custom-avatar-mouth-smile]',
  templateUrl: './smile.component.html',
})

export class CustomAvatarMouthSmileComponent extends MouthBaseComponent {

  option: MouthType.Smile;

  mask1: string = randomId('kip-mask');
  path1: string = randomId('kip-path');
}
