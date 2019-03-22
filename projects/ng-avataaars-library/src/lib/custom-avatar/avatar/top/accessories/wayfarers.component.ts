/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { AccessoriesType } from '../../../options';
import { randomId } from '../../../helper/randomid';
import { CustomAvatarAccessoriesBaseComponent } from './accessories-base.component';

@Component({
  selector: '[kip-custom-avatar-accessories-wayfarers]',
  templateUrl: './wayfarers.component.html',
})

export class CustomAvatarAccessoriesWayfarersComponent extends CustomAvatarAccessoriesBaseComponent {

  option = AccessoriesType.Wayfarers;

  path1: string = randomId('kip-path');
  path2: string = randomId('kip-path');
  filter1: string = randomId('kip-filter');
  linearGradient1: string = randomId('kip-linear-gradient');
}
