/* eslint-disable @angular-eslint/component-selector */

import { Component, Input } from '@angular/core';
import { EarringColor, EarringType } from '../../../options';

@Component({
  selector: '[kip-custom-avatar-ear-ring]',
  templateUrl: './ear-ring.component.html'
})

export class CustomAvatarEarringComponent {

  @Input() earringType: EarringType = EarringType.Blank;
  @Input() earringColor: EarringColor = EarringColor.Black;

}
