/* eslint-disable @angular-eslint/component-selector */

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AwardType, Option } from '../../options';

@Component({
  selector: '[kip-custom-avatar-award-correct]',
  templateUrl: './correct.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomAvatarAwardCorrectComponent implements Option<AwardType> {
  get option(): AwardType { return AwardType.Correct; }
}
