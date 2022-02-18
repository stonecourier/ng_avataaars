/* eslint-disable @angular-eslint/component-selector */

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Option, PetType } from '../../options';

@Component({
  selector: '[kip-custom-avatar-pet-bird]',
  templateUrl: './bird.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomAvatarPetBirdComponent implements Option<PetType> {
  get option(): PetType { return PetType.Bird; }
}
