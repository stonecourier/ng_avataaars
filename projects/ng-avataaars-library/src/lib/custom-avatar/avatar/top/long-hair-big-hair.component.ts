/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { TopType } from '../../options';
import { randomId } from '../../helper/randomid';
import { CustomAvatarTopBaseComponent } from './top-base.component';

@Component({
  selector: '[kip-custom-avatar-top-long-hair-big-hair]',
  templateUrl: './long-hair-big-hair.component.html',
})

export class CustomAvatarTopLongHairBigHairComponent extends CustomAvatarTopBaseComponent {

  option = TopType.LongHairBigHair;

  mask1: string = randomId('kip-mask');
  mask2: string = randomId('kip-mask');
  mask3: string = randomId('kip-mask');
  path1: string = randomId('kip-path');
  path2: string = randomId('kip-path');
  path3: string = randomId('kip-path');

  constructor() {
    super();
  }

}
