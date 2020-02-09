/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { Option, AwardType } from '../../options';

@Component({
  selector: '[kip-custom-avatar-award-birthday-b]',
  templateUrl: './birthday-b.component.html',
})

export class CustomAvatarAwardBirthdayBComponent implements Option<AwardType> {
  get option() { return AwardType.BirthdayB; }
}
