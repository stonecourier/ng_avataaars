/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { EyebrowType, Option } from '../../../options';

@Component({
  selector: '[kip-custom-avatar-eye-brow-default]',
  templateUrl: './default.component.html'
})

export class CustomAvatarEyebrowsDefaultComponent implements Option<EyebrowType> {
  get option(): EyebrowType { return EyebrowType.Default; }
}
