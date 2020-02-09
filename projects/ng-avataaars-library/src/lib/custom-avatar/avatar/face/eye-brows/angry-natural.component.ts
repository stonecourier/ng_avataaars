/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { Option, EyebrowType } from '../../../options';

@Component({
  selector: '[kip-custom-avatar-eye-brow-angry-natural]',
  templateUrl: './angry-natural.component.html',
})

export class CustomAvatarEyebrowsAngryNaturalComponent implements Option<EyebrowType> {
  get option() { return EyebrowType.AngryNatural; }
}
