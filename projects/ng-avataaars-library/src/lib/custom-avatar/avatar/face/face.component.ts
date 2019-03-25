/* tslint:disable:component-selector */

import { Component, Input } from '@angular/core';
import { NoseType, MouthType, EyeType, EyebrowType, HairColor, EarringType, EarringColor } from '../../options';

@Component({
  selector: '[kip-custom-avatar-face]',
  templateUrl: './face.component.html',
})

export class CustomAvatarFaceComponent {

  @Input()
  noseType: NoseType;

  @Input()
  mouthType: MouthType;

  @Input()
  eyeType: EyeType;

  @Input()
  eyebrowType: EyebrowType;

  @Input()
  eyebrowColor: HairColor;

  @Input()
  earringType: EarringType;

  @Input()
  earringColor: EarringColor;
}
