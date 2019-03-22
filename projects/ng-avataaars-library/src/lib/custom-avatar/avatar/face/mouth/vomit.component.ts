/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { randomId } from '../../../helper/randomid';
import { MouthType } from '../../../options';
import { MouthBaseComponent } from './mouth-base.component';

@Component({
  selector: '[kip-custom-avatar-mouth-vomit]',
  templateUrl: './vomit.component.html',
})

export class CustomAvatarMouthVomitComponent extends MouthBaseComponent {

  option: MouthType.Vomit;

  mask1: string = randomId('kip-mask');
  path1: string = randomId('kip-path');
  path2: string = randomId('kip-path');
  filter1: string = randomId('kip-filter');
}
