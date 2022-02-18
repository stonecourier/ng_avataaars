/* eslint-disable @angular-eslint/component-selector */

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Option, PetType } from '../../options';

@Component({
  selector: '[kip-custom-avatar-pet-cat]',
  templateUrl: './cat.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomAvatarPetCatComponent implements Option<PetType> {
  get option(): PetType { return PetType.Cat; }
}
