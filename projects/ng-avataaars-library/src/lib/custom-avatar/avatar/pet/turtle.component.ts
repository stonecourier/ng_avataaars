/* eslint-disable @angular-eslint/component-selector */

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Option, PetType } from '../../options';

@Component({
  selector: '[kip-custom-avatar-pet-turtle]',
  templateUrl: './turtle.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomAvatarPetTurtleComponent implements Option<PetType> {
  get option(): PetType { return PetType.Turtle; }
}
