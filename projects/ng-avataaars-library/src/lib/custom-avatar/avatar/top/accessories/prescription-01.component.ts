/* eslint-disable @angular-eslint/component-selector */

import { Component } from '@angular/core';
import { randomId } from '../../../helper/randomid';
import { AccessoriesType } from '../../../options';
import { CustomAvatarAccessoriesBaseComponent } from './accessories-base.component';

@Component({
  selector: '[kip-custom-avatar-accessories-prescription1]',
  templateUrl: './prescription-01.component.html'
})

export class CustomAvatarAccessoriesPrescription01Component extends CustomAvatarAccessoriesBaseComponent {

  get option(): AccessoriesType { return AccessoriesType.Prescription01; }

  readonly filter1: string = randomId('kip-filter');
}
