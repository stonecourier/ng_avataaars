/* eslint-disable @angular-eslint/component-selector */

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AwardType, Option } from '../../options';

@Component({
  selector: '[kip-custom-avatar-award-incorrect]',
  templateUrl: './incorrect.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomAvatarAwardIncorrectComponent implements Option<AwardType> {
  get option(): AwardType { return AwardType.Incorrect; }
}
