/* tslint:disable:component-selector */

import { Component, Input } from '@angular/core';
import { ClotheType, ClotheColor, GraphicType } from '../../options';

@Component({
  selector: '[kip-custom-avatar-clothes]',
  templateUrl: './clothes.component.html',
})

export class CustomAvatarClothesComponent {

  @Input()
  clotheType: ClotheType;

  @Input()
  clotheColor: ClotheColor;

  @Input()
  clotheColor2: ClotheColor;

  @Input()
  clotheColor3: ClotheColor;

  @Input()
  graphicType: GraphicType;
}
