/* eslint-disable @angular-eslint/component-selector */

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { randomId } from '../../../helper/randomid';
import { FacialHairType } from '../../../options';
import { CustomAvatarFacialHairBaseComponent } from './facial-hair-base.component';

@Component({
  selector: '[kip-custom-avatar-facial-hair-beard-medium]',
  templateUrl: './beard-medium.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomAvatarFacialHairBeardMediumComponent extends CustomAvatarFacialHairBaseComponent {

  get option(): FacialHairType { return FacialHairType.BeardMedium; }

  readonly mask1: string = randomId('kip-mask');
  readonly path1: string = randomId('kip-path');
}
