/* eslint-disable @angular-eslint/component-selector */

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EyebrowType, Option } from '../../../options';

@Component({
  selector: '[kip-custom-avatar-eye-brow-default-natural]',
  templateUrl: './default-natural.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomAvatarEyebrowsDefaultNaturalComponent implements Option<EyebrowType> {
  get option(): EyebrowType { return EyebrowType.DefaultNatural; }
}
