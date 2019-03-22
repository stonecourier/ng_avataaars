/* tslint:disable:component-selector */

import { Component, Input } from '@angular/core';
import { NoseType, MouthType, EyeType, EyebrowType, HairColor } from '../../options';

@Component({
  selector: '[kip-custom-avatar-face]',
  templateUrl: './face.component.html',
})

export class CustomAvatarFaceComponent {

  @Input()
  noseType: NoseType = NoseType.Default;

  @Input()
  mouthType: MouthType = MouthType.Concerned;

  @Input()
  eyeType: EyeType = EyeType.Cry;

  @Input()
  eyebrowType: EyebrowType = EyebrowType.Angry;

  @Input()
  eyebrowColor: HairColor;
}
