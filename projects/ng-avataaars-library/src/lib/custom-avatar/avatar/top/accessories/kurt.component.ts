/* eslint-disable @angular-eslint/component-selector */

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { randomId } from '../../../helper/randomid';
import { AccessoriesType } from '../../../options';
import { CustomAvatarAccessoriesBaseComponent } from './accessories-base.component';

@Component({
  selector: '[kip-custom-avatar-accessories-kurt]',
  templateUrl: './kurt.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomAvatarAccessoriesKurtComponent extends CustomAvatarAccessoriesBaseComponent {

  get option(): AccessoriesType { return AccessoriesType.Kurt; }

  readonly filter1: string = randomId('kip-filter');
}
