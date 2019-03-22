/* tslint:disable:component-selector */

import { Component, Input } from '@angular/core';
import { NoseType } from '../../../options';

@Component({
  selector: '[kip-custom-avatar-nose]',
  templateUrl: './nose.component.html',
})

export class CustomAvatarNoseComponent {

  @Input()
  noseType: NoseType = NoseType.Default;

}
