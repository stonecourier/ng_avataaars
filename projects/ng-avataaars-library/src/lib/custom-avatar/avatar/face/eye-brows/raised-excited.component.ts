/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { EyebrowType, Option } from '../../../options';

@Component({
  selector: '[kip-custom-avatar-eye-brow-raised-excited]',
  templateUrl: './raised-excited.component.html'
})

export class CustomAvatarEyebrowsRaisedExcitedComponent implements Option<EyebrowType> {
  get option(): EyebrowType { return EyebrowType.RaisedExcited; }
}
