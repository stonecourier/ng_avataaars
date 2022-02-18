/* eslint-disable @angular-eslint/component-selector */

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AwardType, Option } from '../../options';

@Component({
  selector: '[kip-custom-avatar-award-birthday-c]',
  templateUrl: './birthday-c.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomAvatarAwardBirthdayCComponent implements Option<AwardType> {
  get option(): AwardType { return AwardType.BirthdayC; }
}
