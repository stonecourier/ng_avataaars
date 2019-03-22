/* tslint:disable:component-selector */

import { Component } from '@angular/core';
import { ClotheType } from '../../options';
import { randomId } from '../../helper/randomid';
import { CustomAvatarClothesBaseComponent } from './clothes-base.component';

@Component({
  selector: '[kip-custom-avatar-clothes-hoodie]',
  templateUrl: './hoodie.component.html',
})

export class CustomAvatarClothesHoodieComponent extends CustomAvatarClothesBaseComponent {

  option: ClotheType.Hoodie;

  mask1: string = randomId('kip-mask');
  path1: string = randomId('kip-path');
}
