/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { Option, AwardType } from '../../options';

@Component({
  selector: '[kip-custom-avatar-award-birthday-c]',
  templateUrl: './birthday-c.component.html',
})

export class CustomAvatarAwardBirthdayCComponent implements Option<AwardType> {
  get option() { return AwardType.BirthdayC; }
}
