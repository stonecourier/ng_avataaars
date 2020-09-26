/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { NoseType, Option } from '../../../options';

@Component({
  selector: '[kip-custom-avatar-nose-clown]',
  templateUrl: './clown.component.html'
})

export class CustomAvatarNoseClownComponent implements Option<NoseType> {
  get option(): NoseType { return NoseType.Clown; }
}
