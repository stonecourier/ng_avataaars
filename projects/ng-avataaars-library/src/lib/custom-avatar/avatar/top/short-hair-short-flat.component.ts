/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { TopType } from '../../options';
import { randomId } from '../../helper/randomid';
import { CustomAvatarTopBaseComponent } from './top-base.component';

@Component({
  selector: '[kip-custom-avatar-top-short-hair-short-flat]',
  templateUrl: './short-hair-short-flat.component.html',
})

export class CustomAvatarTopShortHairShortFlatComponent extends CustomAvatarTopBaseComponent {

  get option() { return TopType.ShortHairShortCurly; }

  readonly mask1: string = randomId('kip-mask');
  readonly mask2: string = randomId('kip-mask');
  readonly path1: string = randomId('kip-path');
  readonly path2: string = randomId('kip-path');
  readonly filter1: string = randomId('kip-filter');

  constructor() {
    super();
  }

}
