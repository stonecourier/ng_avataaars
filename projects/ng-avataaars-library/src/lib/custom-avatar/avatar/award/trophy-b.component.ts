/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { AwardType, Option } from '../../options';

@Component({
  selector: '[kip-custom-avatar-award-trophy-b]',
  templateUrl: './trophy-b.component.html'
})

export class CustomAvatarAwardTrophyBComponent implements Option<AwardType> {
  get option() { return AwardType.TrophyB; }
}
