/* eslint-disable @angular-eslint/component-selector */

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EyeType, Option } from '../../../options';

@Component({
  selector: '[kip-custom-avatar-eyes-hearts]',
  templateUrl: './hearts.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomAvatarEyesHeartsComponent implements Option<EyeType> {
  get option(): EyeType { return EyeType.Hearts; }
}
