/* eslint-disable @angular-eslint/component-selector */

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { randomId } from '../../../helper/randomid';
import { AccessoriesType } from '../../../options';
import { CustomAvatarAccessoriesBaseComponent } from './accessories-base.component';

@Component({
  selector: '[kip-custom-avatar-accessories-sunglasses]',
  templateUrl: './sunglasses.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomAvatarAccessoriesSunglassesComponent extends CustomAvatarAccessoriesBaseComponent {

  get option(): AccessoriesType { return AccessoriesType.Sunglasses; }

  readonly path1: string = randomId('kip-path');
  readonly path2: string = randomId('kip-path');
  readonly filter1: string = randomId('kip-filter');
  readonly linearGradient1: string = randomId('kip-linear-gradient');
  readonly linearGradient2: string = randomId('kip-linear-gradient');
}
