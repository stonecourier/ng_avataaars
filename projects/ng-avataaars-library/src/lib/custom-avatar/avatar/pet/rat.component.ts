/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { Option, PetType } from '../../options';

@Component({
  selector: '[kip-custom-avatar-pet-rat]',
  templateUrl: './rat.component.html',
})

export class CustomAvatarPetRatComponent implements Option<PetType> {
  get option() { return PetType.Rat; }
}
