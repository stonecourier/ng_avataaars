/* eslint-disable @angular-eslint/component-selector */

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Option, PetType } from '../../options';

@Component({
  selector: '[kip-custom-avatar-pet-flea]',
  templateUrl: './flea.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomAvatarPetFleaComponent implements Option<PetType> {
  get option(): PetType { return PetType.Flea; }
}
