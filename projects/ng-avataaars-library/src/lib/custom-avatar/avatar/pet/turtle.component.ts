/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { Option, PetType } from '../../options';

@Component({
  selector: '[kip-custom-avatar-pet-turtle]',
  templateUrl: './turtle.component.html'
})

export class CustomAvatarPetTurtleComponent implements Option<PetType> {
  get option() { return PetType.Turtle; }
}
