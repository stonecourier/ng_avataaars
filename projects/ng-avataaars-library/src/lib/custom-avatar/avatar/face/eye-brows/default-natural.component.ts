/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { EyebrowType, Option } from '../../../options';

@Component({
  selector: '[kip-custom-avatar-eye-brow-default-natural]',
  templateUrl: './default-natural.component.html'
})

export class CustomAvatarEyebrowsDefaultNaturalComponent implements Option<EyebrowType> {
  get option() { return EyebrowType.DefaultNatural; }
}
