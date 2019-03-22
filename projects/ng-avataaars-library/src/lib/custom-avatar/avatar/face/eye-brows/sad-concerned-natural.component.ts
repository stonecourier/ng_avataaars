/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { Option, EyebrowType } from '../../../options';

@Component({
  selector: '[kip-custom-avatar-eye-brow-sad-concerned-natural]',
  templateUrl: './sad-concerned-natural.component.html',
})

export class CustomAvatarEyebrowsSadConcernedNaturalComponent implements Option<EyebrowType> {
  option: EyebrowType = EyebrowType.SadConcernedNatural;
}
