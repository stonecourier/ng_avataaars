/* tslint:disable:directive-class-suffix */

import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { tabIndexes } from '../options';

@Directive()
export class CustomAvatarIconBaseComponent {

  @Input() index: tabIndexes = 0;
  @Input() currentIndex: tabIndexes = 0;

  @Output() readonly selectTab = new EventEmitter<tabIndexes>();

  get avatarTabFillColor(): string {
    return this.currentIndex === this.index ? 'black' : 'gray';
  }

  select(): void {
    this.selectTab.emit(this.index);
  }
}
