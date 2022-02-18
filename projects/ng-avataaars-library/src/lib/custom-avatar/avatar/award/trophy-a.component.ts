/* eslint-disable @angular-eslint/component-selector */

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AwardType, Option } from '../../options';

@Component({
  selector: '[kip-custom-avatar-award-trophy-a]',
  templateUrl: './trophy-a.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomAvatarAwardTrophyAComponent implements Option<AwardType> {
  get option(): AwardType { return AwardType.TrophyA; }
}
