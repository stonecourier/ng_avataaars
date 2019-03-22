/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { TopType } from '../../options';
import { randomId } from '../../helper/randomid';
import { CustomAvatarTopBaseComponent } from './top-base.component';

@Component({
  selector: '[kip-custom-avatar-top-long-hair-frida]',
  templateUrl: './long-hair-frida.component.html',
})

export class CustomAvatarTopLongHairFridaComponent extends CustomAvatarTopBaseComponent {

  option = TopType.LongHairFrida;

  mask1: string = randomId('kip-mask');
  path1: string = randomId('kip-path');
  path2: string = randomId('kip-path');
  filter1: string = randomId('kip-filter');
  filter2: string = randomId('kip-filter');
  filter3: string = randomId('kip-filter');
  filter4: string = randomId('kip-filter');
  filter5: string = randomId('kip-filter');
  filter6: string = randomId('kip-filter');
  filter7: string = randomId('kip-filter');


  constructor() {
    super();
  }

}
