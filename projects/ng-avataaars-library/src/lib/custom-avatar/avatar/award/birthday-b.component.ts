/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { AwardType, Option } from '../../options';

@Component({
  selector: '[kip-custom-avatar-award-birthday-b]',
  templateUrl: './birthday-b.component.html'
})

export class CustomAvatarAwardBirthdayBComponent implements Option<AwardType> {
  get option(): AwardType { return AwardType.BirthdayB; }
}
