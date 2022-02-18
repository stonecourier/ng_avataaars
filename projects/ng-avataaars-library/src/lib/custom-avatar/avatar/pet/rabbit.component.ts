/* eslint-disable @angular-eslint/component-selector */

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Option, PetType } from '../../options';

@Component({
  selector: '[kip-custom-avatar-pet-rabbit]',
  templateUrl: './rabbit.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomAvatarPetRabbitComponent implements Option<PetType> {
  get option(): PetType { return PetType.Rabbit; }
}
