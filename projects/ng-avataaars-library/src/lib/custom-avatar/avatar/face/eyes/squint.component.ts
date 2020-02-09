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
  get option() { return EyeType.Squint; }

  readonly mask1: string = randomId('kip-mask');
  readonly mask2: string = randomId('kip-mask');
  readonly path1: string = randomId('kip-path');
  readonly path2: string = randomId('kip-path');

  urlFix(path: string) {
    return urlfix(path);
  }
}
