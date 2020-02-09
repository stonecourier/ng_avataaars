/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { AwardType, Option } from '../../options';

@Component({
  selector: '[kip-custom-avatar-award-trophy-a]',
  templateUrl: './trophy-a.component.html'
})

export class CustomAvatarAwardTrophyAComponent implements Option<AwardType> {
  get option() { return AwardType.TrophyA; }
}
