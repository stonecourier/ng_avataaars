/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { AccessoriesType } from '../../../options';
import { randomId } from '../../../helper/randomid';
import { CustomAvatarAccessoriesBaseComponent } from './accessories-base.component';

@Component({
  selector: '[kip-custom-avatar-accessories-kurt]',
  templateUrl: './kurt.component.html',
})

export class CustomAvatarAccessoriesKurtComponent extends CustomAvatarAccessoriesBaseComponent {

  option = AccessoriesType.Kurt;

  filter1: string = randomId('kip-filter');
}
