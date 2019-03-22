/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { TopType } from '../../options';
import { randomId } from '../../helper/randomid';
import { CustomAvatarTopBaseComponent } from './top-base.component';

@Component({
  selector: '[kip-custom-avatar-top-no-hair]',
  templateUrl: './no-hair.component.html',
})

export class CustomAvatarTopNoHairComponent extends CustomAvatarTopBaseComponent {

  option = TopType.NoHair;

  mask1: string = randomId('kip-mask');
  path1: string = randomId('kip-path');
  filter1: string = randomId('kip-filter');

  constructor() {
    super();
  }

}
