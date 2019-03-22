/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { Option, EyebrowType } from '../../../options';

@Component({
  selector: '[kip-custom-avatar-eye-brow-frown-natural]',
  templateUrl: './frown-natural.component.html',
})

export class CustomAvatarEyebrowsFrownNaturalComponent implements Option<EyebrowType> {
  option: EyebrowType = EyebrowType.FrownNatural;
}
