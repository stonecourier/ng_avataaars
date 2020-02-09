/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { Option, AwardType } from '../../options';

@Component({
  selector: '[kip-custom-avatar-award-trophy-a]',
  templateUrl: './trophy-a.component.html',
})

export class CustomAvatarAwardTrophyAComponent implements Option<AwardType> {
  get option() { return AwardType.TrophyA; }
}
