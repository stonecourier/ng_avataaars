/* eslint-disable @angular-eslint/component-selector */

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AwardType, Option } from '../../options';

@Component({
  selector: '[kip-custom-avatar-award-birthday-a]',
  templateUrl: './birthday-a.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomAvatarAwardBirthdayAComponent implements Option<AwardType> {
  get option(): AwardType { return AwardType.BirthdayA; }
}
