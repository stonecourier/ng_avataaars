/* eslint-disable @angular-eslint/component-selector */

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AwardType, Option } from '../../options';

@Component({
  selector: '[kip-custom-avatar-award-birthday-d]',
  templateUrl: './birthday-d.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomAvatarAwardBirthdayDComponent implements Option<AwardType> {
  get option(): AwardType { return AwardType.BirthdayD; }
}
