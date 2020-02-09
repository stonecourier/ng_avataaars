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

  get option() { return AccessoriesType.Wayfarers; }

  readonly path1: string = randomId('kip-path');
  readonly path2: string = randomId('kip-path');
  readonly filter1: string = randomId('kip-filter');
  readonly linearGradient1: string = randomId('kip-linear-gradient');
}
