/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { AwardType, Option } from '../../options';

@Component({
  selector: '[kip-custom-avatar-award-birthday-a]',
  templateUrl: './birthday-a.component.html'
})

export class CustomAvatarAwardBirthdayAComponent implements Option<AwardType> {
  get option(): AwardType { return AwardType.BirthdayA; }
}
