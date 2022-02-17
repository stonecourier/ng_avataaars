/* eslint-disable @angular-eslint/component-selector */

import { Component } from '@angular/core';
import { Option, PetType } from '../../options';

@Component({
  selector: '[kip-custom-avatar-pet-dog]',
  templateUrl: './dog.component.html'
})

export class CustomAvatarPetDogComponent implements Option<PetType> {
  get option(): PetType { return PetType.Dog; }
}
