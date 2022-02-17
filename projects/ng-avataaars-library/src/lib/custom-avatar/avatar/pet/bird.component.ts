/* eslint-disable @angular-eslint/component-selector */

import { Component } from '@angular/core';
import { Option, PetType } from '../../options';

@Component({
  selector: '[kip-custom-avatar-pet-bird]',
  templateUrl: './bird.component.html'
})

export class CustomAvatarPetBirdComponent implements Option<PetType> {
  get option(): PetType { return PetType.Bird; }
}
