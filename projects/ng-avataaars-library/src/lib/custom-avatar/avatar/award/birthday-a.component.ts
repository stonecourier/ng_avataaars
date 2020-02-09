/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { Option, AwardType } from '../../options';

@Component({
  selector: '[kip-custom-avatar-award-birthday-a]',
  templateUrl: './birthday-a.component.html',
})

export class CustomAvatarAwardBirthdayAComponent implements Option<AwardType> {
  get option() { return AwardType.BirthdayA; }
}
