/* eslint-disable @angular-eslint/component-selector */

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Option, PetType } from '../../options';

@Component({
  selector: '[kip-custom-avatar-pet-chick]',
  templateUrl: './chick.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomAvatarPetChickComponent implements Option<PetType> {
  get option(): PetType { return PetType.Chick; }
}
