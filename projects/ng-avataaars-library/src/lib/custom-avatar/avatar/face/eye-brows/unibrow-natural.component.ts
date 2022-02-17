/* eslint-disable @angular-eslint/component-selector */

import { Component } from '@angular/core';
import { EyebrowType, Option } from '../../../options';

@Component({
  selector: '[kip-custom-avatar-eye-brow-unibrow-natural]',
  templateUrl: './unibrow-natural.component.html'
})

export class CustomAvatarEyebrowsUnibrowNaturalComponent implements Option<EyebrowType> {
  get option(): EyebrowType { return EyebrowType.UnibrowNatural; }
}
