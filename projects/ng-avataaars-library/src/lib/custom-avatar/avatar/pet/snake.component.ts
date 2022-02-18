/* eslint-disable @angular-eslint/component-selector */

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Option, PetType } from '../../options';

@Component({
  selector: '[kip-custom-avatar-pet-snake]',
  templateUrl: './snake.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomAvatarPetSnakeComponent implements Option<PetType> {
  get option(): PetType { return PetType.Snake; }
}
