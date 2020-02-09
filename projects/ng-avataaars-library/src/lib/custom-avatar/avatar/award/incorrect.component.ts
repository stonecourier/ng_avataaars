/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { Option, AwardType } from '../../options';

@Component({
  selector: '[kip-custom-avatar-award-incorrect]',
  templateUrl: './incorrect.component.html',
})

export class CustomAvatarAwardIncorrectComponent implements Option<AwardType> {
  get option() { return AwardType.Incorrect; }
}
