/* eslint-disable @angular-eslint/component-selector */

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Option, PetType } from '../../options';

@Component({
  selector: '[kip-custom-avatar-pet-rat]',
  templateUrl: './rat.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomAvatarPetRatComponent implements Option<PetType> {
  get option(): PetType { return PetType.Rat; }
}
