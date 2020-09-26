/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { Option, PetType } from '../../options';

@Component({
  selector: '[kip-custom-avatar-pet-cat]',
  templateUrl: './cat.component.html'
})

export class CustomAvatarPetCatComponent implements Option<PetType> {
  get option(): PetType { return PetType.Cat; }
}
