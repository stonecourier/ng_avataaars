import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ColorValue } from './color-value';

@Component({
  selector: 'kip-custom-avatar-color-picker',
  styleUrls: ['./color-picker.css'],
  templateUrl: './color-picker.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomAvatarColorPickerComponent<T> {

  @Input() title = '';
  @Input() currentColor = '';

  @Input() colors: ColorValue<T>[] = [];
  @Output() readonly colorPicked = new EventEmitter<T>();

  pick(value: T) {
    this.colorPicked.emit(value);
  }
}
