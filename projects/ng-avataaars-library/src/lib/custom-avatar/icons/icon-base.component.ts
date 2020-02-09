/* tslint:disable:directive-class-suffix */

import { Input, Output, EventEmitter, Directive } from '@angular/core';
import { tabIndexes } from '../options';

@Directive()
export class CustomAvatarIconBaseComponent {

  @Input() index: tabIndexes = 0;
  @Input() currentIndex: tabIndexes = 0;

  @Output() readonly selectTab = new EventEmitter<tabIndexes>();

  get avatarTabFillColor() {
    return this.currentIndex === this.index ? 'black' : 'gray';
  }

  select() {
    this.selectTab.emit(this.index);
  }
}
