/* eslint-disable @angular-eslint/component-selector */

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Option, PetType } from '../../options';

@Component({
  selector: '[kip-custom-avatar-pet-hamster]',
  templateUrl: './hamster.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomAvatarPetHamsterComponent implements Option<PetType> {
  get option(): PetType { return PetType.Hamster; }
}
