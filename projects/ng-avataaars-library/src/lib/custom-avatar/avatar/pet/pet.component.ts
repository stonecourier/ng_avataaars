/* eslint-disable @angular-eslint/component-selector */

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PetType } from '../../options';

@Component({
  selector: '[kip-custom-avatar-pet]',
  templateUrl: './pet.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomAvatarPetComponent {

  @Input() petType: PetType = PetType.Dog;
}
