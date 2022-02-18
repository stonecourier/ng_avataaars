/* eslint-disable @angular-eslint/component-selector */

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EyeType, Option } from '../../../options';

@Component({
  selector: '[kip-custom-avatar-eyes-happy]',
  templateUrl: './happy.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomAvatarEyesHappyComponent implements Option<EyeType> {
  get option(): EyeType { return EyeType.Happy; }
}
