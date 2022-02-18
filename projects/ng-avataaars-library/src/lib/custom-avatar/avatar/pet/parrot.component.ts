/* eslint-disable @angular-eslint/component-selector */

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Option, PetType } from '../../options';

@Component({
  selector: '[kip-custom-avatar-pet-parrot]',
  templateUrl: './parrot.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomAvatarPetParrotComponent implements Option<PetType> {
  get option(): PetType { return PetType.Parrot; }
}
