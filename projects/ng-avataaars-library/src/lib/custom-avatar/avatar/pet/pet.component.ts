/* tslint:disable:component-selector */

import { Component, Input } from '@angular/core';
import { PetType } from '../../options';

@Component({
  selector: '[kip-custom-avatar-pet]',
  templateUrl: './pet.component.html',
})

export class CustomAvatarPetComponent {

  @Input() petType: PetType = PetType.Dog;
}
