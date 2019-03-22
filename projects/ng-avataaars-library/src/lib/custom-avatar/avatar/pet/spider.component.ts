/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { Option, PetType } from '../../options';

@Component({
  selector: '[kip-custom-avatar-pet-spider]',
  templateUrl: './spider.component.html',
})

export class CustomAvatarPetSpiderComponent implements Option<PetType> {
  option = PetType.Spider;
}