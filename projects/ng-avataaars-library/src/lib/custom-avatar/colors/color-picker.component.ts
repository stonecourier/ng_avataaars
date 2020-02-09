import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'kip-custom-avatar-color-picker',
  styleUrls: ['./color-picker.css'],
  templateUrl: './color-picker.component.html'
})

export class CustomAvatarColorPickerComponent {

  @Input() title = '';
  @Input() currentColor = '';
  @Input() colors: { value: string; label: string }[] = [];
  @Output() readonly colorPicked = new EventEmitter<string>();
  @Input() colorConverter: (value: string) => string = (_value: string) => '';

  pick(value: string) {
    this.colorPicked.emit(value);
  }
}
