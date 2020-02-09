/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { randomId } from '../../helper/randomid';
import { TopType } from '../../options';
import { CustomAvatarTopBaseComponent } from './top-base.component';

@Component({
  selector: '[kip-custom-avatar-top-eye-patch]',
  templateUrl: './eye-patch.component.html'
})

export class CustomAvatarTopEyePatchComponent extends CustomAvatarTopBaseComponent {

  get option() { return TopType.Eyepatch; }

  readonly mask1: string = randomId('kip-mask');
  readonly path1: string = randomId('kip-path');

}
