/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { Option, AwardType } from '../../options';

@Component({
  selector: '[kip-custom-avatar-award-birthday-d]',
  templateUrl: './birthday-d.component.html',
})

export class CustomAvatarAwardBirthdayDComponent implements Option<AwardType> {
  option = AwardType.BirthdayD;
}
