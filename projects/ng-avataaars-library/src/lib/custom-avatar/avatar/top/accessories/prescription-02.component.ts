/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { randomId } from '../../../helper/randomid';
import { AccessoriesType } from '../../../options';
import { CustomAvatarAccessoriesBaseComponent } from './accessories-base.component';

@Component({
  selector: '[kip-custom-avatar-accessories-prescription2]',
  templateUrl: './prescription-02.component.html'
})

export class CustomAvatarAccessoriesPrescription02Component extends CustomAvatarAccessoriesBaseComponent {

  get option() { return AccessoriesType.Prescription02; }

  readonly filter1: string = randomId('kip-filter');
}
