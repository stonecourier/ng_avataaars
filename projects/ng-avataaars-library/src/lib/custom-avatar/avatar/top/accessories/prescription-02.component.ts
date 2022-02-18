/* eslint-disable @angular-eslint/component-selector */

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { randomId } from '../../../helper/randomid';
import { AccessoriesType } from '../../../options';
import { CustomAvatarAccessoriesBaseComponent } from './accessories-base.component';

@Component({
  selector: '[kip-custom-avatar-accessories-prescription2]',
  templateUrl: './prescription-02.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomAvatarAccessoriesPrescription02Component extends CustomAvatarAccessoriesBaseComponent {

  get option(): AccessoriesType { return AccessoriesType.Prescription02; }

  readonly filter1: string = randomId('kip-filter');
}
