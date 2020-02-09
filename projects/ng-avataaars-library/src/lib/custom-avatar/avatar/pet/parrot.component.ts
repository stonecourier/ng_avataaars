/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { Option, PetType } from '../../options';

@Component({
  selector: '[kip-custom-avatar-pet-parrot]',
  templateUrl: './parrot.component.html',
})

export class CustomAvatarPetParrotComponent implements Option<PetType> {
  get option() { return PetType.Parrot; }
}
