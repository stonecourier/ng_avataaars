/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { Option, EyebrowType } from '../../../options';

@Component({
  selector: '[kip-custom-avatar-eye-brow-sad-concerned]',
  templateUrl: './sad-concerned.component.html',
})

export class CustomAvatarEyebrowsSadConcernedComponent implements Option<EyebrowType> {
  get option() { return EyebrowType.SadConcerned; }
}
