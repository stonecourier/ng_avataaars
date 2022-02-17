/* eslint-disable @angular-eslint/component-selector */

import { Component } from '@angular/core';
import { EyebrowType, Option } from '../../../options';

@Component({
  selector: '[kip-custom-avatar-eye-brow-angry-natural]',
  templateUrl: './angry-natural.component.html'
})

export class CustomAvatarEyebrowsAngryNaturalComponent implements Option<EyebrowType> {
  get option(): EyebrowType { return EyebrowType.AngryNatural; }
}
