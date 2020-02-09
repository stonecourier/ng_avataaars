import { Component, Input, Output, EventEmitter, TemplateRef, ContentChildren, AfterContentInit } from '@angular/core';
import { PickerTemplateDirective } from './custom-avatar-picker-template.directive';

@Component({
  selector: 'kip-custom-avatar-picker',
  styleUrls: ['./custom-avatar-picker.css'],
  templateUrl: './custom-avatar-picker.component.html',
})

export class CustomAvatarPickerComponent implements AfterContentInit {

  @Input() title = '';
  @Input() currentOption = '';
  @Input() options: { value: string; label: string }[] = [];
  @Input() backgroundColor = '';
  @Output() readonly optionPicked = new EventEmitter<string>();

  itemTemplate: TemplateRef<any> | null = null;

  @ContentChildren(PickerTemplateDirective) templates: any;

  pick(value: string) {
    this.optionPicked.emit(value);
  }

  ngAfterContentInit() {
    this.templates.forEach((item: any) => {
      switch (item.getType()) {
        case 'item':
          this.itemTemplate = item.template;
          break;
      }
    });
  }
}
