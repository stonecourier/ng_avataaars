/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { AccessoriesType } from '../../../options';
import { randomId } from '../../../helper/randomid';
import { CustomAvatarAccessoriesBaseComponent } from './accessories-base.component';

@Component({
  selector: '[kip-custom-avatar-accessories-prescription2]',
  templateUrl: './prescription-02.component.html',
})

export class CustomAvatarAccessoriesPrescription02Component extends CustomAvatarAccessoriesBaseComponent {

  option = AccessoriesType.Prescription02;

  filter1: string = randomId('kip-filter');
}