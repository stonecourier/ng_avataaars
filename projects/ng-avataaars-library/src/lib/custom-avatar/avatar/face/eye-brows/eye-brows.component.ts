/* eslint-disable @angular-eslint/component-selector */

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { hairColorTranslation } from '../../../colors/hair-color-translation';
import { EyebrowType, HairColor } from '../../../options';

@Component({
  selector: '[kip-custom-avatar-eye-brows]',
  templateUrl: './eye-brows.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomAvatarEyebrowsComponent {

  @Input() eyebrowType: EyebrowType = EyebrowType.Default;
  @Input() eyebrowColor: HairColor = HairColor.Black;

  get color(): string {
    return hairColorTranslation(this.eyebrowColor);
  }
}
