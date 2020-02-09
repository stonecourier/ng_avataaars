/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { TopType } from '../../options';
import { randomId } from '../../helper/randomid';
import { CustomAvatarTopBaseComponent } from './top-base.component';

@Component({
  selector: '[kip-custom-avatar-top-short-hair-short-waved]',
  templateUrl: './short-hair-short-waved.component.html',
})

export class CustomAvatarTopShortHairShortWavedComponent extends CustomAvatarTopBaseComponent {

  get option() { return TopType.ShortHairShortWaved; }

  readonly mask1: string = randomId('kip-mask');
  readonly mask2: string = randomId('kip-mask');
  readonly path1: string = randomId('kip-path');
  readonly path2: string = randomId('kip-path');
  readonly filter1: string = randomId('kip-filter');

  constructor() {
    super();
  }

}
