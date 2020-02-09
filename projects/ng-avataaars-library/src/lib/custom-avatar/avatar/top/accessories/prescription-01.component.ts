/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { AccessoriesType } from '../../../options';
import { randomId } from '../../../helper/randomid';
import { CustomAvatarAccessoriesBaseComponent } from './accessories-base.component';

@Component({
  selector: '[kip-custom-avatar-accessories-prescription1]',
  templateUrl: './prescription-01.component.html',
})

export class CustomAvatarAccessoriesPrescription01Component extends CustomAvatarAccessoriesBaseComponent {

  get option() { return AccessoriesType.Prescription01; }

  readonly filter1: string = randomId('kip-filter');
}
