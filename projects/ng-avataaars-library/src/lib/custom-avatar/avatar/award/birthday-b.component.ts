/* eslint-disable @angular-eslint/component-selector */

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AwardType, Option } from '../../options';

@Component({
  selector: '[kip-custom-avatar-award-birthday-b]',
  templateUrl: './birthday-b.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomAvatarAwardBirthdayBComponent implements Option<AwardType> {
  get option(): AwardType { return AwardType.BirthdayB; }
}
