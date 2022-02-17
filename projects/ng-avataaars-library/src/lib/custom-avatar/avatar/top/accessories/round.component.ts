/* eslint-disable @angular-eslint/component-selector */

import { Component } from '@angular/core';
import { randomId } from '../../../helper/randomid';
import { AccessoriesType } from '../../../options';
import { CustomAvatarAccessoriesBaseComponent } from './accessories-base.component';

@Component({
  selector: '[kip-custom-avatar-accessories-round]',
  templateUrl: './round.component.html'
})

export class CustomAvatarAccessoriesRoundComponent extends CustomAvatarAccessoriesBaseComponent {

  get option(): AccessoriesType { return AccessoriesType.Round; }

  readonly path1: string = randomId('kip-path');
  readonly filter1: string = randomId('kip-filter');
}
