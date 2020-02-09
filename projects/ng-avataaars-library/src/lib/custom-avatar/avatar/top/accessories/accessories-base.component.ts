/* tslint:disable:directive-class-suffix */

import { Directive, Input } from '@angular/core';
import { accessoriesColorTranslation } from '../../../colors/accessories-color-translation';
import { urlfix } from '../../../helper/urlfix';
import { AccessoriesColor, AccessoriesType, Option } from '../../../options';

@Directive()
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
