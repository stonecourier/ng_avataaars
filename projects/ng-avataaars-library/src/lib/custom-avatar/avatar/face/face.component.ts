/* tslint:disable:component-selector */

import { Component, Input } from '@angular/core';
import { EarringColor, EarringType, EyebrowType, EyeType, HairColor, MouthType, NoseType } from '../../options';

@Component({
  selector: '[kip-custom-avatar-face]',
  templateUrl: './face.component.html'
})

export class CustomAvatarFaceComponent {

  @Input() noseType: NoseType = NoseType.Default;

  @Input() mouthType: MouthType = MouthType.Default;

  @Input() eyeType: EyeType = EyeType.Happy;

  @Input() eyebrowType: EyebrowType = EyebrowType.Default;

  @Input() eyebrowColor: HairColor = HairColor.Black;

  @Input() earringType: EarringType = EarringType.Blank;

  @Input() earringColor: EarringColor = EarringColor.Black;
}
