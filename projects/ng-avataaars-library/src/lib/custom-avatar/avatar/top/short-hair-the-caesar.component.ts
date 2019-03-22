/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { TopType } from '../../options';
import { randomId } from '../../helper/randomid';
import { CustomAvatarTopBaseComponent } from './top-base.component';

@Component({
  selector: '[kip-custom-avatar-top-short-hair-the-caesar]',
  templateUrl: './short-hair-the-caesar.component.html',
})

export class CustomAvatarTopShortHairTheCaesarComponent extends CustomAvatarTopBaseComponent {

  option = TopType.ShortHairTheCaesar;

  mask1: string = randomId('kip-mask');
  mask2: string = randomId('kip-mask');
  path1: string = randomId('kip-path');
  path2: string = randomId('kip-path');
  filter1: string = randomId('kip-filter');

  constructor() {
    super();
  }

}
