/* eslint-disable @angular-eslint/component-selector */

import { Component } from '@angular/core';
import { Option, PetType } from '../../options';

@Component({
  selector: '[kip-custom-avatar-pet-chick]',
  templateUrl: './chick.component.html'
})

export class CustomAvatarPetChickComponent implements Option<PetType> {
  get option(): PetType { return PetType.Chick; }
}
