/* eslint-disable @angular-eslint/component-selector */

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NoseType, Option } from '../../../options';

@Component({
  selector: '[kip-custom-avatar-nose-clown]',
  templateUrl: './clown.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomAvatarNoseClownComponent implements Option<NoseType> {
  get option(): NoseType { return NoseType.Clown; }
}
