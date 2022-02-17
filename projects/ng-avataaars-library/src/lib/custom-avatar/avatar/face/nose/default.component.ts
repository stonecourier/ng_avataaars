/* eslint-disable @angular-eslint/component-selector */

import { Component } from '@angular/core';
import { NoseType, Option } from '../../../options';

@Component({
  selector: '[kip-custom-avatar-nose-default]',
  templateUrl: './default.component.html'
})

export class CustomAvatarNoseDefaultComponent implements Option<NoseType> {
  get option(): NoseType { return NoseType.Default; }
}
