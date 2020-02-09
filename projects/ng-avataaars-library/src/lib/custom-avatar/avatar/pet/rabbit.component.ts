/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { Option, PetType } from '../../options';

@Component({
  selector: '[kip-custom-avatar-pet-rabbit]',
  templateUrl: './rabbit.component.html',
})

export class CustomAvatarPetRabbitComponent implements Option<PetType> {
  get option() { return PetType.Rabbit; }
}
