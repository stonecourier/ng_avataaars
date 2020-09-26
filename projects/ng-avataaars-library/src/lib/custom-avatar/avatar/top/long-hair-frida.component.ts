/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { randomId } from '../../helper/randomid';
import { TopType } from '../../options';
import { CustomAvatarTopBaseComponent } from './top-base.component';

@Component({
  selector: '[kip-custom-avatar-top-long-hair-frida]',
  templateUrl: './long-hair-frida.component.html'
})

export class CustomAvatarTopLongHairFridaComponent extends CustomAvatarTopBaseComponent {

  get option(): TopType { return TopType.LongHairFrida; }

  readonly mask1: string = randomId('kip-mask');
  readonly path1: string = randomId('kip-path');
  readonly path2: string = randomId('kip-path');
  readonly filter1: string = randomId('kip-filter');
  readonly filter2: string = randomId('kip-filter');
  readonly filter3: string = randomId('kip-filter');
  readonly filter4: string = randomId('kip-filter');
  readonly filter5: string = randomId('kip-filter');
  readonly filter6: string = randomId('kip-filter');
  readonly filter7: string = randomId('kip-filter');

}
