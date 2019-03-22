import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'kip-custom-avatar-color-picker',
  styleUrls: ['./color-picker.css'],
  templateUrl: './color-picker.component.html',
})

export class CustomAvatarColorPickerComponent {

  @Input()
  title: string;

  @Input()
  currentColor: string;

  @Input()
  colors: { value: string, label: any }[];

  @Input()
  colorConverter: (value: string) => string;

  @Output()
  colorPicked = new EventEmitter<string>();

  pick(value: string) {
    this.colorPicked.emit(value);
  }
}
