/* eslint-disable @angular-eslint/component-selector */

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EyebrowType, Option } from '../../../options';

@Component({
  selector: '[kip-custom-avatar-eye-brow-raised-excited]',
  templateUrl: './raised-excited.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomAvatarEyebrowsRaisedExcitedComponent implements Option<EyebrowType> {
  get option(): EyebrowType { return EyebrowType.RaisedExcited; }
}
