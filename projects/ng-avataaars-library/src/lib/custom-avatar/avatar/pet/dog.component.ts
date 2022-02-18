/* eslint-disable @angular-eslint/component-selector */

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Option, PetType } from '../../options';

@Component({
  selector: '[kip-custom-avatar-pet-dog]',
  templateUrl: './dog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomAvatarPetDogComponent implements Option<PetType> {
  get option(): PetType { return PetType.Dog; }
}
