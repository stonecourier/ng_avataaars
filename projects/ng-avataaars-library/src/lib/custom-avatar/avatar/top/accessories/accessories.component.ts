/* eslint-disable @angular-eslint/component-selector */

import { Component, Input } from '@angular/core';
import { AccessoriesColor, AccessoriesType } from '../../../options';

@Component({
  selector: '[kip-custom-avatar-accessories]',
  templateUrl: './accessories.component.html'
})

export class CustomAvatarAccessoriesComponent {

  @Input() accessoriesType: AccessoriesType = AccessoriesType.Blank;
  @Input() accessoriesColor: AccessoriesColor = AccessoriesColor.Black;
}
