/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { EyebrowType, Option } from '../../../options';

@Component({
  selector: '[kip-custom-avatar-eye-brow-frown-natural]',
  templateUrl: './frown-natural.component.html'
})

export class CustomAvatarEyebrowsFrownNaturalComponent implements Option<EyebrowType> {
  get option() { return EyebrowType.FrownNatural; }
}
