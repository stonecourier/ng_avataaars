/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { Option, EyeType } from '../../../options';
import { randomId } from '../../../helper/randomid';
import { urlfix } from '../../../helper/urlfix';

@Component({
  selector: '[kip-custom-avatar-eyes-squint]',
  templateUrl: './squint.component.html',
})

export class CustomAvatarEyesSquintComponent implements Option<EyeType> {
  option = EyeType.Squint;

  mask1: string = randomId('kip-mask');
  mask2: string = randomId('kip-mask');
  path1: string = randomId('kip-path');
  path2: string = randomId('kip-path');

  urlFix(path: string) {
    return urlfix(path);
  }
}
