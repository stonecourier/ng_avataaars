/* eslint-disable @angular-eslint/component-selector */

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { EarringColor, EarringType } from '../../../options';

@Component({
  selector: '[kip-custom-avatar-ear-ring]',
  templateUrl: './ear-ring.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomAvatarEarringComponent {

  @Input() earringType: EarringType = EarringType.Blank;
  @Input() earringColor: EarringColor = EarringColor.Black;

}
