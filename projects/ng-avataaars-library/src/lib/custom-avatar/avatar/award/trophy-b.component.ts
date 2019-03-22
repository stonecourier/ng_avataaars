/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { Option, AwardType } from '../../options';

@Component({
  selector: '[kip-custom-avatar-award-trophy-b]',
  templateUrl: './trophy-b.component.html',
})

export class CustomAvatarAwardTrophyBComponent implements Option<AwardType> {
  option = AwardType.TrophyB;
}
