/* tslint:disable:component-selector */

import { Component, Input } from '@angular/core';
import { MouthType } from '../../../options';

@Component({
  selector: '[kip-custom-avatar-mouth]',
  templateUrl: './mouth.component.html'
})

export class CustomAvatarMouthComponent {

  @Input() mouthType: MouthType = MouthType.Concerned;

}
