/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { Option, AwardType } from '../../options';

@Component({
  selector: '[kip-custom-avatar-award-correct]',
  templateUrl: './correct.component.html',
})

export class CustomAvatarAwardCorrectComponent implements Option<AwardType> {
  option = AwardType.Correct;
}
