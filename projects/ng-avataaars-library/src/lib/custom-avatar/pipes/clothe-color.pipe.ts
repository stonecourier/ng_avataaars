import { Pipe, PipeTransform } from '@angular/core';
import { clotheColorTranslation } from '../colors/clothe-color-translation';
import { ClotheColor } from '../options';

@Pipe({
  name: 'clotheColor'
})
export class ClotheColorPipe implements PipeTransform {
  transform(clotheColor: ClotheColor) {
    return clotheColorTranslation(clotheColor);
  }
}
