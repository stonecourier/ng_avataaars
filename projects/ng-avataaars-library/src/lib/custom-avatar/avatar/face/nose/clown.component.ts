/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { Option, NoseType } from '../../../options';

@Component({
  selector: '[kip-custom-avatar-nose-clown]',
  templateUrl: './clown.component.html',
})

export class CustomAvatarNoseClownComponent implements Option<NoseType> {
  get option() { return NoseType.Clown; }
}
