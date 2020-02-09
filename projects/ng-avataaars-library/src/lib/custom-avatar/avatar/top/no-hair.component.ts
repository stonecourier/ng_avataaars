/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { randomId } from '../../helper/randomid';
import { TopType } from '../../options';
import { CustomAvatarTopBaseComponent } from './top-base.component';

@Component({
  selector: '[kip-custom-avatar-top-no-hair]',
  templateUrl: './no-hair.component.html'
})

export class CustomAvatarTopNoHairComponent extends CustomAvatarTopBaseComponent {

  get option() { return TopType.NoHair; }

  readonly mask1: string = randomId('kip-mask');
  readonly path1: string = randomId('kip-path');
  readonly filter1: string = randomId('kip-filter');

}
