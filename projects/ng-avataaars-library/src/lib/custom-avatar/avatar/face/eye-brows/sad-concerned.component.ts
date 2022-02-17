/* eslint-disable @angular-eslint/component-selector */

import { Component } from '@angular/core';
import { EyebrowType, Option } from '../../../options';

@Component({
  selector: '[kip-custom-avatar-eye-brow-sad-concerned]',
  templateUrl: './sad-concerned.component.html'
})

export class CustomAvatarEyebrowsSadConcernedComponent implements Option<EyebrowType> {
  get option(): EyebrowType { return EyebrowType.SadConcerned; }
}
