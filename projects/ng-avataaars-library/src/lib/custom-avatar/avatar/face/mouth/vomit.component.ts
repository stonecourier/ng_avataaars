/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { randomId } from '../../../helper/randomid';
import { MouthType } from '../../../options';
import { MouthBaseComponent } from './mouth-base.component';

@Component({
  selector: '[kip-custom-avatar-mouth-vomit]',
  templateUrl: './vomit.component.html'
})

export class CustomAvatarMouthVomitComponent extends MouthBaseComponent {

  get option() { return MouthType.Vomit; }

  readonly mask1: string = randomId('kip-mask');
  readonly path1: string = randomId('kip-path');
  readonly path2: string = randomId('kip-path');
  readonly filter1: string = randomId('kip-filter');
}
