/* eslint-disable @angular-eslint/directive-class-suffix */

import { Directive, Input } from '@angular/core';
import { accessoriesColorTranslation } from '../../../colors/accessories-color-translation';
import { urlfix } from '../../../helper/urlfix';
import { AccessoriesColor, AccessoriesType, Option } from '../../../options';

@Directive()
export class CustomAvatarAccessoriesBaseComponent implements Option<AccessoriesType> {

  get option(): AccessoriesType { return AccessoriesType.Blank; }

  @Input() accessoriesColor: AccessoriesColor = AccessoriesColor.Black;

  get color(): string {
    return accessoriesColorTranslation(this.accessoriesColor);
  }

  urlFix(path: string): string {
    return urlfix(path);
  }
}
