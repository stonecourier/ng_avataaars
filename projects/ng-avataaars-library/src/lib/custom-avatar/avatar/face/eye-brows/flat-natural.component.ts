/* eslint-disable @angular-eslint/component-selector */

import { Component } from '@angular/core';
import { EyebrowType, Option } from '../../../options';

@Component({
  selector: '[kip-custom-avatar-eye-brow-flat-natural]',
  templateUrl: './flat-natural.component.html'
})

export class CustomAvatarEyebrowsFlatNaturalComponent implements Option<EyebrowType> {
  get option(): EyebrowType { return EyebrowType.FlatNatural; }
}
