/* eslint-disable @angular-eslint/component-selector */

import { Component } from '@angular/core';
import { AwardType, Option } from '../../options';

@Component({
  selector: '[kip-custom-avatar-award-correct]',
  templateUrl: './correct.component.html'
})

export class CustomAvatarAwardCorrectComponent implements Option<AwardType> {
  get option(): AwardType { return AwardType.Correct; }
}
