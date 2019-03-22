/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { Option, EyebrowType } from '../../../options';

@Component({
  selector: '[kip-custom-avatar-eye-brow-raised-excited]',
  templateUrl: './raised-excited.component.html',
})

export class CustomAvatarEyebrowsRaisedExcitedComponent implements Option<EyebrowType> {
  option: EyebrowType = EyebrowType.RaisedExcited;
}