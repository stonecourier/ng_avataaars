/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { TopType } from '../../options';
import { randomId } from '../../helper/randomid';
import { CustomAvatarTopBaseComponent } from './top-base.component';

@Component({
  selector: '[kip-custom-avatar-top-long-hair-dreads]',
  templateUrl: './long-hair-dreads.component.html',
})

export class CustomAvatarTopLongHairDreadsComponent extends CustomAvatarTopBaseComponent {

  option = TopType.LongHairDreads;

  mask1: string = randomId('kip-mask');
  mask2: string = randomId('kip-mask');
  path1: string = randomId('kip-path');
  path2: string = randomId('kip-path');

  constructor() {
    super();
  }

}
