/* eslint-disable @angular-eslint/component-selector */

import { Component } from '@angular/core';
import { EyebrowType, Option } from '../../../options';

@Component({
  selector: '[kip-custom-avatar-eye-brow-raised-excited-natural]',
  templateUrl: './raised-excited-natural.component.html'
})

export class CustomAvatarEyebrowsRaisedExcitedNaturalComponent implements Option<EyebrowType> {
  get option(): EyebrowType { return EyebrowType.RaisedExcitedNatural; }
}
