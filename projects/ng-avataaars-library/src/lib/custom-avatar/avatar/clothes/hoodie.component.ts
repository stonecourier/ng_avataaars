/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { randomId } from '../../helper/randomid';
import { ClotheType } from '../../options';
import { CustomAvatarClothesBaseComponent } from './clothes-base.component';

@Component({
  selector: '[kip-custom-avatar-clothes-hoodie]',
  templateUrl: './hoodie.component.html'
})

export class CustomAvatarClothesHoodieComponent extends CustomAvatarClothesBaseComponent {

  get option(): ClotheType { return ClotheType.Hoodie; }

  readonly mask1: string = randomId('kip-mask');
  readonly path1: string = randomId('kip-path');
}