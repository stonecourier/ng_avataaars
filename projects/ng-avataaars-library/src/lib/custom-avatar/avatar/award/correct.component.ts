/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { AwardType, Option } from '../../options';

@Component({
  selector: '[kip-custom-avatar-award-correct]',
  templateUrl: './correct.component.html'
})

export class CustomAvatarAwardCorrectComponent implements Option<AwardType> {
  get option() { return AwardType.Correct; }
}
