import { Input, Output, EventEmitter } from '@angular/core';

export class CustomAvatarIconBaseComponent {

  @Input()
  index: number;

  @Input()
  currentIndex: number;

  @Output()
  selectTab = new EventEmitter<number>();

  get avatarTabFillColor() {
    return this.currentIndex === this.index ? 'black' : 'gray';
  }

  select() {
    this.selectTab.emit(this.index);
  }
}
