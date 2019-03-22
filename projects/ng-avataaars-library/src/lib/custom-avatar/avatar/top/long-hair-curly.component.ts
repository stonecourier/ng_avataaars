/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { TopType } from '../../options';
import { randomId } from '../../helper/randomid';
import { CustomAvatarTopBaseComponent } from './top-base.component';

@Component({
  selector: '[kip-custom-avatar-top-long-hair-curly]',
  templateUrl: './long-hair-curly.component.html',
})

export class CustomAvatarTopLongHairCurlyComponent extends CustomAvatarTopBaseComponent {

  option = TopType.LongHairCurly;

  mask1: string = randomId('kip-mask');
  mask2: string = randomId('kip-mask');
  path1: string = randomId('kip-path');
  path2: string = randomId('kip-path');

  constructor() {
    super();
  }

}
