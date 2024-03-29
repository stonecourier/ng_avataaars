/* eslint-disable @angular-eslint/component-selector */

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ClotheColor, GraphicType } from '../../../options';

@Component({
  selector: '[kip-custom-avatar-graphics]',
  templateUrl: './graphics.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomAvatarClothesGraphicsComponent {

  @Input() graphicType: GraphicType = GraphicType.Bat;
  @Input() clotheColor2: ClotheColor = ClotheColor.Black;

}
