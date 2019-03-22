/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { Option, EyebrowType } from '../../../options';

@Component({
  selector: '[kip-custom-avatar-eye-brow-unibrow-natural]',
  templateUrl: './unibrow-natural.component.html',
})

export class CustomAvatarEyebrowsUnibrowNaturalComponent implements Option<EyebrowType> {
  option: EyebrowType = EyebrowType.UnibrowNatural;
}
