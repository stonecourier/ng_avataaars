/* eslint-disable @angular-eslint/component-selector */

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EyebrowType, Option } from '../../../options';

@Component({
  selector: '[kip-custom-avatar-eye-brow-sad-concerned-natural]',
  templateUrl: './sad-concerned-natural.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomAvatarEyebrowsSadConcernedNaturalComponent implements Option<EyebrowType> {
  get option(): EyebrowType { return EyebrowType.SadConcernedNatural; }
}
