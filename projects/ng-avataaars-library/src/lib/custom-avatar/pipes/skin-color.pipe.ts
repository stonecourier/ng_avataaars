import { Pipe, PipeTransform } from '@angular/core';
import { skinColorTranslation } from '../colors/skin-color-translation';
import { SkinColor } from '../options';

@Pipe({
  name: 'skinColor'
})
export class SkinColorPipe implements PipeTransform {
  transform(skinColor: SkinColor) {
    return skinColorTranslation(skinColor);
  }
}
