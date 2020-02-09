/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { Option, NoseType } from '../../../options';

@Component({
  selector: '[kip-custom-avatar-nose-default]',
  templateUrl: './default.component.html',
})

export class CustomAvatarNoseDefaultComponent implements Option<NoseType> {
  get option() { return NoseType.Default; }
}
