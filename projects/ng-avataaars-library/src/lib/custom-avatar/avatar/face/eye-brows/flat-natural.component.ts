/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { Option, EyebrowType } from '../../../options';

@Component({
  selector: '[kip-custom-avatar-eye-brow-flat-natural]',
  templateUrl: './flat-natural.component.html',
})

export class CustomAvatarEyebrowsFlatNaturalComponent implements Option<EyebrowType> {
  option: EyebrowType.FlatNatural;
}
