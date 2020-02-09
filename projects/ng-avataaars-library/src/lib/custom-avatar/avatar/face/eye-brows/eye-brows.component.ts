/* tslint:disable:component-selector */

import { Component, Input } from '@angular/core';
import { EyebrowType, HairColor } from '../../../options';
import { hairColorTranslation } from '../../../colors/hair-color-translation';


@Component({
  selector: '[kip-custom-avatar-eye-brows]',
  templateUrl: './eye-brows.component.html',
})

export class CustomAvatarEyebrowsComponent {

  @Input() eyebrowType: EyebrowType = EyebrowType.Default;
  @Input() eyebrowColor: HairColor = HairColor.Black;

  get color() {
    return hairColorTranslation(this.eyebrowColor);
  }
}
