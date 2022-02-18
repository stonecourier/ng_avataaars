import { AfterContentInit, ChangeDetectionStrategy, Component, ContentChildren, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { PickerTemplateDirective } from './custom-avatar-picker-template.directive';
import { KeyValue } from './options';

@Component({
  selector: 'kip-custom-avatar-picker',
  styleUrls: ['./custom-avatar-picker.css'],
  templateUrl: './custom-avatar-picker.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomAvatarPickerComponent<T> implements AfterContentInit {

  @Input() title = '';
  @Input() currentOption = '';
  @Input() options: KeyValue<T>[] = [];
  @Input() backgroundColor = '';
  @Output() readonly optionPicked = new EventEmitter<T>();

  itemTemplate: TemplateRef<any> | null = null;

  @ContentChildren(PickerTemplateDirective) templates: PickerTemplateDirective[] = [];

  pick(value: T): void {
    this.optionPicked.emit(value);
  }

  ngAfterContentInit(): void {
    this.templates.forEach((item: PickerTemplateDirective) => {
      switch (item.getType()) {
        case 'item':
          this.itemTemplate = item.template;
          break;
      }
    });
  }
}
