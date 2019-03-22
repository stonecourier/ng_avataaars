/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { ClotheType } from '../../options';
import { randomId } from '../../helper/randomid';
import { CustomAvatarClothesBaseComponent } from './clothes-base.component';

@Component({
  selector: '[kip-custom-avatar-clothes-shirt-crew-neck]',
  templateUrl: './shirt-crew-neck.component.html',
})

export class CustomAvatarClothesShirtCrewNeckComponent extends CustomAvatarClothesBaseComponent {

  option: ClotheType.ShirtCrewNeck;

  mask1: string = randomId('kip-mask');
  path1: string = randomId('kip-path');
}
