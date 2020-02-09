/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { EarringType } from '../../../options';
import { CustomAvatarEarringBaseComponent } from './ear-ring-base.component';

@Component({
  selector: '[kip-custom-avatar-ear-ring-left]',
  templateUrl: './left.component.html'
})

export class CustomAvatarEarringLeftComponent extends CustomAvatarEarringBaseComponent {

  get option() { return EarringType.Left; }

}
