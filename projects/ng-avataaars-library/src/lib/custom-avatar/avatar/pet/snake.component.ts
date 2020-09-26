/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { Option, PetType } from '../../options';

@Component({
  selector: '[kip-custom-avatar-pet-snake]',
  templateUrl: './snake.component.html'
})

export class CustomAvatarPetSnakeComponent implements Option<PetType> {
  get option(): PetType { return PetType.Snake; }
}
