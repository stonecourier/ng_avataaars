/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { TopType } from '../../options';
import { randomId } from '../../helper/randomid';
import { CustomAvatarTopBaseComponent } from './top-base.component';

@Component({
  selector: '[kip-custom-avatar-top-short-hair-the-caesar-side-part]',
  templateUrl: './short-hair-the-caesar-side-part.component.html',
})

export class CustomAvatarTopShortHairTheCaesarSidePartComponent extends CustomAvatarTopBaseComponent {

  option = TopType.ShortHairTheCaesarSidePart;

  mask1: string = randomId('kip-mask');
  mask2: string = randomId('kip-mask');
  path1: string = randomId('kip-path');
  path2: string = randomId('kip-path');
  filter1: string = randomId('kip-filter');

  constructor() {
    super();
  }

}
