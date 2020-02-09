/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { randomId } from '../../helper/randomid';
import { TopType } from '../../options';
import { CustomAvatarTopBaseComponent } from './top-base.component';

@Component({
  selector: '[kip-custom-avatar-top-long-hair-bob]',
  templateUrl: './long-hair-bob.component.html'
})

export class CustomAvatarTopLongHairBobComponent extends CustomAvatarTopBaseComponent {

  get option() { return TopType.LongHairBob; }

  readonly mask1: string = randomId('kip-mask');
  readonly mask2: string = randomId('kip-mask');
  readonly path1: string = randomId('kip-path');
  readonly path2: string = randomId('kip-path');

}
