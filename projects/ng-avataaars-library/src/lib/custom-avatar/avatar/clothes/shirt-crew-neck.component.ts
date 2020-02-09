/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { randomId } from '../../helper/randomid';
import { ClotheType } from '../../options';
import { CustomAvatarClothesBaseComponent } from './clothes-base.component';

@Component({
  selector: '[kip-custom-avatar-clothes-shirt-crew-neck]',
  templateUrl: './shirt-crew-neck.component.html'
})

export class CustomAvatarClothesShirtCrewNeckComponent extends CustomAvatarClothesBaseComponent {

  get option() { return ClotheType.ShirtCrewNeck; }

  readonly mask1: string = randomId('kip-mask');
  readonly path1: string = randomId('kip-path');
}
