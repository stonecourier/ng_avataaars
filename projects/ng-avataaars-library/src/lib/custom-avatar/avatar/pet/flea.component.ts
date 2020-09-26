/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { Option, PetType } from '../../options';

@Component({
  selector: '[kip-custom-avatar-pet-flea]',
  templateUrl: './flea.component.html'
})

export class CustomAvatarPetFleaComponent implements Option<PetType> {
  get option(): PetType { return PetType.Flea; }
}
