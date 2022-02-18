/* eslint-disable @angular-eslint/component-selector */

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EyebrowType, Option } from '../../../options';

@Component({
  selector: '[kip-custom-avatar-eye-brow-up-down-natural]',
  templateUrl: './up-down-natural.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomAvatarEyebrowsUpDownNaturalComponent implements Option<EyebrowType> {
  get option(): EyebrowType { return EyebrowType.UpDownNatural; }
}
