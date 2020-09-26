/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { Option, PetType } from '../../options';

@Component({
  selector: '[kip-custom-avatar-pet-hamster]',
  templateUrl: './hamster.component.html'
})

export class CustomAvatarPetHamsterComponent implements Option<PetType> {
  get option(): PetType { return PetType.Hamster; }
}
