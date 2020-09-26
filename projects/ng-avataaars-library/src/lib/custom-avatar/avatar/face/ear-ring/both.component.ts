/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { EarringType } from '../../../options';
import { CustomAvatarEarringBaseComponent } from './ear-ring-base.component';

@Component({
  selector: '[kip-custom-avatar-ear-ring-both]',
  templateUrl: './both.component.html'
})

export class CustomAvatarEarringBothComponent extends CustomAvatarEarringBaseComponent {

  get option(): EarringType { return EarringType.Both; }

}
