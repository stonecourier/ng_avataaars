/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { Option, PetType } from '../../options';

@Component({
  selector: '[kip-custom-avatar-pet-fish]',
  templateUrl: './fish.component.html',
})

export class CustomAvatarPetFishComponent implements Option<PetType> {
  option = PetType.Fish;
}
