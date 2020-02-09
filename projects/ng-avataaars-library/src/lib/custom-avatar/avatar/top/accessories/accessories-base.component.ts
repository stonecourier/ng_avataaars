import { Input } from '@angular/core';
import { Option, AccessoriesType, AccessoriesColor } from '../../../options';
import { accessoriesColorTranslation } from '../../../colors/accessories-color-translation';
import { urlfix } from '../../../helper/urlfix';

export class CustomAvatarAccessoriesBaseComponent implements Option<AccessoriesType> {

  get option() { return AccessoriesType.Blank; }

  @Input() accessoriesColor: AccessoriesColor = AccessoriesColor.Black;

  get color() {
    return accessoriesColorTranslation(this.accessoriesColor);
  }

  urlFix(path: string) {
    return urlfix(path);
  }
}

