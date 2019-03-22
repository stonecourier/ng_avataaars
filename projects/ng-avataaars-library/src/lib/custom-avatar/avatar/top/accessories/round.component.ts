/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { AccessoriesType } from '../../../options';
import { randomId } from '../../../helper/randomid';
import { CustomAvatarAccessoriesBaseComponent } from './accessories-base.component';

@Component({
  selector: '[kip-custom-avatar-accessories-round]',
  templateUrl: './round.component.html',
})

export class CustomAvatarAccessoriesRoundComponent extends CustomAvatarAccessoriesBaseComponent {

  option = AccessoriesType.Round;

  path1: string = randomId('kip-path');
  filter1: string = randomId('kip-filter');
}
