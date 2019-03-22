/* tslint:disable:component-selector */

import { Component, Input } from '@angular/core';
import { EyebrowType, HairColor } from '../../../options';
import { hairColorTranslation } from '../../../colors/hair-color-translation';


@Component({
  selector: '[kip-custom-avatar-eye-brows]',
  templateUrl: './eye-brows.component.html',
})

export class CustomAvatarEyebrowsComponent {

  @Input()
  eyebrowType: EyebrowType;

  private _eyebrowColor: HairColor;
  private _color;

  @Input()
  set eyebrowColor(value: HairColor) {
    if (this._eyebrowColor !== value) {
      this._eyebrowColor = value;
      this._color = hairColorTranslation(value);
    }
  }

  get eyebrowColor() {
    return this._eyebrowColor;
  }

  get color() {
    return this._color;
  }
}
