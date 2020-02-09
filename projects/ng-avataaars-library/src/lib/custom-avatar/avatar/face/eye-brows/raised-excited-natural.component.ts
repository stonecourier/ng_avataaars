/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { Option, EyebrowType } from '../../../options';

@Component({
  selector: '[kip-custom-avatar-eye-brow-raised-excited-natural]',
  templateUrl: './raised-excited-natural.component.html',
})

export class CustomAvatarEyebrowsRaisedExcitedNaturalComponent implements Option<EyebrowType> {
  get option() { return EyebrowType.RaisedExcitedNatural; }
}
