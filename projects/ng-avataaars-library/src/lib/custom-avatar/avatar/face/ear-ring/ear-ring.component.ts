/* tslint:disable:component-selector */

import { Component, Input } from '@angular/core';
import { EarringType, EarringColor } from '../../../options';

@Component({
  selector: '[kip-custom-avatar-ear-ring]',
  templateUrl: './ear-ring.component.html',
})

export class CustomAvatarEarringComponent {

  @Input() earringType: EarringType = EarringType.Blank;
  @Input() earringColor: EarringColor = EarringColor.Black;

}
