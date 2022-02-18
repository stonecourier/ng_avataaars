/* eslint-disable @angular-eslint/component-selector */

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AwardType, Option } from '../../options';

@Component({
  selector: '[kip-custom-avatar-award-trophy-b]',
  templateUrl: './trophy-b.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomAvatarAwardTrophyBComponent implements Option<AwardType> {
  get option(): AwardType { return AwardType.TrophyB; }
}
