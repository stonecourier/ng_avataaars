/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { randomId } from '../../../helper/randomid';
import { MouthType } from '../../../options';
import { MouthBaseComponent } from './mouth-base.component';

@Component({
  selector: '[kip-custom-avatar-mouth-tongue]',
  templateUrl: './tongue.component.html',
})

export class CustomAvatarMouthTongueComponent extends MouthBaseComponent {

  get option() { return MouthType.Tongue; }

  readonly mask1: string = randomId('kip-mask');
  readonly path1: string = randomId('kip-path');
}
