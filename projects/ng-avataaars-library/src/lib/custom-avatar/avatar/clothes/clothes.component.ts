/* eslint-disable @angular-eslint/component-selector */

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ClotheColor, ClotheType, GraphicType } from '../../options';

@Component({
  selector: '[kip-custom-avatar-clothes]',
  templateUrl: './clothes.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomAvatarClothesComponent {

  @Input() clotheType: ClotheType = ClotheType.Overall;
  @Input() clotheColor: ClotheColor = ClotheColor.Black;
  @Input() clotheColor2: ClotheColor = ClotheColor.Black;
  @Input() clotheColor3: ClotheColor = ClotheColor.Black;
  @Input() graphicType: GraphicType = GraphicType.Bat;
}
