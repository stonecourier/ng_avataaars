/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { EyebrowType, Option } from '../../../options';

@Component({
  selector: '[kip-custom-avatar-eye-brow-up-down-natural]',
  templateUrl: './up-down-natural.component.html'
})

export class CustomAvatarEyebrowsUpDownNaturalComponent implements Option<EyebrowType> {
  get option() { return EyebrowType.UpDownNatural; }
}
