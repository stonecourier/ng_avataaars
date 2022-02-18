/* eslint-disable @angular-eslint/component-selector */

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Option, PetType } from '../../options';

@Component({
  selector: '[kip-custom-avatar-pet-spider]',
  templateUrl: './spider.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomAvatarPetSpiderComponent implements Option<PetType> {
  get option(): PetType { return PetType.Spider; }
}
