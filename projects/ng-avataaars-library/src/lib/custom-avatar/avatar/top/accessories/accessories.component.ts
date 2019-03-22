/* tslint:disable:component-selector */

import { Component, Input } from '@angular/core';
import { AccessoriesType, AccessoriesColor } from '../../../options';

@Component({
  selector: '[kip-custom-avatar-accessories]',
  templateUrl: './accessories.component.html',
})

export class CustomAvatarAccessoriesComponent {

  @Input()
  accessoriesType: AccessoriesType;

  @Input()
  accessoriesColor: AccessoriesColor;
}