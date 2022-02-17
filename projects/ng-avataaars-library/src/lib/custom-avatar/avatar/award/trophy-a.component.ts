/* eslint-disable @angular-eslint/component-selector */

import { Component } from '@angular/core';
import { AwardType, Option } from '../../options';

@Component({
  selector: '[kip-custom-avatar-award-trophy-a]',
  templateUrl: './trophy-a.component.html'
})

export class CustomAvatarAwardTrophyAComponent implements Option<AwardType> {
  get option(): AwardType { return AwardType.TrophyA; }
}
