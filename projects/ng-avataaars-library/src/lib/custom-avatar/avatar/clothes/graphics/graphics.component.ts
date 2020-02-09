/* tslint:disable:component-selector */

import { Component, Input } from '@angular/core';
import { GraphicType, ClotheColor } from '../../../options';

@Component({
  selector: '[kip-custom-avatar-graphics]',
  templateUrl: './graphics.component.html',
})

export class CustomAvatarClothesGraphicsComponent {

  @Input() graphicType: GraphicType = GraphicType.Bat;
  @Input() clotheColor2: ClotheColor = ClotheColor.Black;

}
