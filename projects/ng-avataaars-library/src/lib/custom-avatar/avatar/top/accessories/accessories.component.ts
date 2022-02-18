/* eslint-disable @angular-eslint/component-selector */

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AccessoriesColor, AccessoriesType } from '../../../options';

@Component({
  selector: '[kip-custom-avatar-accessories]',
  templateUrl: './accessories.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomAvatarAccessoriesComponent {

  @Input() accessoriesType: AccessoriesType = AccessoriesType.Blank;
  @Input() accessoriesColor: AccessoriesColor = AccessoriesColor.Black;
}
