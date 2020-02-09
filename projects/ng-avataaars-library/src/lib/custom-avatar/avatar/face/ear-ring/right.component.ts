/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { EarringType } from '../../../options';
import { CustomAvatarEarringBaseComponent } from './ear-ring-base.component';

@Component({
  selector: '[kip-custom-avatar-ear-ring-right]',
  templateUrl: './right.component.html',
})

export class CustomAvatarEarringRightComponent extends CustomAvatarEarringBaseComponent {

  get option() { return EarringType.Right; }

}
