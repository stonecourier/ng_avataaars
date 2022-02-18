/* eslint-disable @angular-eslint/component-selector */

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Option, PetType } from '../../options';

@Component({
  selector: '[kip-custom-avatar-pet-fish]',
  templateUrl: './fish.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomAvatarPetFishComponent implements Option<PetType> {
  get option(): PetType { return PetType.Fish; }
}
